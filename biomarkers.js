// biomarkers.js
// Full dataset for WHOOP <-> Hoà Hảo mapping

export const biomarkers = [

/* ================================
   1 — DIRECT BIOMARKERS (H = same)
   ================================ */

{
    key: "ALT",
    whoop: "ALANINE AMINOTRANSFERASE (ALT)",
    hh: "SGPT (ALT)",
    unit_in: "U/L",
    unit_out: "U/L",
    type: "direct"
},

{
    key: "ALBUMIN",
    whoop: "ALBUMIN",
    hh: "Albumin",
    unit_in: "g/dL",
    unit_out: "g/dL",
    type: "direct"
},

{
    key: "ALP",
    whoop: "ALKALINE PHOSPHATASE (ALP)",
    hh: "Alk Phosphatase",
    unit_in: "U/L",
    unit_out: "U/L",
    type: "direct"
},

{
    key: "APOB",
    whoop: "APOLIPOPROTEIN B (APOB)",
    hh: "LIPOPROTEIN APO-B",
    unit_in: "mg/dL",
    unit_out: "mg/dL",
    type: "direct"
},

{
    key: "AST",
    whoop: "ASPARTATE AMINOTRANSFERASE (AST)",
    hh: "SGOT (AST)",
    unit_in: "U/L",
    unit_out: "U/L",
    type: "direct"
},

{
    key: "BASO_PCT",
    whoop: "BASOPHIL %",
    hh: "% Baso",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "BUN",
    whoop: "BLOOD UREA NITROGEN",
    hh: "BUN",
    unit_in: "mg/dL",
    unit_out: "mg/dL",
    type: "direct"
},

{
    key: "CL",
    whoop: "CHLORIDE",
    hh: "Cl",
    unit_in: "mmol/L",
    unit_out: "mmol/L",
    type: "direct"
},

{
    key: "CORTISOL",
    whoop: "CORTISOL",
    hh: "Cortisol/Blood/Morning (μg/dL)",
    unit_in: "mcg/dL",
    unit_out: "mcg/dL",
    type: "direct"
},

{
    key: "CREAT",
    whoop: "CREATININE",
    hh: "Creatinin/Serum",
    unit_in: "mg/dL",
    unit_out: "mg/dL",
    type: "direct"
},

{
    key: "ESTRADIOL",
    whoop: "ESTRADIOL",
    hh: "Estradiol (E2)",
    unit_in: "pg/mL",
    unit_out: "pg/mL",
    type: "direct"
},

{
    key: "FERRITIN",
    whoop: "FERRITIN",
    hh: "Ferritin",
    unit_in: "ng/mL",
    unit_out: "ng/mL",
    type: "direct"
},

{
    key: "FSH",
    whoop: "FOLLICLE STIMULATING HORMONE (FSH)",
    hh: "FSH",
    unit_in: "mIU/mL",
    unit_out: "mIU/mL",
    type: "direct"
},

{
    key: "GLOBULIN",
    whoop: "GLOBULIN",
    hh: "Globulin",
    unit_in: "g/dL",
    unit_out: "g/dL",
    type: "direct"
},

{
    key: "GLUCOSE_MG",
    whoop: "GLUCOSE",
    hh: "Glucose (mg/dL)",
    unit_in: "mg/dL",
    unit_out: "mg/dL",
    type: "direct"
},

{
    key: "HCT",
    whoop: "HEMATOCRIT",
    hh: "Hct",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "HGB",
    whoop: "HEMOGLOBIN",
    hh: "Hb",
    unit_in: "g/dL",
    unit_out: "g/dL",
    type: "direct"
},

{
    key: "HSCRP",
    whoop: "HIGH-SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
    hh: "hs CRP",
    unit_in: "mg/L",
    unit_out: "mg/L",
    type: "direct"
},

{
    key: "HOMOCYSTEINE",
    whoop: "HOMOCYSTEINE",
    hh: "Homocysteine Total",
    unit_in: "umol/L",
    unit_out: "umol/L",
    type: "direct"
},

{
    key: "INSULIN",
    whoop: "INSULIN",
    hh: "Insulin (Fasting)",
    unit_in: "ulU/mL",
    unit_out: "ulU/mL",
    type: "direct"
},

{
    key: "IRON",
    whoop: "IRON",
    hh: "Iron (Sắt/HT)2",
    unit_in: "mcg/dL",
    unit_out: "mcg/dL",
    type: "direct"
},

{
    key: "IRON_SAT",
    whoop: "IRON % SATURATION",
    hh: "Transferrin Saturation",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "LH",
    whoop: "LUTEINIZING HORMONE (LH)",
    hh: "LH",
    unit_in: "mIU/mL",
    unit_out: "mIU/mL",
    type: "direct"
},

{
    key: "LYMPH_PCT",
    whoop: "LYMPHOCYTE %",
    hh: "% Lym",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "LYMPH_NUM",
    whoop: "LYMPHOCYTES",
    hh: "# Lym",
    unit_in: "10^9/L",
    unit_out: "cells/uL",
    type: "convert",
    convert: (v) => v * 1000
},

{
    key: "MCH",
    whoop: "MEAN CORPUSCULAR HEMOGLOBIN (MCH)",
    hh: "MCH",
    unit_in: "pg",
    unit_out: "pg",
    type: "direct"
},

{
    key: "MCHC",
    whoop: "MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC)",
    hh: "MCHC",
    unit_in: "g/dL",
    unit_out: "g/dL",
    type: "direct"
},

{
    key: "MCV",
    whoop: "MEAN CORPUSCULAR VOLUME (MCV)",
    hh: "MCV",
    unit_in: "fL",
    unit_out: "fL",
    type: "direct"
},

{
    key: "MPV",
    whoop: "MEAN PLATELET VOLUME (MPV)",
    hh: "MPV",
    unit_in: "fL",
    unit_out: "fL",
    type: "direct"
},

{
    key: "MONO_PCT",
    whoop: "MONOCYTE %",
    hh: "% Mono",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "MONO_NUM",
    whoop: "MONOCYTES",
    hh: "# Mono",
    unit_in: "10^9/L",
    unit_out: "cells/uL",
    type: "convert",
    convert: (v) => v * 1000
},

{
    key: "NEUT_PCT",
    whoop: "NEUTROPHIL %",
    hh: "% Neu",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "NEUT_NUM",
    whoop: "NEUTROPHILS",
    hh: "# Neu",
    unit_in: "10^9/L",
    unit_out: "cells/uL",
    type: "convert",
    convert: (v) => v * 1000
},

{
    key: "PLT",
    whoop: "PLATELETS",
    hh: "PLT",
    unit_in: "10^9/L",
    unit_out: "Thousand/uL",
    type: "convert",
    convert: (v) => v // WHOOP expects Thousand/uL, but PLT already equals? (288 → 288)
},

{
    key: "K",
    whoop: "POTASSIUM",
    hh: "K",
    unit_in: "mmol/L",
    unit_out: "mmol/L",
    type: "direct"
},

{
    key: "RBC",
    whoop: "RED BLOOD CELL COUNT (RBC)",
    hh: "RBC",
    unit_in: "10^12/L",
    unit_out: "Million/uL",
    type: "convert",
    convert: (v) => v // use your mapping (5.04 → 5.04)
},

{
    key: "RDW",
    whoop: "RED CELL DISTRIBUTION WIDTH (RDW)",
    hh: "RDW",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "SHBG",
    whoop: "SEX HORMONE BINDING GLOBULIN (SHBG)",
    hh: "SHBG (Roche)",
    unit_in: "nmol/L",
    unit_out: "nmol/L",
    type: "direct"
},

{
    key: "NA",
    whoop: "SODIUM",
    hh: "Na",
    unit_in: "mmol/L",
    unit_out: "mmol/L",
    type: "direct"
},

{
    key: "TSH",
    whoop: "THYROID-STIMULATING HORMONE (TSH)",
    hh: "TSH u.sensitive (3rd G)",
    unit_in: "mIU/L",
    unit_out: "mIU/L",
    type: "direct"
},

{
    key: "BILIRUBIN_T",
    whoop: "TOTAL BILIRUBIN",
    hh: "Bilirubin T",
    unit_in: "mg/dL",
    unit_out: "mg/dL",
    type: "direct"
},

{
    key: "TOTAL_PROTEIN",
    whoop: "TOTAL PROTEIN",
    hh: "Protid, Total",
    unit_in: "g/dL",
    unit_out: "g/dL",
    type: "direct"
},

{
    key: "VITD",
    whoop: "VITAMIN D",
    hh: "Vitamin D Total ( 25-OH Vit D )",
    unit_in: "ng/mL",
    unit_out: "ng/mL",
    type: "direct"
},

/* ================================
   2 — CONVERT BIOMARKERS
   ================================ */

{
    key: "CALCIUM",
    whoop: "CALCIUM",
    hh: "Ca",
    unit_in: "mmol/L",
    unit_out: "mg/dL",
    type: "convert",
    convert: (v) => v * 4.008
},

{
    key: "HDL",
    whoop: "HDL CHOLESTEROL",
    hh: "HDL Cholesterol",
    unit_in: "mmol/L",
    unit_out: "mg/dL",
    type: "convert",
    convert: (v) => v * 38.67
},

{
    key: "LDL",
    whoop: "LDL CHOLESTEROL",
    hh: "LDL Cholesterol",
    unit_in: "mmol/L",
    unit_out: "mg/dL",
    type: "convert",
    convert: (v) => v * 38.67
},

{
    key: "TRIG",
    whoop: "TRIGLYCERIDES",
    hh: "Triglycerides",
    unit_in: "mmol/L",
    unit_out: "mg/dL",
    type: "convert",
    convert: (v) => v * 88.57
},

{
    key: "TOTAL_CHOL",
    whoop: "TOTAL CHOLESTEROL",
    hh: "Cholesterol, Total",
    unit_in: "mmol/L",
    unit_out: "mg/dL",
    type: "convert",
    convert: (v) => v * 38.67
},

{
    key: "TIBC",
    whoop: "TOTAL IRON-BINDING CAPACITY (TIBC)",
    hh: "Transferrin",
    unit_in: "mg/dL",
    unit_out: "mcg/dL",
    type: "convert",
    convert: (v) => v * 1.25
},

{
    key: "TESTOSTERONE",
    whoop: "TESTOSTERONE",
    hh: "Testosterone",
    unit_in: "nmol/L",
    unit_out: "ng/dL",
    type: "convert",
    convert: (v) => v * 28.8
},

/* ================================
   3 — CALCULATED BIOMARKERS
   ================================ */

{
    key: "ALB_GLOB_RATIO",
    whoop: "ALBUMIN/GLOBULIN RATIO",
    hh: "TỶ LỆ 2 CHỈ SỐ",
    unit_in: "",
    unit_out: "",
    type: "calc",
    deps: [
        { key: "ALBUMIN", hh: "Albumin", unit_in: "g/dL" },
        { key: "GLOBULIN", hh: "Globulin", unit_in: "g/dL" }
    ],
    calc: (vals) => vals.ALBUMIN / vals.GLOBULIN
},

{
    key: "BUN_CREAT",
    whoop: "BUN/CREATININE RATIO",
    hh: "TỶ LỆ 2 CHỈ SỐ",
    unit_in: "",
    unit_out: "",
    type: "calc",
    deps: [
        { key: "BUN", hh: "BUN", unit_in: "mg/dL" },
        { key: "CREAT", hh: "Creatinin/Serum", unit_in: "mg/dL" }
    ],
    calc: (v) => v.BUN / v.CREAT
},

{
    key: "CHOL_HDL",
    whoop: "CHOLESTEROL / HDL RATIO",
    hh: "TỶ LỆ 2 CHỈ SỐ",
    type: "calc",
    unit_out: "",
    deps: [
        { key: "TOTAL_CHOL", hh: "Cholesterol, Total", unit_in: "mg/dL" },
        { key: "HDL", hh: "HDL Cholesterol", unit_in: "mg/dL" }
    ],
    calc: (v) => v.TOTAL_CHOL / v.HDL
},

{
    key: "NON_HDL",
    whoop: "NON-HDL CHOLESTEROL",
    hh: "KHÔNG CÓ",
    unit_out: "mg/dL",
    type: "calc",
    deps: [
        { key: "TOTAL_CHOL", hh: "Cholesterol, Total", unit_in: "mg/dL" },
        { key: "HDL", hh: "HDL Cholesterol", unit_in: "mg/dL" }
    ],
    calc: (v) => v.TOTAL_CHOL - v.HDL
},

{
    key: "HBA1C",
    whoop: "HEMOGLOBIN A1C (HBA1C)",
    hh: "HbA1c (NGSP)",
    unit_in: "%",
    unit_out: "%",
    type: "direct"
},

{
    key: "EGFR",
    whoop: "ESTIMATED GLOMERULAR FILTRATION RATE (EGFR)",
    hh: "eGFR (CKD-EPI)",
    unit_in: "mL/min/1.73m2",
    unit_out: "mL/min/1.73m2",
    type: "direct"
},

{
    key: "FREE_TESTOSTERONE",
    whoop: "FREE TESTOSTERONE",
    hh: "KHÔNG CÓ",
    unit_in: "",
    unit_out: "pg/mL",
    type: "calc",
    info: "Công thức tính Free Testosterone như Excel LET()",
    deps: [
        { key: "ALBUMIN", hh: "Albumin", unit_in: "g/dL" },
        { key: "SHBG", hh: "SHBG (Roche)", unit_in: "nmol/L" },
        { key: "TESTOSTERONE", hh: "Testosterone", unit_in: "nmol/L" }
    ],
    calc: (v) => {
        const AlbGD = v.ALBUMIN;
        const ShbgN = v.SHBG;
        const TotalTN = v.TESTOSTERONE;
        const KaA = 36000;
        const KsS = 1000000000;
        const MW = 288.42;

        const AlbGL = AlbGD * 10;
        const AlbMol = AlbGL / 69000;
        const ShbgMol = ShbgN * 0.000000001;
        const TTmol = TotalTN * 0.000000001;

        const aa = KsS * (AlbMol * KaA + 1);
        const bb = AlbMol * KaA + KsS * ShbgMol - KsS * TTmol + 1;
        const cc = -TTmol;

        const FTmol = (-bb + Math.sqrt(bb ** 2 - 4 * aa * cc)) / (2 * aa);
        return FTmol * MW * 1000000000;
    }
}

];
