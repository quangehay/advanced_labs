// biomarkers.js
// ES Module — export the full biomarker list EXCEPT the pinned ones

export const biomarkers_list = [
  {
    whoop: "ALBUMIN",
    hh: "Albumin",
    unit_hh: "g/dL",
    unit_whoop: "g/dL",
    type: "direct"
  },
  {
    whoop: "ALKALINE PHOSPHATASE (ALP)",
    hh: "Alk Phosphatase",
    unit_hh: "U/L",
    unit_whoop: "U/L",
    type: "direct"
  },
  {
    whoop: "APOLIPOPROTEIN B (APOB)",
    hh: "LIPOPROTEIN APO-B",
    unit_hh: "mg/dL",
    unit_whoop: "mg/dL",
    type: "direct"
  },
  {
    whoop: "ASPARTATE AMINOTRANSFERASE (AST)",
    hh: "SGOT (AST)",
    unit_hh: "U/L",
    unit_whoop: "U/L",
    type: "direct"
  },
  {
    whoop: "BASOPHIL %",
    hh: "% Baso",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "BASOPHILS",
    hh: "# Baso",
    unit_hh: "10^9/L",
    unit_whoop: "cells/uL",
    type: "convert",
    formula: (v) => v * 1000,
    note: "1 ×10⁹/L = 1000 cells/µL"
  },
  {
    whoop: "BLOOD UREA NITROGEN",
    hh: "BUN",
    unit_hh: "mg/dL",
    unit_whoop: "mg/dL",
    type: "direct"
  },
  {
    whoop: "CALCIUM",
    hh: "Ca",
    unit_hh: "mmol/L",
    unit_whoop: "mg/dL",
    type: "convert",
    formula: (v) => v * 4.008,
    note: "Multiply by 4.008"
  },
  {
    whoop: "CHLORIDE",
    hh: "Cl",
    unit_hh: "mmol/L",
    unit_whoop: "mmol/L",
    type: "direct"
  },
  {
    whoop: "CORTISOL",
    hh: "Cortisol/Blood/Morning (μg/dL)",
    unit_hh: "μg/dL",
    unit_whoop: "mcg/dL",
    type: "direct"
  },
  {
    whoop: "CREATININE",
    hh: "Creatinin/Serum",
    unit_hh: "mg/dL",
    unit_whoop: "mg/dL",
    type: "direct"
  },
  {
    whoop: "DHEA SULFATE",
    hh: "DHEA.SO4",
    unit_hh: "µg/mL",
    unit_whoop: "mcg/dL",
    type: "convert",
    formula: (v) => v * 100,
    note: "Multiply by 100"
  },
  {
    whoop: "EOSINOPHIL %",
    hh: "% Eos",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "EOSINOPHILS",
    hh: "# Eos",
    unit_hh: "10^9/L",
    unit_whoop: "cells/uL",
    type: "convert",
    formula: (v) => v * 1000
  },
  {
    whoop: "ESTIMATED GLOMERULAR FILTRATION RATE (EGFR)",
    hh: "eGFR (CKD-EPI)",
    unit_hh: "mL/min/1.73 m²",
    unit_whoop: "mL/min/1.73m2",
    type: "direct"
  },
  {
    whoop: "ESTRADIOL",
    hh: "Estradiol (E2)",
    unit_hh: "pg/mL",
    unit_whoop: "pg/mL",
    type: "direct"
  },
  {
    whoop: "FOLLICLE STIMULATING HORMONE (FSH)",
    hh: "FSH",
    unit_hh: "mUI/mL",
    unit_whoop: "mIU/mL",
    type: "direct"
  },
  {
    whoop: "GLOBULIN",
    hh: "Globulin",
    unit_hh: "g/dL",
    unit_whoop: "g/dL",
    type: "direct"
  },
  {
    whoop: "GLUCOSE",
    hh: "Glucose (mg/dL)",
    unit_hh: "mg/dL",
    unit_whoop: "mg/dL",
    type: "direct"
  },
  {
    whoop: "HEMATOCRIT",
    hh: "Hct",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "HEMOGLOBIN",
    hh: "Hb",
    unit_hh: "g/dL",
    unit_whoop: "g/dL",
    type: "direct"
  },
  {
    whoop: "HIGH-SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
    hh: "hs CRP",
    unit_hh: "mg/L",
    unit_whoop: "mg/L",
    type: "direct"
  },
  {
    whoop: "HOMOCYSTEINE",
    hh: "Homocysteine Total",
    unit_hh: "µmol/L",
    unit_whoop: "umol/L",
    type: "direct"
  },
  {
    whoop: "INSULIN",
    hh: "Insulin (Fasting)",
    unit_hh: "µU/mL",
    unit_whoop: "ulU/mL",
    type: "direct"
  },
  {
    whoop: "IRON",
    hh: "Iron (Sắt/HT)2",
    unit_hh: "µg/dL",
    unit_whoop: "mcg/dL",
    type: "direct"
  },
  {
    whoop: "IRON % SATURATION",
    hh: "Transferrin Saturation",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "LIPOPROTEIN (A)",
    hh: "Lipoprotein (a) (nmol/L)",
    unit_hh: "nmol/L",
    unit_whoop: "nmol/L",
    type: "direct"
  },
  {
    whoop: "LUTEINIZING HORMONE (LH)",
    hh: "LH",
    unit_hh: "mUI/mL",
    unit_whoop: "mIU/mL",
    type: "direct"
  },
  {
    whoop: "LYMPHOCYTE %",
    hh: "% Lym",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "LYMPHOCYTES",
    hh: "# Lym",
    unit_hh: "10^9/L",
    unit_whoop: "cells/uL",
    type: "convert",
    formula: (v) => v * 1000
  },
  {
    whoop: "MEAN CORPUSCULAR HEMOGLOBIN (MCH)",
    hh: "MCH",
    unit_hh: "pg",
    unit_whoop: "pg",
    type: "direct"
  },
  {
    whoop: "MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC)",
    hh: "MCHC",
    unit_hh: "g/dL",
    unit_whoop: "g/dL",
    type: "direct"
  },
  {
    whoop: "MEAN CORPUSCULAR VOLUME (MCV)",
    hh: "MCV",
    unit_hh: "fL",
    unit_whoop: "fL",
    type: "direct"
  },
  {
    whoop: "MEAN PLATELET VOLUME (MPV)",
    hh: "MPV",
    unit_hh: "fL",
    unit_whoop: "fL",
    type: "direct"
  },
  {
    whoop: "MONOCYTE %",
    hh: "% Mono",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "MONOCYTES",
    hh: "# Mono",
    unit_hh: "10^9/L",
    unit_whoop: "cells/uL",
    type: "convert",
    formula: (v) => v * 1000
  },
  {
    whoop: "NEUTROPHIL %",
    hh: "% Neu",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "NEUTROPHILS",
    hh: "# Neu",
    unit_hh: "10^9/L",
    unit_whoop: "cells/uL",
    type: "convert",
    formula: (v) => v * 1000
  },
  {
    whoop: "PLATELETS",
    hh: "PLT",
    unit_hh: "10^9/L",
    unit_whoop: "Thousand/uL",
    type: "convert",
    formula: (v) => v
  },
  {
    whoop: "POTASSIUM",
    hh: "K",
    unit_hh: "mmol/L",
    unit_whoop: "mmol/L",
    type: "direct"
  },
  {
    whoop: "RED BLOOD CELL COUNT (RBC)",
    hh: "RBC",
    unit_hh: "10^12/L",
    unit_whoop: "Million/uL",
    type: "convert",
    formula: (v) => v,
    note: "Hoa Hao prints 10^12/L incorrectly as 10^9/L sometimes"
  },
  {
    whoop: "RED CELL DISTRIBUTION WIDTH (RDW)",
    hh: "RDW",
    unit_hh: "%",
    unit_whoop: "%",
    type: "direct"
  },
  {
    whoop: "SEX HORMONE BINDING GLOBULIN (SHBG)",
    hh: "SHBG (Roche)",
    unit_hh: "nmol/L",
    unit_whoop: "nmol/L",
    type: "direct"
  },
  {
    whoop: "SODIUM",
    hh: "Na",
    unit_hh: "mmol/L",
    unit_whoop: "mmol/L",
    type: "direct"
  },
  {
    whoop: "TESTOSTERONE",
    hh: "Testosterone",
    unit_hh: "nmol/L",
    unit_whoop: "ng/dL",
    type: "convert",
    formula: (v) => v * 28.8,
    note: "Multiply by 28.842"
  },
  {
    whoop: "THYROID-STIMULATING HORMONE (TSH)",
    hh: "TSH u.sensitive (3rd G)",
    unit_hh: "µIU/mL",
    unit_whoop: "mIU/L",
    type: "direct"
  },
  {
    whoop: "TOTAL BILIRUBIN",
    hh: "Bilirubin T",
    unit_hh: "mg/dL",
    unit_whoop: "mg/dL",
    type: "direct"
  },
  {
    whoop: "TOTAL PROTEIN",
    hh: "Protid, Total",
    unit_hh: "g/dL",
    unit_whoop: "g/dL",
    type: "direct"
  },
  {
    whoop: "WHITE BLOOD CELLS (WBC)",
    hh: "WBC",
    unit_hh: "10^9/L",
    unit_whoop: "Thousand/uL",
    type: "convert",
    formula: (v) => v
  }
];
