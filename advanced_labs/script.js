// script.js
// FINAL VERSION WITH NEW THEME BUTTON ("Bật đèn" / "Tắt đèn")
// - Centered results
// - Two ⧉ Copy chips
// - Monospace soft-green numbers
// - Uppercase RESULT
// - Explanation text under results
// - “Tên Hoà Hảo:” labels with accent color
// - Units removed from labels
// - Option C number formatting

import { BIOMARKERS } from "./biomarkers.js";
import { PINNED } from "./pinned.js";

/* ============================================================================
   THEME SYSTEM
============================================================================ */
const html = document.documentElement;
const themeButton = document.getElementById("themeButton");

function applyThemeLabel() {
    const isDark = html.getAttribute("data-theme") === "dark";
    themeButton.textContent = isDark ? "Bật đèn" : "Tắt đèn";
}

function loadTheme() {
    const t = localStorage.getItem("theme") || "dark";
    html.setAttribute("data-theme", t);
    applyThemeLabel();
}

function toggleTheme() {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    applyThemeLabel();
}

themeButton.addEventListener("click", toggleTheme);
loadTheme();

/* ============================================================================
   NUMBER NORMALIZATION + FORMAT (Option C)
============================================================================ */

function normalizeInput(str) {
    if (!str) return null;
    str = str.trim();

    // VN decimal (0,23 → 0.23)
    if (str.includes(",")) {
        const last = str.lastIndexOf(",");
        const intPart = str.slice(0, last).replace(/\./g, "");
        const decPart = str.slice(last + 1);
        str = intPart + "." + decPart;
    }

    // Remove thousand separators
    str = str.replace(/,/g, "");

    const num = Number(str);
    return Number.isFinite(num) ? num : null;
}

function formatUS(num) {
    if (!Number.isFinite(num)) return "";
    let s = num.toFixed(2);
    if (s.endsWith("00")) return s.slice(0, -3);
    if (s.endsWith("0")) return s.slice(0, -1);
    return s;
}

function formatVN(num) {
    if (!Number.isFinite(num)) return "";
    let s = num.toFixed(2);
    if (s.endsWith("00")) return s.slice(0, -3).replace(".", ",");
    if (s.endsWith("0")) return s.slice(0, -1).replace(".", ",");
    return s.replace(".", ",");
}

/* ============================================================================
   INTERNAL STORAGE
============================================================================ */
const values = {};

/* ============================================================================
   SORT ORDER
============================================================================ */
const pinnedSet = new Set(PINNED);

const sortedBiomarkers = [
    ...BIOMARKERS.filter(b => pinnedSet.has(b.whoop)),
    ...BIOMARKERS
        .filter(b => !pinnedSet.has(b.whoop))
        .sort((a, b) => a.whoop.localeCompare(b.whoop))
];

/* ============================================================================
   COPY FEEDBACK
============================================================================ */
function markCopied(btn) {
    btn.classList.add("copied");
    const original = btn.textContent;
    btn.textContent = "⧉ Copied";
    setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
    }, 1200);
}

/* ============================================================================
   UI HELPERS
============================================================================ */

function createSeparator() {
    const sep = document.createElement("div");
    sep.className = "result-title";
    sep.textContent = "RESULT";
    return sep;
}

function createCopyChip(value) {
    const chip = document.createElement("div");
    chip.className = "copy-chip";
    chip.textContent = "⧉ Copy";

    chip.addEventListener("click", () => {
        navigator.clipboard.writeText(value);
        markCopied(chip);
    });

    return chip;
}

function createExplanation() {
    const exp = document.createElement("div");
    exp.className = "result-explain";
    exp.textContent =
        "WHOOP tại VN dùng dấu phẩy thay cho dấu chấm (0,23 thay vì 0.23). Nếu bạn không gõ được trong app, hãy copy giá trị từ đây.";
    return exp;
}

/* ============================================================================
   RENDER: DIRECT MATCH
============================================================================ */
function renderDirect(bio, body) {
    body.innerHTML = `<div class="label">Tên Hoà Hảo: ${bio.hhName}</div>`;

    const row = document.createElement("div");
    row.className = "input-row";

    const input = document.createElement("input");
    input.placeholder = bio.hhName;

    const unit = document.createElement("div");
    unit.className = "unit";
    unit.textContent = bio.hhUnit;

    row.appendChild(input);
    row.appendChild(unit);
    body.appendChild(row);

    const resultSection = document.createElement("div");
    resultSection.className = "result-section";
    resultSection.style.display = "none";
    body.appendChild(resultSection);

    input.addEventListener("input", () => {
        const raw = normalizeInput(input.value);
        if (!Number.isFinite(raw)) {
            resultSection.style.display = "none";
            return;
        }

        const us = formatUS(raw);
        const vn = formatVN(raw);

        resultSection.innerHTML = "";
        resultSection.style.display = "block";
        resultSection.appendChild(createSeparator());

        // US
        const usLine = document.createElement("div");
        usLine.className = "result-line";
        usLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `US: ${us}`
        }));
        usLine.appendChild(createCopyChip(us));

        // VN
        const vnLine = document.createElement("div");
        vnLine.className = "result-line";
        vnLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `VN: ${vn}`
        }));
        vnLine.appendChild(createCopyChip(vn));

        resultSection.appendChild(usLine);
        resultSection.appendChild(vnLine);
        resultSection.appendChild(createExplanation());
    });
}

/* ============================================================================
   RENDER: CONVERT
============================================================================ */
function renderConvert(bio, body) {
    body.innerHTML = `<div class="label">Tên Hoà Hảo: ${bio.hhName}</div>`;

    const row = document.createElement("div");
    row.className = "input-row";

    const input = document.createElement("input");
    input.placeholder = bio.hhName;

    const unit = document.createElement("div");
    unit.className = "unit";
    unit.textContent = bio.hhUnit;

    row.appendChild(input);
    row.appendChild(unit);
    body.appendChild(row);

    const resultSection = document.createElement("div");
    resultSection.className = "result-section";
    resultSection.style.display = "none";
    body.appendChild(resultSection);

    input.addEventListener("input", () => {
        const raw = normalizeInput(input.value);
        if (!Number.isFinite(raw)) {
            resultSection.style.display = "none";
            return;
        }

        const converted = bio.convert(raw);
        if (!Number.isFinite(converted)) {
            resultSection.style.display = "none";
            return;
        }

        const us = formatUS(converted);
        const vn = formatVN(converted);

        resultSection.innerHTML = "";
        resultSection.style.display = "block";
        resultSection.appendChild(createSeparator());

        // US
        const usLine = document.createElement("div");
        usLine.className = "result-line";
        usLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `US: ${us}`
        }));
        usLine.appendChild(createCopyChip(us));

        // VN
        const vnLine = document.createElement("div");
        vnLine.className = "result-line";
        vnLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `VN: ${vn}`
        }));
        vnLine.appendChild(createCopyChip(vn));

        resultSection.appendChild(usLine);
        resultSection.appendChild(vnLine);
        resultSection.appendChild(createExplanation());
    });
}

/* ============================================================================
   RENDER: CALCULATED
============================================================================ */
function renderCalculated(bio, body) {
    body.innerHTML = `<div class="label">Nhập các giá trị Hoà Hảo</div>`;

    const inputBoxes = {};

    for (const key of bio.inputRequirements) {
        const info = bio.inputs[key];

        // Label
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = "Tên Hoà Hảo: " + info.hhName;
        body.appendChild(label);

        const row = document.createElement("div");
        row.className = "input-row";

        const input = document.createElement("input");
        input.placeholder = info.hhName;
        inputBoxes[key] = input;

        const unit = document.createElement("div");
        unit.className = "unit";
        unit.textContent = info.unit || info.hhUnit || "";

        row.appendChild(input);
        row.appendChild(unit);
        body.appendChild(row);

        input.addEventListener("input", compute);
    }

    const resultSection = document.createElement("div");
    resultSection.className = "result-section";
    resultSection.style.display = "none";
    body.appendChild(resultSection);

    function compute() {
        const args = {};
        let any = false;

        for (const key of bio.inputRequirements) {
            const val = normalizeInput(inputBoxes[key].value);
            args[key] = val;
            if (val !== null) any = true;
        }

        if (!any) {
            resultSection.style.display = "none";
            return;
        }

        const result = bio.convert(args);
        if (!Number.isFinite(result)) {
            resultSection.style.display = "none";
            return;
        }

        const us = formatUS(result);
        const vn = formatVN(result);

        resultSection.innerHTML = "";
        resultSection.style.display = "block";
        resultSection.appendChild(createSeparator());

        const usLine = document.createElement("div");
        usLine.className = "result-line";
        usLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `US: ${us}`
        }));
        usLine.appendChild(createCopyChip(us));

        const vnLine = document.createElement("div");
        vnLine.className = "result-line";
        vnLine.appendChild(Object.assign(document.createElement("div"), {
            className: "result-num",
            textContent: `VN: ${vn}`
        }));
        vnLine.appendChild(createCopyChip(vn));

        resultSection.appendChild(usLine);
        resultSection.appendChild(vnLine);
        resultSection.appendChild(createExplanation());
    }
}

/* ============================================================================
   RENDER: MISSING
============================================================================ */
function renderMissing(bio, body) {
    body.innerHTML = `
        <div class="label">Không có dữ liệu từ Hoà Hảo</div>
        <div class="explain">WHOOP yêu cầu nhưng Hoà Hảo không cung cấp.</div>
    `;
}

/* ============================================================================
   MAIN RENDER
============================================================================ */
function renderBiomarker(bio) {
    const card = document.createElement("div");
    card.className = "biomarker-card";

    const body = document.createElement("div");
    body.className = "bio-body";

    const header = document.createElement("div");
    header.className = "bio-header";
    header.innerHTML = `<span>${bio.whoop}</span>`;

    header.addEventListener("click", () => {
        body.style.display =
            body.style.display === "block" ? "none" : "block";
    });

    card.appendChild(header);
    card.appendChild(body);

    if (bio.type === "direct") {
        renderDirect(bio, body);
    } else if (bio.type === "convert") {
        renderConvert(bio, body);
    } else if (bio.type === "calculated") {
        renderCalculated(bio, body);
    } else {
        renderMissing(bio, body);
    }

    return card;
}

/* ============================================================================
   FILTER + INITIAL RENDER
============================================================================ */
const container = document.getElementById("biomarkerContainer");
const searchBox = document.getElementById("searchBox");

function renderAll(filter = "") {
    container.innerHTML = "";

    const f = filter.toLowerCase();

    sortedBiomarkers.forEach(bio => {
        const match =
            bio.whoop.toLowerCase().includes(f) ||
            (bio.hhName && bio.hhName.toLowerCase().includes(f)) ||
            (bio.inputs &&
                Object.values(bio.inputs).some(x =>
                    x.hhName.toLowerCase().includes(f)
                ));

        if (!filter || match) {
            container.appendChild(renderBiomarker(bio));
        }
    });
}

renderAll();

searchBox.addEventListener("input", () => {
    renderAll(searchBox.value);
});
