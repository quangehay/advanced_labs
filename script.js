/* ============================================================
   WHOOP x Hoà Hảo Conversion Tool
   Author: ChatGPT
   Logic strictly follows user requirements:
   - Direct match biomarkers: Input box ONLY for number-format conversion.
   - Converted biomarkers: Use correct input boxes and auto-calc rules.
   - Show US + VN format always.
   - Provide copy buttons.
   ============================================================ */

// ----------- GLOBAL UTILITIES --------------------------------

function formatUS(x) {
    if (x === "" || isNaN(x)) return "";
    return Number(x).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 6
    });
}

function formatVN(x) {
    if (x === "" || isNaN(x)) return "";
    return Number(x).toLocaleString("de-DE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 6
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

// ---------------------------------------------------------------
// Render UI
// ---------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("biomarker-list");
    const searchBox = document.getElementById("searchBox");
    const themeToggle = document.getElementById("themeToggle");

    document.documentElement.classList.add("dark");

    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        themeToggle.innerText =
            document.documentElement.classList.contains("dark") ? "Light" : "Dark";
    });

    // ----------------- RENDER ALL MARKERS ---------------------

    let allMarkers = [...PINNED_MARKERS, ...OTHER_MARKERS];

    function render() {
        container.innerHTML = "";

        const keyword = searchBox.value.trim().toLowerCase();

        allMarkers.forEach((bm) => {
            const searchable =
                `${bm.whoopName} ${bm.hoaHaoName || ""}`.toLowerCase();

            if (!searchable.includes(keyword)) return;

            const block = document.createElement("div");
            block.className =
                "biomarker-block border border-gray-700 dark:border-gray-500 p-4 rounded-xl mb-3";

            block.innerHTML = `
                <div class="header flex justify-between items-center">
                    <div class="font-semibold text-lg">${bm.whoopName}</div>
                    <button class="toggle-btn px-3 py-1 bg-gray-700 text-white rounded">
                        ▼
                    </button>
                </div>

                <div class="body hidden mt-3 pl-2">
                    ${renderBody(bm)}
                </div>
            `;

            const btn = block.querySelector(".toggle-btn");
            const body = block.querySelector(".body");
            btn.addEventListener("click", () => {
                body.classList.toggle("hidden");
            });

            container.appendChild(block);
        });
    }

    // ----------------- BODY BUILDER --------------------------

    function renderBody(bm) {
        // A) Direct Match (unit preserved, value same)
        if (bm.type === "direct") {
            return `
                <div class="mb-2 text-sm opacity-80">
                    Tên trong Hoà Hảo: <b>${bm.hoaHaoName}</b> (${bm.hoaHaoUnit})
                </div>

                <div class="mb-1 text-sm opacity-75">
                    Dùng ô này để chuyển định dạng số trước khi nhập vào WHOOP.
                </div>

                <input type="text"
                    class="fmtInput w-full p-2 rounded bg-gray-800 text-white"
                    placeholder="Nhập giá trị Hoà Hảo (VD: 40.83)"
                />

                <button class="convertBtn mt-2 px-3 py-1 bg-blue-600 rounded text-white">
                    Đổi
                </button>

                <div class="resultArea mt-3 text-sm hidden">
                    <div>US format: <span class="usVal font-semibold"></span>
                        <button class="copyUS ml-2 px-2 py-1 bg-gray-600 rounded">copy</button>
                    </div>

                    <div class="mt-2">VN format: <span class="vnVal font-semibold"></span>
                        <button class="copyVN ml-2 px-2 py-1 bg-gray-600 rounded">copy</button>
                    </div>
                </div>

                <div class="text-xs mt-3 opacity-60">
                    Một số trường hợp WHOOP yêu cầu dấu <b>,</b> thay vì dấu <b>.</b>.
                    Dán số vào đây → bấm Đổi → sao chép định dạng phù hợp.
                </div>
            `;
        }

        // B) Conversion / Calculated
        if (bm.type === "conversion") {
            let inputHtml = "";
            bm.inputs.forEach((inp, idx) => {
                inputHtml += `
                    <div class="mt-2">
                        <div class="text-sm opacity-75 mb-1">${inp.label} (${inp.unit})</div>
                        <input class="calcInput calc_${bm.id}_${idx}
                               w-full p-2 rounded bg-gray-800 text-white"
                               placeholder="Nhập ${inp.label}">
                    </div>
                `;
            });

            return `
                ${inputHtml}

                <div class="mt-4 text-sm">Kết quả:</div>

                <div class="mt-1">US:
                    <span class="calcUS font-semibold"></span>
                    <button class="copyUS ml-2 px-2 py-1 bg-gray-600 rounded">copy</button>
                </div>

                <div class="mt-2">VN:
                    <span class="calcVN font-semibold"></span>
                    <button class="copyVN ml-2 px-2 py-1 bg-gray-600 rounded">copy</button>
                </div>

                <div class="text-xs mt-3 opacity-60">
                    Công thức: ${bm.explanation}
                </div>
            `;
        }

        return `<div>Lỗi cấu hình biomarker</div>`;
    }

    // ----------------------------------------------------------

    // EVENT DELEGATION FOR ALL INPUTS
    container.addEventListener("click", (e) => {
        const block = e.target.closest(".biomarker-block");
        if (!block) return;

        // DIRECT MATCH – conversion
        if (e.target.classList.contains("convertBtn")) {
            const input = block.querySelector(".fmtInput");
            const resultBox = block.querySelector(".resultArea");
            const us = block.querySelector(".usVal");
            const vn = block.querySelector(".vnVal");

            const raw = input.value.replace(",", "."); // normalize

            if (raw === "" || isNaN(raw)) {
                us.textContent = "";
                vn.textContent = "";
                resultBox.classList.remove("hidden");
                return;
            }

            us.textContent = formatUS(raw);
            vn.textContent = formatVN(raw);
            resultBox.classList.remove("hidden");
        }

        // DIRECT MATCH — COPY
        if (e.target.classList.contains("copyUS")) {
            const val = block.querySelector(".usVal").textContent;
            copyToClipboard(val);
        }
        if (e.target.classList.contains("copyVN")) {
            const val = block.querySelector(".vnVal").textContent;
            copyToClipboard(val);
        }

        // CONVERSION — real calculation
        if (e.target.classList.contains("calcInput")) {
            calc(block);
        }
    });

    function calc(block) {
        const title = block.querySelector(".header div").innerText;
        const bm = [...PINNED_MARKERS, ...OTHER_MARKERS].find(
            (x) => x.whoopName === title
        );
        if (!bm || bm.type !== "conversion") return;

        let values = [];
        for (let i = 0; i < bm.inputs.length; i++) {
            let v = block.querySelector(`.calc_${bm.id}_${i}`).value;
            v = v.replace(",", "."); // normalize decimal
            if (v === "" || isNaN(v)) return;
            values.push(Number(v));
        }

        let result = bm.calc(...values);

        block.querySelector(".calcUS").textContent = formatUS(result);
        block.querySelector(".calcVN").textContent = formatVN(result);
    }

    // ----------------------------------------------------------

    searchBox.addEventListener("input", render);

    render();
});
