// biomarkers.js
// Full WHOOP biomarker dataset using:
// - WHOOP name (whoop)
// - Internal key (key)
// - ONE Hoa Hao input (Option 2)
// - Unified calculation architecture
// - Correct NON-HDL mg/dL logic
// - No thousand separators for VN/US formats

export const BIOMARKERS = [

/* ============================================================================
   DIRECT MATCH (HH unit = WHOOP unit)
============================================================================ */
{
  whoop: "ALANINE AMINOTRANSFERASE (ALT)",
  key: "alt",
  type: "direct",
  hhName: "SGPT (ALT)",
  hhUnit: "U/L",
  whoopUnit: "U/L",
  convert: v => v
},

{
  whoop: "ALBUMIN",
  key: "albumin",
  type: "direct",
  hhName: "Albumin",
  hhUnit: "g/dL",
  whoopUnit: "g/dL",
  convert: v => v
},

{
  whoop: "ALKALINE PHOSPHATASE (ALP)",
  key: "alp",
  type: "direct",
  hhName: "Alk Phosphatase",
  hhUnit: "U/L",
  whoopUnit: "U/L",
  convert: v => v
},

{
  whoop: "APOLIPOPROTEIN B (APOB)",
  key: "apob",
  type: "direct",
  hhName: "LIPOPROTEIN APO-B",
  hhUnit: "mg/dL",
  whoopUnit: "mg/dL",
  convert: v => v
},

{
  whoop: "ASPARTATE AMINOTRANSFERASE (AST)",
  key: "ast",
  type: "direct",
  hhName: "SGOT (AST)",
  hhUnit: "U/L",
  whoopUnit: "U/L",
  convert: v => v
},

{
  whoop: "BASOPHIL %",
  key: "baso_pct",
  type: "direct",
  hhName: "% Baso",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "BLOOD UREA NITROGEN",
  key: "bun",
  type: "direct",
  hhName: "BUN",
  hhUnit: "mg/dL",
  whoopUnit: "mg/dL",
  convert: v => v
},

{
  whoop: "CHLORIDE",
  key: "chloride",
  type: "direct",
  hhName: "Cl",
  hhUnit: "mmol/L",
  whoopUnit: "mmol/L",
  convert: v => v
},

{
  whoop: "CORTISOL",
  key: "cortisol",
  type: "direct",
  hhName: "Cortisol/Blood/Morning (μg/dL)",
  hhUnit: "μg/dL",
  whoopUnit: "mcg/dL",
  convert: v => v
},

{
  whoop: "CREATININE",
  key: "creatinine",
  type: "direct",
  hhName: "Creatinin/Serum",
  hhUnit: "mg/dL",
  whoopUnit: "mg/dL",
  convert: v => v
},

{
  whoop: "EOSINOPHIL %",
  key: "eos_pct",
  type: "direct",
  hhName: "% Eos",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "ESTIMATED GLOMERULAR FILTRATION RATE (EGFR)",
  key: "egfr",
  type: "direct",
  hhName: "eGFR (CKD-EPI)",
  hhUnit: "mL/min/1.73 m²",
  whoopUnit: "mL/min/1.73m2",
  convert: v => v
},

{
  whoop: "ESTRADIOL",
  key: "estradiol",
  type: "direct",
  hhName: "Estradiol (E2)",
  hhUnit: "pg/mL",
  whoopUnit: "pg/mL",
  convert: v => v
},

{
  whoop: "FERRITIN",
  key: "ferritin",
  type: "direct",
  hhName: "Ferritin",
  hhUnit: "ng/mL",
  whoopUnit: "ng/mL",
  convert: v => v
},

{
  whoop: "FOLLICLE STIMULATING HORMONE (FSH)",
  key: "fsh",
  type: "direct",
  hhName: "FSH",
  hhUnit: "mUI/mL",
  whoopUnit: "mIU/mL",
  convert: v => v
},

{
  whoop: "GLOBULIN",
  key: "globulin",
  type: "direct",
  hhName: "Globulin",
  hhUnit: "g/dL",
  whoopUnit: "g/dL",
  convert: v => v
},

{
  whoop: "GLUCOSE",
  key: "glucose_mgdl",
  type: "direct",
  hhName: "Glucose (mg/dL)",
  hhUnit: "mg/dL",
  whoopUnit: "mg/dL",
  convert: v => v
},

{
  whoop: "HEMATOCRIT",
  key: "hct",
  type: "direct",
  hhName: "Hct",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "HEMOGLOBIN",
  key: "hgb",
  type: "direct",
  hhName: "Hb",
  hhUnit: "g/dL",
  whoopUnit: "g/dL",
  convert: v => v
},

{
  whoop: "HEMOGLOBIN A1C (HBA1C)",
  key: "hba1c",
  type: "direct",
  hhName: "HbA1c (NGSP)",
  hhUnit: "%A1c",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "HIGH-SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
  key: "hscrp",
  type: "direct",
  hhName: "hs CRP",
  hhUnit: "mg/L",
  whoopUnit: "mg/L",
  convert: v => v
},

{
  whoop: "HOMOCYSTEINE",
  key: "homocysteine",
  type: "direct",
  hhName: "Homocysteine Total",
  hhUnit: "µmol/L",
  whoopUnit: "µmol/L",
  convert: v => v
},

{
  whoop: "INSULIN",
  key: "insulin",
  type: "direct",
  hhName: "Insulin (Fasting)",
  hhUnit: "µU/mL",
  whoopUnit: "µU/mL",
  convert: v => v
},

{
  whoop: "IRON",
  key: "iron_mcgdl",
  type: "direct",
  hhName: "Iron (Sắt/HT)2",
  hhUnit: "µg/dL",
  whoopUnit: "mcg/dL",
  convert: v => v
},

{
  whoop: "IRON % SATURATION",
  key: "iron_sat",
  type: "direct",
  hhName: "Transferrin Saturation",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "LIPOPROTEIN (A)",
  key: "lpa",
  type: "direct",
  hhName: "Lipoprotein (a) (nmol/L)",
  hhUnit: "nmol/L",
  whoopUnit: "nmol/L",
  convert: v => v
},

{
  whoop: "LUTEINIZING HORMONE (LH)",
  key: "lh",
  type: "direct",
  hhName: "LH",
  hhUnit: "mUI/mL",
  whoopUnit: "mIU/mL",
  convert: v => v
},

{
  whoop: "LYMPHOCYTE %",
  key: "lym_pct",
  type: "direct",
  hhName: "% Lym",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "MEAN CORPUSCULAR HEMOGLOBIN (MCH)",
  key: "mch",
  type: "direct",
  hhName: "MCH",
  hhUnit: "pg",
  whoopUnit: "pg",
  convert: v => v
},

{
  whoop: "MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC)",
  key: "mchc",
  type: "direct",
  hhName: "MCHC",
  hhUnit: "g/dL",
  whoopUnit: "g/dL",
  convert: v => v
},

{
  whoop: "MEAN CORPUSCULAR VOLUME (MCV)",
  key: "mcv",
  type: "direct",
  hhName: "MCV",
  hhUnit: "fL",
  whoopUnit: "fL",
  convert: v => v
},

{
  whoop: "MEAN PLATELET VOLUME (MPV)",
  key: "mpv",
  type: "direct",
  hhName: "MPV",
  hhUnit: "fL",
  whoopUnit: "fL",
  convert: v => v
},

{
  whoop: "MONOCYTE %",
  key: "mono_pct",
  type: "direct",
  hhName: "% Mono",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "POTASSIUM",
  key: "potassium",
  type: "direct",
  hhName: "K",
  hhUnit: "mmol/L",
  whoopUnit: "mmol/L",
  convert: v => v
},

{
  whoop: "RED BLOOD CELL COUNT (RBC)",
  key: "rbc",
  type: "direct",
  hhName: "RBC",
  hhUnit: "10^12/L",
  whoopUnit: "Million/uL",
  convert: v => v
},

{
  whoop: "RED CELL DISTRIBUTION WIDTH (RDW)",
  key: "rdw",
  type: "direct",
  hhName: "RDW",
  hhUnit: "%",
  whoopUnit: "%",
  convert: v => v
},

{
  whoop: "SEX HORMONE BINDING GLOBULIN (SHBG)",
  key: "shbg",
  type: "direct",
  hhName: "SHBG (Roche)",
  hhUnit: "nmol/L",
  whoopUnit: "nmol/L",
  convert: v => v
},

{
  whoop: "SODIUM",
  key: "sodium",
  type: "direct",
  hhName: "Na",
  hhUnit: "mmol/L",
  whoopUnit: "mmol/L",
  convert: v => v
},

{
  whoop: "TOTAL BILIRUBIN",
  key: "bilirubin",
  type: "direct",
  hhName: "Bilirubin T",
  hhUnit: "mg/dL",
  whoopUnit: "mg/dL",
  convert: v => v
},

{
  whoop: "TOTAL PROTEIN",
  key: "total_protein",
  type: "direct",
  hhName: "Protid, Total",
  hhUnit: "g/dL",
  whoopUnit: "g/dL",
  convert: v => v
},

{
  whoop: "VITAMIN D",
  key: "vitamin_d",
  type: "direct",
  hhName: "Vitamin D Total ( 25-OH Vit D )",
  hhUnit: "ng/mL",
  whoopUnit: "ng/mL",
  convert: v => v
},

{
  whoop: "WHITE BLOOD CELLS (WBC)",
  key: "wbc",
  type: "direct",
  hhName: "WBC",
  hhUnit: "10^9/L",
  whoopUnit: "Thousand/uL",
  convert: v => v
},

/* ============================================================================
   CONVERSIONS
============================================================================ */

{
  whoop: "BASOPHILS",
  key: "basophils",
  type: "convert",
  hhName: "# Baso",
  hhUnit: "10^9/L",
  whoopUnit: "cells/uL",
  convert: v => v * 1000
},

{
  whoop: "CALCIUM",
  key: "calcium_mgdl",
  type: "convert",
  hhName: "Ca",
  hhUnit: "mmol/L",
  whoopUnit: "mg/dL",
  convert: v => v * 4.008
},

{
  whoop: "DHEA SULFATE",
  key: "dhea",
  type: "convert",
  hhName: "DHEA.SO4",
  hhUnit: "µg/mL",
  whoopUnit: "mcg/dL",
  convert: v => v * 100
},

{
  whoop: "EOSINOPHILS",
  key: "eosinophils",
  type: "convert",
  hhName: "# Eos",
  hhUnit: "10^9/L",
  whoopUnit: "cells/uL",
  convert: v => v * 1000
},

{
  whoop: "HDL CHOLESTEROL",
  key: "hdl_mgdl",
  type: "convert",
  hhName: "HDL Cholesterol",
  hhUnit: "mmol/L",
  whoopUnit: "mg/dL",
  convert: v => v * 38.67
},

{
  whoop: "LDL CHOLESTEROL",
  key: "ldl_mgdl",
  type: "convert",
  hhName: "LDL Cholesterol",
  hhUnit: "mmol/L",
  whoopUnit: "mg/dL",
  convert: v => v * 38.67
},

{
  whoop: "LYMPHOCYTES",
  key: "lymphocytes",
  type: "convert",
  hhName: "# Lym",
  hhUnit: "10^9/L",
  whoopUnit: "cells/uL",
  convert: v => v * 1000
},

{
  whoop: "MONOCYTES",
  key: "monocytes",
  type: "convert",
  hhName: "# Mono",
  hhUnit: "10^9/L",
  whoopUnit: "cells/uL",
  convert: v => v * 1000
},

{
  whoop: "NEUTROPHILS",
  key: "neutrophils",
  type: "convert",
  hhName: "# Neu",
  hhUnit: "10^9/L",
  whoopUnit: "cells/uL",
  convert: v => v * 1000
},

{
  whoop: "PLATELETS",
  key: "platelets",
  type: "convert",
  hhName: "PLT",
  hhUnit: "10^9/L",
  whoopUnit: "Thousand/uL",
  convert: v => v // visually equivalent, WHOOP accepts this
},

{
  whoop: "TESTOSTERONE",
  key: "testosterone_ngdl",
  type: "convert",
  hhName: "Testosterone",
  hhUnit: "nmol/L",
  whoopUnit: "ng/dL",
  convert: v => v * 28.842
},

{
  whoop: "TOTAL CHOLESTEROL",
  key: "total_chol_mgdl",
  type: "convert",
  hhName: "Cholesterol, Total",
  hhUnit: "mmol/L",
  whoopUnit: "mg/dL",
  convert: v => v * 38.67
},

{
  whoop: "TOTAL IRON-BINDING CAPACITY (TIBC)",
  key: "tibc",
  type: "convert",
  hhName: "Transferrin",
  hhUnit: "mg/dL",
  whoopUnit: "mcg/dL",
  convert: v => v * 1.25
},

{
  whoop: "TRIGLYCERIDES",
  key: "triglycerides_mgdl",
  type: "convert",
  hhName: "Triglycerides",
  hhUnit: "mmol/L",
  whoopUnit: "mg/dL",
  convert: v => v * 88.57
},

/* ============================================================================
   CALCULATED BIOMARKERS
============================================================================ */

{
  whoop: "ALBUMIN/GLOBULIN RATIO",
  key: "a_g_ratio",
  type: "calculated",
  whoopUnit: "",
  inputs: {
    albumin:  { hhName: "Albumin", unit: "g/dL" },
    globulin: { hhName: "Globulin", unit: "g/dL" }
  },
  inputRequirements: ["albumin","globulin"],
  convert: ({ albumin, globulin }) =>
      (albumin && globulin ? albumin / globulin : null)
},

{
  whoop: "BUN/CREATININE RATIO",
  key: "bun_creatinine_ratio",
  type: "calculated",
  whoopUnit: "",
  inputs: {
    bun:        { hhName: "BUN", unit: "mg/dL" },
    creatinine: { hhName: "Creatinin/Serum", unit: "mg/dL" }
  },
  inputRequirements: ["bun","creatinine"],
  convert: ({ bun, creatinine }) =>
      (bun && creatinine ? bun / creatinine : null)
},

{
  whoop: "CHOLESTEROL / HDL RATIO",
  key: "chol_hdl_ratio",
  type: "calculated",
  whoopUnit: "",
  inputs: {
    total_chol_mgdl: { hhName: "Cholesterol, Total", unit: "mmol/L" },
    hdl_mgdl:        { hhName: "HDL Cholesterol", unit: "mmol/L" }
  },
  inputRequirements: ["total_chol_mgdl","hdl_mgdl"],
  convert: ({ total_chol_mgdl, hdl_mgdl }) =>
      (total_chol_mgdl && hdl_mgdl ? total_chol_mgdl / hdl_mgdl : null)
},

{
  whoop: "FREE TESTOSTERONE",
  key: "free_testosterone",
  type: "calculated",
  whoopUnit: "pg/mL",
  inputs: {
    albumin:           { hhName: "Albumin", unit: "g/dL" },
    shbg:              { hhName: "SHBG (Roche)", unit: "nmol/L" },
    testosterone_nmol: { hhName: "Testosterone", unit: "nmol/L" }
  },
  inputRequirements: ["albumin","shbg","testosterone_nmol"],
  convert: ({ albumin, shbg, testosterone_nmol }) => {
      if (!albumin || !shbg || !testosterone_nmol) return null;
      const AlbGD = albumin;
      const ShbgN = shbg;
      const TotalTN = testosterone_nmol;
      const KaA = 36000;
      const KsS = 1000000000;
      const MW = 288.42;
      const AlbGL = AlbGD * 10;
      const AlbMol = AlbGL / 69000;
      const ShbgMol = ShbgN * 1e-9;
      const TTmol = TotalTN * 1e-9;
      const aa = KsS * (AlbMol * KaA + 1);
      const bb = AlbMol * KaA + KsS * ShbgMol - KsS * TTmol + 1;
      const cc = -TTmol;
      const FTmol = (-bb + Math.sqrt(bb ** 2 - 4 * aa * cc)) / (2 * aa);
      return FTmol * MW * 1e9;
  }
},

{
  whoop: "HOMA-IR SCORE",
  key: "homa_ir",
  type: "calculated",
  whoopUnit: "",
  inputs: {
    glucose_mgdl: { hhName: "Glucose (mg/dL)", unit: "mg/dL" },
    insulin:      { hhName: "Insulin (Fasting)", unit: "µU/mL" }
  },
  inputRequirements: ["glucose_mgdl","insulin"],
  convert: ({ glucose_mgdl, insulin }) =>
      (glucose_mgdl && insulin ? (glucose_mgdl * insulin) / 405 : null)
},

{
  whoop: "NON-HDL CHOLESTEROL",
  key: "non_hdl",
  type: "calculated",
  whoopUnit: "mg/dL",
  inputs: {
    total_chol_mgdl: { hhName: "Cholesterol, Total", unit: "mmol/L" },
    hdl_mgdl:        { hhName: "HDL Cholesterol", unit: "mmol/L" }
  },
  inputRequirements: ["total_chol_mgdl","hdl_mgdl"],
  convert: ({ total_chol_mgdl, hdl_mgdl }) => {
    if (total_chol_mgdl == null || hdl_mgdl == null) return null;
    const diff = total_chol_mgdl - hdl_mgdl;     // mmol/L
    return diff * 38.67;                         // convert to mg/dL
  }
},

/* ============================================================================
   MISSING
============================================================================ */

{
  whoop: "CARBON DIOXIDE",
  key: "co2",
  type: "missing",
  hhName: "",
  hhUnit: "",
  whoopUnit: "",
  convert: () => null
}

];
