export const biomarkers = [

  // 1 — ALT
  {
    whoopName: "ALANINE AMINOTRANSFERASE (ALT)",
    hoaHaoName: "SGPT (ALT)",
    hoaHaoUnit: "U/L",
    whoopUnit: "U/L",
    type: "direct",
    formulaJS: null,
    explanation: "Hoà Hảo và WHOOP cùng đơn vị. Nhập đúng số từ Hoà Hảo vào WHOOP."
  },

  // 2 — Albumin
  {
    whoopName: "ALBUMIN",
    hoaHaoName: "Albumin",
    hoaHaoUnit: "g/dL",
    whoopUnit: "g/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị. Nhập y chang."
  },

  // 3 — Albumin / Globulin Ratio (Composite)
  {
    whoopName: "ALBUMIN/GLOBULIN RATIO",
    type: "composite",
    formulaInputs: ["Albumin", "Globulin"],
    hoaHaoName: null,
    hoaHaoUnit: null,
    whoopUnit: null,
    formulaJS: (alb, glo) => alb / glo,
    explanation: "Hoà Hảo không có chỉ số này. WHOOP tự tạo bằng công thức: Albumin / Globulin."
  },

  // 4 — ALP
  {
    whoopName: "ALKALINE PHOSPHATASE (ALP)",
    hoaHaoName: "Alk Phosphatase",
    hoaHaoUnit: "U/L",
    whoopUnit: "U/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị. Nhập thẳng."
  },

  // 5 — ApoB
  {
    whoopName: "APOLIPOPROTEIN B (APOB)",
    hoaHaoName: "LIPOPROTEIN APO-B",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 6 — AST
  {
    whoopName: "ASPARTATE AMINOTRANSFERASE (AST)",
    hoaHaoName: "SGOT (AST)",
    hoaHaoUnit: "U/L",
    whoopUnit: "U/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 7 — BUN/Creatinine (Composite)
  {
    whoopName: "BUN/CREATININE RATIO",
    type: "composite",
    formulaInputs: ["BUN", "Creatinin/Serum"],
    hoaHaoName: null,
    hoaHaoUnit: null,
    whoopUnit: null,
    formulaJS: (bun, cre) => bun / cre,
    explanation: "Hoà Hảo không có chỉ số này. WHOOP tạo bằng công thức: BUN / Creatinine."
  },

  // 8 — Basophil %
  {
    whoopName: "BASOPHIL %",
    hoaHaoName: "% Baso",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 9 — Basophils (#)
  {
    whoopName: "BASOPHILS",
    hoaHaoName: "# Baso",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "cells/uL",
    type: "conversion",
    formulaJS: (v) => v * 1000,
    explanation: "Hoà Hảo dùng 10⁹/L, WHOOP dùng cells/uL. 1 ×10⁹/L = 1000 cells/uL."
  },

  // 10 — BUN
  {
    whoopName: "BLOOD UREA NITROGEN",
    hoaHaoName: "BUN",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 11 — Calcium (convert mmol/L → mg/dL)
  {
    whoopName: "CALCIUM",
    hoaHaoName: "Ca",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mg/dL",
    type: "conversion",
    formulaJS: (v) => v * 4.008,
    explanation: "Hoà Hảo mmol/L, WHOOP mg/dL. Nhân 4.008."
  },

  // 12 — Chloride
  {
    whoopName: "CHLORIDE",
    hoaHaoName: "Cl",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 13 — Cholesterol / HDL (Composite)
  {
    whoopName: "CHOLESTEROL / HDL RATIO",
    type: "composite",
    formulaInputs: ["Cholesterol, Total", "HDL Cholesterol"],
    formulaJS: (total, hdl) => total / hdl,
    explanation: "Hoà Hảo không có chỉ số này. WHOOP tạo bằng công thức Total Cholesterol / HDL."
  },

  // 14 — Cortisol (Blood Morning)
  {
    whoopName: "CORTISOL",
    hoaHaoName: "Cortisol/Blood/Morning (μg/dL)",
    hoaHaoUnit: "μg/dL",
    whoopUnit: "μg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 15 — Creatinine
  {
    whoopName: "CREATININE",
    hoaHaoName: "Creatinin/Serum",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  }

];
// --- continuing the array ---
export const biomarkers = [

  // … PART 1 items (1–15) above …

  // 16 — DHEA-Sulfate (unit conversion)
  {
    whoopName: "DHEA SULFATE",
    hoaHaoName: "DHEA.SO4",
    hoaHaoUnit: "µg/mL",
    whoopUnit: "mcg/dL",
    type: "conversion",
    formulaJS: (v) => v * 100,        // µg/mL → mcg/dL
    explanation: "Hoà Hảo dùng µg/mL. WHOOP dùng mcg/dL. Nhân 100."
  },

  // 17 — Eosinophil %
  {
    whoopName: "EOSINOPHIL %",
    hoaHaoName: "% Eos",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 18 — Eosinophils (#)
  {
    whoopName: "EOSINOPHILS",
    hoaHaoName: "# Eos",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "cells/uL",
    type: "conversion",
    formulaJS: (v) => v * 1000,
    explanation: "1 ×10⁹/L = 1000 cells/uL."
  },

  // 19 — eGFR
  {
    whoopName: "ESTIMATED GLOMERULAR FILTRATION RATE (EGFR)",
    hoaHaoName: "eGFR (CKD-EPI)",
    hoaHaoUnit: "mL/min/1.73 m²",
    whoopUnit: "mL/min/1.73 m²",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 20 — Estradiol
  {
    whoopName: "ESTRADIOL",
    hoaHaoName: "Estradiol (E2)",
    hoaHaoUnit: "pg/mL",
    whoopUnit: "pg/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 21 — Ferritin
  {
    whoopName: "FERRITIN",
    hoaHaoName: "Ferritin",
    hoaHaoUnit: "ng/mL",
    whoopUnit: "ng/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 22 — FSH
  {
    whoopName: "FOLLICLE STIMULATING HORMONE (FSH)",
    hoaHaoName: "FSH",
    hoaHaoUnit: "mUI/mL",
    whoopUnit: "mIU/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Cùng đơn vị, chỉ khác cách viết."
  },

  // 23 — Free Testosterone (complex)
  {
    whoopName: "FREE TESTOSTERONE",
    type: "composite",
    formulaInputs: ["Albumin", "SHBG (Roche)", "Testosterone"],
    whoopUnit: "pg/mL",
    formulaJS: (AlbGD, ShbgN, TotalTN) => {
      const KaA = 36000;
      const KsS = 1_000_000_000;
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
    explanation: "Hoà Hảo không có Free Testosterone. Tính bằng công thức chuẩn Vermeulen."
  },

  // 24 — Globulin
  {
    whoopName: "GLOBULIN",
    hoaHaoName: "Globulin",
    hoaHaoUnit: "g/dL",
    whoopUnit: "g/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 25 — Glucose (mg/dL)
  {
    whoopName: "GLUCOSE",
    hoaHaoName: "Glucose (mg/dL)",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 26 — HOMA-IR (Composite)
  {
    whoopName: "HOMA-IR SCORE",
    type: "composite",
    formulaInputs: ["Insulin (Fasting)", "Glucose (mg/dL)"],
    formulaJS: (insulin, glucose) => (insulin * glucose) / 405,
    explanation: "Hoà Hảo không có. Dùng công thức: (Glucose mg/dL * Insulin) / 405."
  },

  // 27 — HDL-C (convert mmol/L → mg/dL)
  {
    whoopName: "HDL CHOLESTEROL",
    hoaHaoName: "HDL Cholesterol",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mg/dL",
    type: "conversion",
    formulaJS: (v) => v * 38.67,
    explanation: "Nhân 38.67 để đổi mmol/L → mg/dL."
  },

  // 28 — Hematocrit
  {
    whoopName: "HEMATOCRIT",
    hoaHaoName: "Hct",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 29 — Hemoglobin
  {
    whoopName: "HEMOGLOBIN",
    hoaHaoName: "Hb",
    hoaHaoUnit: "g/dL",
    whoopUnit: "g/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 30 — HbA1c NGSP version
  {
    whoopName: "HEMOGLOBIN A1C (HBA1C)",
    hoaHaoName: "HbA1c (NGSP)",
    hoaHaoUnit: "%A1c",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Dùng giá trị NGSP (%.). Không dùng IFCC mmol/mol."
  }

];
// continuing biomarkers array…

export const biomarkers = [

  // … part 1 + part 2 items above …

  // 31 — hsCRP
  {
    whoopName: "HIGH-SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
    hoaHaoName: "hs CRP",
    hoaHaoUnit: "mg/L",
    whoopUnit: "mg/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 32 — Homocysteine
  {
    whoopName: "HOMOCYSTEINE",
    hoaHaoName: "Homocysteine Total",
    hoaHaoUnit: "µmol/L",
    whoopUnit: "µmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 33 — Insulin
  {
    whoopName: "INSULIN",
    hoaHaoName: "Insulin (Fasting)",
    hoaHaoUnit: "µU/mL",
    whoopUnit: "µU/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị (chỉ khác viết ulU/mL vs µU/mL)."
  },

  // 34 — Iron
  {
    whoopName: "IRON",
    hoaHaoName: "Iron (Sắt/HT)2",
    hoaHaoUnit: "µg/dL",
    whoopUnit: "mcg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Cùng đơn vị (µg/dL = mcg/dL)."
  },

  // 35 — Iron % Saturation
  {
    whoopName: "IRON % SATURATION",
    hoaHaoName: "Transferrin Saturation",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 36 — LDL-C (mmol/L → mg/dL)
  {
    whoopName: "LDL CHOLESTEROL",
    hoaHaoName: "LDL Cholesterol",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mg/dL",
    type: "conversion",
    formulaJS: (v) => v * 38.67,
    explanation: "Đổi mmol/L → mg/dL bằng cách nhân 38.67."
  },

  // 37 — Lipoprotein(a) nmol/L
  {
    whoopName: "LIPOPROTEIN (A)",
    hoaHaoName: "Lipoprotein (a) (nmol/L)",
    hoaHaoUnit: "nmol/L",
    whoopUnit: "nmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 38 — LH
  {
    whoopName: "LUTEINIZING HORMONE (LH)",
    hoaHaoName: "LH",
    hoaHaoUnit: "mUI/mL",
    whoopUnit: "mIU/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Cùng đơn vị (mIU/mL)."
  },

  // 39 — Lymphocyte %
  {
    whoopName: "LYMPHOCYTE %",
    hoaHaoName: "% Lym",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 40 — Lymphocytes (#)
  {
    whoopName: "LYMPHOCYTES",
    hoaHaoName: "# Lym",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "cells/uL",
    type: "conversion",
    formulaJS: (v) => v * 1000,
    explanation: "1 ×10⁹/L = 1000 cells/uL."
  },

  // 41 — MCH
  {
    whoopName: "MEAN CORPUSCULAR HEMOGLOBIN (MCH)",
    hoaHaoName: "MCH",
    hoaHaoUnit: "pg",
    whoopUnit: "pg",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 42 — MCHC
  {
    whoopName: "MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC)",
    hoaHaoName: "MCHC",
    hoaHaoUnit: "g/dL",
    whoopUnit: "g/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 43 — MCV
  {
    whoopName: "MEAN CORPUSCULAR VOLUME (MCV)",
    hoaHaoName: "MCV",
    hoaHaoUnit: "fL",
    whoopUnit: "fL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 44 — MPV
  {
    whoopName: "MEAN PLATELET VOLUME (MPV)",
    hoaHaoName: "MPV",
    hoaHaoUnit: "fL",
    whoopUnit: "fL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 45 — Monocyte %
  {
    whoopName: "MONOCYTE %",
    hoaHaoName: "% Mono",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  }

];
// continuing biomarkers array…

export const biomarkers = [

  // … part 1 + part 2 + part 3 items above …

  // 46 — Monocytes (#)
  {
    whoopName: "MONOCYTES",
    hoaHaoName: "# Mono",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "cells/uL",
    type: "conversion",
    formulaJS: (v) => v * 1000,
    explanation: "1 ×10⁹/L = 1000 cells/uL."
  },

  // 47 — Neutrophil %
  {
    whoopName: "NEUTROPHIL %",
    hoaHaoName: "% Neu",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 48 — Neutrophils (#)
  {
    whoopName: "NEUTROPHILS",
    hoaHaoName: "# Neu",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "cells/uL",
    type: "conversion",
    formulaJS: (v) => v * 1000,
    explanation: "1 ×10⁹/L = 1000 cells/uL."
  },

  // 49 — Non-HDL Cholesterol (Total – HDL)
  {
    whoopName: "NON-HDL CHOLESTEROL",
    hoaHaoName: null,
    hoaHaoUnit: null,
    whoopUnit: "mg/dL",
    type: "composite",
    formulaInputs: ["TOTAL CHOLESTEROL", "HDL CHOLESTEROL"],
    formulaJS: (total, hdl) => total - hdl,
    explanation: "WHOOP không hiển thị trực tiếp. Công thức: Total Cholesterol (mg/dL) – HDL (mg/dL)."
  },

  // 50 — Platelets
  {
    whoopName: "PLATELETS",
    hoaHaoName: "PLT",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "Thousand/uL",
    type: "conversion",
    formulaJS: (v) => v, // same ratio, different display
    explanation: "10^9/L và Thousand/uL bản chất bằng nhau. WHOOP chỉ đổi cách viết."
  },

  // 51 — Potassium
  {
    whoopName: "POTASSIUM",
    hoaHaoName: "K",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 52 — RBC
  {
    whoopName: "RED BLOOD CELL COUNT (RBC)",
    hoaHaoName: "RBC",
    hoaHaoUnit: "10^12/L",
    whoopUnit: "Million/uL",
    type: "conversion",
    formulaJS: (v) => v, 
    explanation: "10^12/L tương đương Million/uL (cùng giá trị)."
  },

  // 53 — RDW
  {
    whoopName: "RED CELL DISTRIBUTION WIDTH (RDW)",
    hoaHaoName: "RDW",
    hoaHaoUnit: "%",
    whoopUnit: "%",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 54 — SHBG
  {
    whoopName: "SEX HORMONE BINDING GLOBULIN (SHBG)",
    hoaHaoName: "SHBG (Roche)",
    hoaHaoUnit: "nmol/L",
    whoopUnit: "nmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 55 — Sodium
  {
    whoopName: "SODIUM",
    hoaHaoName: "Na",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mmol/L",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 56 — Testosterone (nmol/L → ng/dL)
  {
    whoopName: "TESTOSTERONE",
    hoaHaoName: "Testosterone",
    hoaHaoUnit: "nmol/L",
    whoopUnit: "ng/dL",
    type: "conversion",
    formulaJS: (v) => v * 28.842,
    explanation: "Đổi nmol/L → ng/dL nhân 28.842."
  },

  // 57 — TSH
  {
    whoopName: "THYROID-STIMULATING HORMONE (TSH)",
    hoaHaoName: "TSH u.sensitive (3rd G)",
    hoaHaoUnit: "µIU/mL",
    whoopUnit: "mIU/L",
    type: "direct",
    formulaJS: null,
    explanation: "mgIU/L và µIU/mL tương đương, chỉ khác cách viết (đổi 1:1)."
  },

  // 58 — Total Bilirubin
  {
    whoopName: "TOTAL BILIRUBIN",
    hoaHaoName: "Bilirubin T",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mg/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  }

];
// continuing biomarkers array…

export const biomarkers = [

  // … part 1 + part 2 + part 3 + part 4 items above …

  // 59 — Total Cholesterol (mmol/L → mg/dL)
  {
    whoopName: "TOTAL CHOLESTEROL",
    hoaHaoName: "Cholesterol, Total",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mg/dL",
    type: "conversion",
    formulaJS: (v) => v * 38.67,
    explanation: "mmol/L → mg/dL nhân 38.67."
  },

  // 60 — Total Iron Binding Capacity (TIBC)
  {
    whoopName: "TOTAL IRON-BINDING CAPACITY (TIBC)",
    hoaHaoName: "Transferrin",
    hoaHaoUnit: "mg/dL",
    whoopUnit: "mcg/dL",
    type: "conversion",
    formulaJS: (v) => v * 1.25,
    explanation: "Hoà Hảo không có TIBC. Tính bằng: TIBC = Transferrin × 1.25."
  },

  // 61 — Total Protein
  {
    whoopName: "TOTAL PROTEIN",
    hoaHaoName: "Protid, Total",
    hoaHaoUnit: "g/dL",
    whoopUnit: "g/dL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 62 — Triglycerides (mmol/L → mg/dL)
  {
    whoopName: "TRIGLYCERIDES",
    hoaHaoName: "Triglycerides",
    hoaHaoUnit: "mmol/L",
    whoopUnit: "mg/dL",
    type: "conversion",
    formulaJS: (v) => v * 88.57,
    explanation: "mmol/L → mg/dL nhân 88.57."
  },

  // 63 — Vitamin D
  {
    whoopName: "VITAMIN D",
    hoaHaoName: "Vitamin D Total ( 25-OH Vit D )",
    hoaHaoUnit: "ng/mL",
    whoopUnit: "ng/mL",
    type: "direct",
    formulaJS: null,
    explanation: "Giống đơn vị."
  },

  // 64 — White Blood Cells (WBC)
  {
    whoopName: "WHITE BLOOD CELLS (WBC)",
    hoaHaoName: "WBC",
    hoaHaoUnit: "10^9/L",
    whoopUnit: "Thousand/uL",
    type: "conversion",
    formulaJS: (v) => v, 
    explanation: "10^9/L tương đương Thousand/uL."
  },

  // 65 — Carbon Dioxide (Not measured by Hoà Hảo)
  {
    whoopName: "CARBON DIOXIDE",
    hoaHaoName: null,
    hoaHaoUnit: null,
    whoopUnit: null,
    type: "missing",
    formulaJS: null,
    explanation: "Hoà Hảo không có chỉ số CO₂."
  }

];

// end of file
