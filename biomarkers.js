// biomarkers.js
// ES module export
// Each biomarker has:
// whoop: WHOOP name
// type: "direct" | "convert" | "calc" | "missing"
// hh: Hoà Hảo test name
// unit_in: unit from Hoà Hảo
// unit_out: WHOOP unit
// formula: JS function OR null
// deps: names of required HH inputs (for calc)
// explain: description shown in UI

export const biomarkers = [

    /* ────────────────────────────────
     * 1. DIRECT VALUES (one HH item, same number)
     * ──────────────────────────────── */
    {
        whoop: "ALANINE AMINOTRANSFERASE (ALT)",
        type: "direct",
        hh: "SGPT (ALT)",
        unit_in: "U/L",
        unit_out: "U/L",
        explain: "Hoà Hảo và WHOOP dùng cùng đơn vị. Nhập đúng giá trị vào WHOOP."
    },
    {
        whoop: "ALBUMIN",
        type: "direct",
        hh: "Albumin",
        unit_in: "g/dL",
        unit_out: "g/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "ALKALINE PHOSPHATASE (ALP)",
        type: "direct",
        hh: "Alk Phosphatase",
        unit_in: "U/L",
        unit_out: "U/L",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "APOLIPOPROTEIN B (APOB)",
        type: "direct",
        hh: "LIPOPROTEIN APO-B",
        unit_in: "mg/dL",
        unit_out: "mg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "ASPARTATE AMINOTRANSFERASE (AST)",
        type: "direct",
        hh: "SGOT (AST)",
        unit_in: "U/L",
        unit_out: "U/L",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "BASOPHIL %",
        type: "direct",
        hh: "% Baso",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "BLOOD UREA NITROGEN",
        type: "direct",
        hh: "BUN",
        unit_in: "mg/dL",
        unit_out: "mg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "CHLORIDE",
        type: "direct",
        hh: "Cl",
        unit_in: "mmol/L",
        unit_out: "mmol/L",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "CORTISOL",
        type: "direct",
        hh: "Cortisol/Blood/Morning (μg/dL)",
        unit_in: "μg/dL",
        unit_out: "μg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "CREATININE",
        type: "direct",
        hh: "Creatinin/Serum",
        unit_in: "mg/dL",
        unit_out: "mg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "ESTIMATED GLOMERULAR FILTRATION RATE (EGFR)",
        type: "direct",
        hh: "eGFR (CKD-EPI)",
        unit_in: "mL/min/1.73 m²",
        unit_out: "mL/min/1.73 m²",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "ESTRADIOL",
        type: "direct",
        hh: "Estradiol (E2)",
        unit_in: "pg/mL",
        unit_out: "pg/mL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "FERRITIN",
        type: "direct",
        hh: "Ferritin",
        unit_in: "ng/mL",
        unit_out: "ng/mL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "FOLLICLE STIMULATING HORMONE (FSH)",
        type: "direct",
        hh: "FSH",
        unit_in: "mIU/mL",
        unit_out: "mIU/mL",
        explain: "Cùng đơn vị, Hoà Hảo chỉ viết sai format."
    },
    {
        whoop: "GLOBULIN",
        type: "direct",
        hh: "Globulin",
        unit_in: "g/dL",
        unit_out: "g/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "GLUCOSE",
        type: "direct",
        hh: "Glucose (mg/dL)",
        unit_in: "mg/dL",
        unit_out: "mg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "HDL CHOLESTEROL",
        type: "convert",
        hh: "HDL Cholesterol",
        unit_in: "mmol/L",
        unit_out: "mg/dL",
        formula: (x) => x * 38.67,
        explain: "mmol/L × 38.67 → mg/dL"
    },
    {
        whoop: "HEMATOCRIT",
        type: "direct",
        hh: "Hct",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "HEMOGLOBIN",
        type: "direct",
        hh: "Hb",
        unit_in: "g/dL",
        unit_out: "g/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "HEMOGLOBIN A1C (HBA1C)",
        type: "direct",
        hh: "HbA1c (NGSP)",
        unit_in: "%",
        unit_out: "%",
        explain: "Nhập đúng giá trị Ngsp vào WHOOP."
    },
    {
        whoop: "HIGH-SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
        type: "direct",
        hh: "hs CRP",
        unit_in: "mg/L",
        unit_out: "mg/L",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "HOMOCYSTEINE",
        type: "direct",
        hh: "Homocysteine Total",
        unit_in: "µmol/L",
        unit_out: "µmol/L",
        explain: "Cùng đơn vị."
    },
    {
        whoop: "INSULIN",
        type: "direct",
        hh: "Insulin (Fasting)",
        unit_in: "µU/mL",
        unit_out: "µU/mL",
        explain: "Cùng đơn vị."
    },
    {
        whoop: "IRON",
        type: "direct",
        hh: "Iron (Sắt/HT)2",
        unit_in: "µg/dL",
        unit_out: "µg/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "IRON % SATURATION",
        type: "direct",
        hh: "Transferrin Saturation",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "LIPOPROTEIN (A)",
        type: "direct",
        hh: "Lipoprotein (a) (nmol/L)",
        unit_in: "nmol/L",
        unit_out: "nmol/L",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "LUTEINIZING HORMONE (LH)",
        type: "direct",
        hh: "LH",
        unit_in: "mIU/mL",
        unit_out: "mIU/mL",
        explain: "Giống nhau."
    },
    {
        whoop: "LYMPHOCYTE %",
        type: "direct",
        hh: "% Lym",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "MEAN CORPUSCULAR HEMOGLOBIN (MCH)",
        type: "direct",
        hh: "MCH",
        unit_in: "pg",
        unit_out: "pg",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC)",
        type: "direct",
        hh: "MCHC",
        unit_in: "g/dL",
        unit_out: "g/dL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "MEAN CORPUSCULAR VOLUME (MCV)",
        type: "direct",
        hh: "MCV",
        unit_in: "fL",
        unit_out: "fL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "MEAN PLATELET VOLUME (MPV)",
        type: "direct",
        hh: "MPV",
        unit_in: "fL",
        unit_out: "fL",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "MONOCYTE %",
        type: "direct",
        hh: "% Mono",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "NEUTROPHIL %",
        type: "direct",
        hh: "% Neu",
        unit_in: "%",
        unit_out: "%",
        explain: "Giá trị giống nhau."
    },
    {
        whoop: "POTASSIUM",
        type: "direct",
        hh: "K",
        unit_in: "mmol/L",
        unit_out: "mmol/L",
        explain: "Giống nhau."
    },
    {
        whoop: "SODIUM",
        type: "direct",
        hh: "Na",
        unit_in: "mmol/L",
        unit_out: "mmol/L",
        explain: "Giống nhau."
    },

    /* ────────────────────────────────
     * 2. CONVERT (simple formula)
     * ──────────────────────────────── */

    {
        whoop: "CALCIUM",
        type: "convert",
        hh: "Ca",
        unit_in: "mmol/L",
        unit_out: "mg/dL",
        formula: (x) => x * 4.008,
        explain: "mmol/L × 4.008 → mg/dL"
    },
    {
        whoop: "LDL CHOLESTEROL",
        type: "convert",
        hh: "LDL Cholesterol",
        unit_in: "mmol/L",
        unit_out: "mg/dL",
        formula: (x) => x * 38.67,
        explain: "mmol/L × 38.67 → mg/dL"
    },
    {
        whoop: "TOTAL CHOLESTEROL",
        type: "convert",
        hh: "Cholesterol, Total",
        unit_in: "mmol/L",
        unit_out: "mg/dL",
        formula: (x) => x * 38.67,
        explain: "mmol/L × 38.67 → mg/dL"
    },
    {
        whoop: "TRIGLYCERIDES",
        type: "convert",
        hh: "Triglycerides",
        unit_in: "mmol/L",
        unit_out: "mg/dL",
        formula: (x) => x * 88.57,
        explain: "mmol/L × 88.57 → mg/dL"
    },
    {
        whoop: "TESTOSTERONE",
        type: "convert",
        hh: "Testosterone",
        unit_in: "nmol/L",
        unit_out: "ng/dL",
        formula: (x) => x * 28.84,
        explain: "nmol/L × 28.84 → ng/dL"
    },
    {
        whoop: "PLATELETS",
        type: "convert",
        hh: "PLT",
        unit_in: "10^9/L",
        unit_out: "Thousand/uL",
        formula: (x) => x,
        explain: "Hoà Hảo ghi sai, nhưng giá trị giống nhau."
    },
    {
        whoop: "LYMPHOCYTES",
        type: "convert",
        hh: "# Lym",
        unit_in: "10^9/L",
        unit_out: "cells/uL",
        formula: (x) => x * 1000,
        explain: "1 ×10⁹/L = 1000 cells/µL"
    },
    {
        whoop: "MONOCYTES",
        type: "convert",
        hh: "# Mono",
        unit_in: "10^9/L",
        unit_out: "cells/uL",
        formula: (x) => x * 1000,
        explain: "1 ×10⁹/L = 1000 cells/µL"
    },
    {
        whoop: "NEUTROPHILS",
        type: "convert",
        hh: "# Neu",
        unit_in: "10^9/L",
        unit_out: "cells/uL",
        formula: (x) => x * 1000,
        explain: "1 ×10⁹/L = 1000 cells/µL"
    },
    {
        whoop: "EOSINOPHILS",
        type: "convert",
        hh: "# Eos",
        unit_in: "10^9/L",
        unit_out: "cells/uL",
        formula: (x) => x * 1000,
        explain: "1 ×10⁹/L = 1000 cells/µL"
    },
    {
        whoop: "BASOPHILS",
        type: "convert",
        hh: "# Baso",
        unit_in: "10^9/L",
        unit_out: "cells/uL",
        formula: (x) => x * 1000,
        explain: "1 ×10⁹/L = 1000 cells/µL"
    },

    /* ────────────────────────────────
     * 3. CALC (requires multiple HH inputs)
     * ──────────────────────────────── */

    {
        whoop: "ALBUMIN/GLOBULIN RATIO",
        type: "calc",
        deps: [
            { hh: "Albumin", key: "albumin", unit: "g/dL" },
            { hh: "Globulin", key: "globulin", unit: "g/dL" }
        ],
        unit_out: "",
        formula: (vals) => vals.albumin / vals.globulin,
        explain: "Tỷ lệ Albumin / Globulin."
    },
    {
        whoop: "BUN/CREATININE RATIO",
        type: "calc",
        deps: [
            { hh: "BUN", key: "bun", unit: "mg/dL" },
            { hh: "Creatinin/Serum", key: "cre", unit: "mg/dL" }
        ],
        unit_out: "",
        formula: (vals) => vals.bun / vals.cre,
        explain: "BUN chia cho Creatinine."
    },
    {
        whoop: "CHOLESTEROL / HDL RATIO",
        type: "calc",
        deps: [
            { hh: "Cholesterol, Total", key: "tc", unit: "mmol/L" },
            { hh: "HDL Cholesterol", key: "hdl", unit: "mmol/L" }
        ],
        unit_out: "",
        formula: (vals) => vals.tc / vals.hdl,
        explain: "Cholesterol Total / HDL."
    },
    {
        whoop: "NON-HDL CHOLESTEROL",
        type: "calc",
        deps: [
            { hh: "Cholesterol, Total", key: "tc", unit: "mmol/L" },
            { hh: "HDL Cholesterol", key: "hdl", unit: "mmol/L" }
        ],
        unit_out: "mg/dL",
        formula: (vals) => (vals.tc - vals.hdl) * 38.67,
        explain: "Total - HDL, rồi ×38.67."
    },
    {
        whoop: "TOTAL IRON-BINDING CAPACITY (TIBC)",
        type: "convert",
        hh: "Transferrin",
        unit_in: "mg/dL",
        unit_out: "mcg/dL",
        formula: (x) => x * 1.25,
        explain: "Hoà Hảo không có TIBC. TIBC = Transferrin × 1.25."
    },
    {
        whoop: "HOMA-IR SCORE",
        type: "calc",
        deps: [
            { hh: "Insulin (Fasting)", key: "ins", unit: "µU/mL" },
            { hh: "Glucose (mg/dL)", key: "glu", unit: "mg/dL" }
        ],
        unit_out: "",
        formula: (vals) => (vals.ins * vals.glu) / 405,
        explain: "Glucose (mg/dL) × Insulin / 405."
    },
    {
        whoop: "FREE TESTOSTERONE",
        type: "calc",
        deps: [
            { hh: "Albumin", key: "alb", unit: "g/dL" },
            { hh: "SHBG (Roche)", key: "shbg", unit: "nmol/L" },
            { hh: "Testosterone", key: "tt", unit: "nmol/L" }
        ],
        unit_out: "pg/mL",
        formula: (v) => {
            const AlbGD = v.alb;
            const ShbgN = v.shbg;
            const TotalTN = v.tt;

            const KaA = 36000;
            const KsS = 1e9;
            const MW = 288.42;
            const AlbGL = AlbGD * 10;
            const AlbMol = AlbGL / 69000;
            const ShbgMol = ShbgN * 1e-9;
            const TTmol = TotalTN * 1e-9;
            const aa = KsS * (AlbMol * KaA + 1);
            const bb = AlbMol * KaA + KsS * ShbgMol - KsS * TTmol + 1;
            const cc = -TTmol;
            const FTmol = (-bb + Math.sqrt(bb * bb - 4 * aa * cc)) / (2 * aa);
            return FTmol * MW * 1e9;
        },
        explain: "Công thức chuẩn Free T (Vermeulen)."
    },
    {
        whoop: "VITAMIN D",
        type: "direct",
        hh: "Vitamin D Total ( 25-OH Vit D )",
        unit_in: "ng/mL",
        unit_out: "ng/mL",
        explain: "Giá trị giống nhau."
    },

    /* ────────────────────────────────
     * NOT AVAILABLE IN HOA HAO
     * (show explanation instead)
     * ──────────────────────────────── */

    {
        whoop: "CARBON DIOXIDE",
        type: "missing",
        explain: "Không có trong kết quả Hoà Hảo."
    }

];
