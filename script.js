import { biomarkers } from "./biomarkers.js";
import { pinned } from "./pinned.js";

// =============================
// GLOBAL STATE
// =============================
const state = {
    filter: "",
    values: {} // stores all user inputs
};

// =============================
// THEME (default = dark)
// =============================
function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    document.getElementById("themeLabel").textContent = isDark ? "Dark" : "Light";
}

function initThemeToggle() {
    const toggle = document.getElementById("themeToggle");
    toggle.checked = true;
    applyTheme(true);

    toggle.addEventListener("change", () => {
        applyTheme(toggle.checked);
    });
}

// =============================
// FILTER LOGIC
// =============================
function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function applyFilter(list) {
    if (!state.filter.trim()) return list;

    const q = normalize(state.filter);

    return list.filter(item =>
        normalize(item.whoop).includes(q) ||
        normalize(item.hh).includes(q)
    );
}

// =============================
// SORT: pinned first
// =============================
function sortBiomarkers(list) {
    return list.slice().sort((a, b) => {
        const ai = pinned.indexOf(a.whoop);
        const bi = pinned.indexOf(b.whoop);

        if (ai !== -1 && bi === -1) return -1;
        if (bi !== -1 && ai === -1) return 1;

        if (ai !== -1 && bi !== -1) return ai - bi;

        return a.whoop.localeCompare(b.whoop);
    });
}

// =============================
// RENDER A SINGLE BIOMARKER CARD
// =============================
function renderCard(item) {
    const card = document.createElement("div");
    card.className = "card";

    const isPinned = pinned.includes(item.whoop);

    card.innerHTML = `
        <div class="card-header ${isPinned ? "pinned" : ""}">
            <div class="title">${item.whoop}</div>
            <button class="toggle-btn">+</button>
        </div>
    `;

    const body = document.createElement("div");
    body.className = "card-body hidden";

    // DIRECT — no input box
    if (item.type === "direct") {
        body.innerHTML = `
            <div class="hh-line"><strong>Tên Hoà Hảo:</strong> ${item.hh}</div>
            <div class="hh-line"><strong>Đơn vị:</strong> ${item.unit_in}</div>
            <div class="info-green">Dùng đúng giá trị Hoà Hảo nhập vào WHOOP.</div>
        `;
    }

    // CONVERT — one input
    if (item.type === "convert") {
        body.innerHTML = `
            <label class="input-label">
                ${item.hh} (${item.unit_in})
            </label>
            <input class="input-box" type="number" data-key="${item.key}" placeholder="Nhập giá trị">
            <div class="result-line">
                <strong>Kết quả WHOOP:</strong>
                <span id="res-${item.key}">__</span> ${item.unit_out}
            </div>
        `;
    }

    // CALC — multiple inputs & formula
    if (item.type === "calc") {
        body.innerHTML =
            item.deps.map(d => `
                <label class="input-label">${d.hh} (${d.unit_in})</label>
                <input class="input-box" type="number" data-key="${d.key}" placeholder="Nhập ${d.hh}">
            `).join("") +
            `
            <div class="result-line">
                <strong>Kết quả WHOOP:</strong>
                <span id="res-${item.key}">__</span> ${item.unit_out}
            </div>
            <div class="formula-box">${item.info || ""}</div>
        `;
    }

    card.appendChild(body);

    // TOGGLE UI
    const toggle = card.querySelector(".toggle-btn");
    toggle.addEventListener("click", () => {
        body.classList.toggle("hidden");
        toggle.textContent = body.classList.contains("hidden") ? "+" : "–";
    });

    return card;
}

// =============================
// LIVE INPUT HANDLING
// =============================
function attachInputHandlers() {
    document.querySelectorAll(".input-box").forEach(input => {
        input.addEventListener("input", (e) => {
            const key = e.target.dataset.key;
            state.values[key] = parseFloat(e.target.value) || null;
            updateOne(key);
        });
    });
}

// =============================
// UPDATE A SINGLE RESULT
// =============================
function updateOne(key) {
    const item = biomarkers.find(x => x.key === key);
    if (!item) return;

    let output = null;

    if (item.type === "convert") {
        const v = state.values[item.key];
        if (v != null) output = item.convert(v);
    }

    if (item.type === "calc") {
        const deps = {};
        let allFilled = true;

        item.deps.forEach(d => {
            if (state.values[d.key] == null) allFilled = false;
            deps[d.key] = state.values[d.key];
        });

        if (allFilled) output = item.calc(deps);
    }

    const target = document.getElementById(`res-${key}`);
    if (target) target.textContent = output ?? "__";
}

// =============================
// MAIN RENDER
// =============================
function render() {
    const container = document.getElementById("biomarkerList");
    container.innerHTML = "";

    const filtered = applyFilter(
        sortBiomarkers(biomarkers)
    );

    filtered.forEach(item => {
        container.appendChild(renderCard(item));
    });

    attachInputHandlers();
}

// =============================
// SEARCH FILTER
// =============================
function initFilterBox() {
    const box = document.getElementById("searchBox");
    box.addEventListener("input", (e) => {
        state.filter = e.target.value;
        render();
    });
}

// =============================
// INIT
// =============================
window.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initFilterBox();
    render();
});
