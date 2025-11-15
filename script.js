// script.js — Rendering engine for WHOOP Lab Helper
// Works with: pinned.js + biomarkers.js

//------------------------------------------------------
// Helpers
//------------------------------------------------------

// Normalize search input
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Format number with WHOOP style
function fmt(v) {
  if (v === null || v === undefined || Number.isNaN(v)) return "";
  return Number(v).toFixed(2).replace(/\.00$/, "");
}

//------------------------------------------------------
// Compute biomarker value
//------------------------------------------------------

function computeValue(item, inputs) {
  try {
    if (item.source === "pinned") {
      if (item.pix_formula === null) return null; // N/A biomarker
      return item.pix_formula(inputs);
    }

    // normal biomarkers
    if (item.type === "direct") return inputs[item.whoop] || null;

    if (item.type === "convert") {
      const val = inputs[item.whoop];
      if (val === undefined || val === null || val === "") return null;
      return item.formula(val);
    }

    return null;
  } catch (err) {
    console.error("Compute error", item.whoop, err);
    return null;
  }
}

//------------------------------------------------------
// Render ONE biomarker block
//------------------------------------------------------

function createBiomarkerElement(item, state, update) {
  const id = normalize(item.whoop).replace(/\s+/g, "-");

  const wrapper = document.createElement("div");
  wrapper.className = "bm-item";
  wrapper.style.margin = "14px 0";
  wrapper.style.padding = "14px";
  wrapper.style.borderRadius = "12px";
  wrapper.style.background = "var(--card-bg)";
  wrapper.style.border = "1px solid var(--divider)";

  //--------------------------------------------------
  // Header row
  //--------------------------------------------------
  const head = document.createElement("div");
  head.style.display = "flex";
  head.style.justifyContent = "space-between";
  head.style.alignItems = "center";
  head.style.cursor = "pointer";

  const title = document.createElement("div");
  title.textContent = item.whoop;
  title.style.fontSize = "15px";
  title.style.fontWeight = "600";

  const toggle = document.createElement("div");
  toggle.textContent = state.open ? "▾" : "▸";
  toggle.style.fontSize = "16px";

  head.appendChild(title);
  head.appendChild(toggle);
  wrapper.appendChild(head);

  //--------------------------------------------------
  // Body (collapsible)
  //--------------------------------------------------
  const body = document.createElement("div");
  body.style.display = state.open ? "block" : "none";
  body.style.marginTop = "12px";
  body.style.paddingTop = "12px";
  body.style.borderTop = "1px solid var(--divider)";

  //----------------------------------------
  // If pinned + input requirement
  //----------------------------------------
  if (item.source === "pinned") {
    // Explanation block
    const label = document.createElement("div");
    label.innerHTML = `
      <div style="font-size:13px; opacity:0.8; margin-bottom:6px;">
        <b>Tên Hoà Hảo:</b> ${item.hh}
      </div>
      <div style="font-size:12px; opacity:0.7; margin-bottom:10px;">
        ${item.explain}
      </div>
    `;
    body.appendChild(label);

    // Input boxes
    const needInputs = item.inputs || [];
    needInputs.forEach(inputName => {
      const row = document.createElement("div");
      row.style.marginBottom = "12px";

      const lab = document.createElement("div");
      lab.style.fontSize = "13px";
      lab.style.marginBottom = "4px";
      lab.textContent = inputName;

      const inp = document.createElement("input");
      inp.type = "number";
      inp.value = state.inputs[inputName] ?? "";
      inp.style.width = "100%";
      inp.style.padding = "10px";
      inp.style.borderRadius = "8px";
      inp.style.border = "1px solid var(--divider)";
      inp.style.background = "var(--input-bg)";
      inp.style.color = "var(--text-color)";
      inp.oninput = () => {
        state.inputs[inputName] = inp.value === "" ? "" : Number(inp.value);
        update();
      };

      row.appendChild(lab);
      row.appendChild(inp);
      body.appendChild(row);
    });

    // result output
    const res = computeValue(item, state.inputs);
    const out = document.createElement("div");
    out.style.marginTop = "10px";
    out.style.fontSize = "14px";
    out.innerHTML = `
      <b>Kết quả WHOOP:</b> ${res === null ? "" : fmt(res)} 
      <span style="opacity:0.7">${item.unit_whoop || ""}</span>
    `;
    body.appendChild(out);
  }

  //----------------------------------------
  // Non-pinned biomarkers
  //----------------------------------------
  if (item.source !== "pinned") {
    const label = document.createElement("div");
    label.innerHTML = `
      <div style="font-size:13px; opacity:0.8; margin-bottom:6px;">
        <b>Tên Hoà Hảo:</b> ${item.hh}
      </div>
    `;
    body.appendChild(label);

    const inp = document.createElement("input");
    inp.type = "number";
    inp.placeholder = `${item.unit_hh}`;
    inp.value = state.inputs[item.whoop] ?? "";
    inp.style.width = "100%";
    inp.style.padding = "10px";
    inp.style.borderRadius = "8px";
    inp.style.border = "1px solid var(--divider)";
    inp.style.background = "var(--input-bg)";
    inp.style.color = "var(--text-color)";
    inp.oninput = () => {
      state.inputs[item.whoop] = inp.value === "" ? "" : Number(inp.value);
      update();
    };

    body.appendChild(inp);

    const val = computeValue(item, state.inputs);
    const out = document.createElement("div");
    out.style.marginTop = "10px";
    out.style.fontSize = "14px";
    out.innerHTML = `
      <b>Kết quả WHOOP:</b> ${val === null ? "" : fmt(val)} 
      <span style="opacity:0.7">${item.unit_whoop}</span>
    `;
    body.appendChild(out);
  }

  //--------------------------------------------------
  // Toggle behavior
  //--------------------------------------------------
  head.onclick = () => {
    state.open = !state.open;
    body.style.display = state.open ? "block" : "none";
    toggle.textContent = state.open ? "▾" : "▸";
  };

  wrapper.appendChild(body);
  return wrapper;
}

//------------------------------------------------------
// Main Init
//------------------------------------------------------

export function initApp(pinned_list, biomarkers_list) {

  //--------------------------------------------------
  // THEMING
  //--------------------------------------------------
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  function setTheme(mode) {
    if (mode === "dark") {
      root.style.setProperty("--bg", "#0f0f0f");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--card-bg", "#1a1a1a");
      root.style.setProperty("--divider", "#333");
      root.style.setProperty("--input-bg", "#222");
    } else {
      root.style.setProperty("--bg", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--card-bg", "#f5f5f5");
      root.style.setProperty("--divider", "#dddddd");
      root.style.setProperty("--input-bg", "#fff");
    }
  }

  let theme = "light";
  themeToggle.onclick = () => {
    theme = theme === "light" ? "dark" : "light";
    setTheme(theme);
  };
  setTheme(theme);

  //--------------------------------------------------
  // MERGE BIOMARKERS
  //--------------------------------------------------

  const full = [
    ...pinned_list.map(x => ({ ...x, source: "pinned" })),
    ...biomarkers_list.map(x => ({ ...x, source: "normal" }))
  ];

  //--------------------------------------------------
  // STATE
  //--------------------------------------------------
  const state = {
    search: "",
    inputs: {},
    items: {} // per-biomarker expand state
  };

  full.forEach(item => {
    state.items[item.whoop] = {
      open: item.source === "pinned", // pinned = collapsed? You can adjust
      inputs: {}
    };
  });

  //--------------------------------------------------
  // DOM References
  //--------------------------------------------------
  const listWrap = document.getElementById("listContainer");
  const searchBox = document.getElementById("searchInput");

  //--------------------------------------------------
  // SEARCH HANDLER
  //--------------------------------------------------
  searchBox.oninput = () => {
    state.search = normalize(searchBox.value);
    render();
  };

  //--------------------------------------------------
  // RENDER LOOP
  //--------------------------------------------------
  function render() {
    listWrap.innerHTML = "";

    const query = state.search;
    const items = full.filter(item => {
      if (!query) return true;
      const hay = normalize(item.whoop + " " + item.hh);
      return query.split(" ").every(k => hay.includes(k));
    });

    items.forEach(item => {
      const el = createBiomarkerElement(
        item,
        state.items[item.whoop],
        render
      );
      listWrap.appendChild(el);
    });
  }

  render();
}
