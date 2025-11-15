// pinned.js
// Pinned WHOOP biomarkers (13) – in your specified order.
// ES Module, with both list and map exports.

// Each object:
// id: internal stable key
// whoop_name: label to show on the toggle/card (MUST match WHOOP app)
// hoa_hao: { name, unit } – null if Hoà Hảo has no direct test
// whoop_unit: unit WHOOP expects
// type: "direct" | "conversion" | "multi" | "computed"
// inputs: named inputs for the UI (strict Hoà Hảo names + units)
// formula: string description of how to compute WHOOP value from inputs
// explanation_en / explanation_vi: bilingual explanation
// tags: for search (WHOOP name, Hoa Hảo name, synonyms, etc.)

export const pinned_list = [
  // 1. ALANINE AMINOTRANSFERASE (ALT)
  {
    id: "ALT",
    whoop_name: "ALANINE AMINOTRANSFERASE (ALT)",
    hoa_hao: {
      name: "SGPT (ALT)",
      unit: "U/L"
    },
    whoop_unit: "U/L",
    type: "direct",
    inputs: {
      alt: { label: "SGPT (ALT)", unit: "U/L" }
    },
    formula: "=alt",
    explanation_en:
      "Hoà Hảo reports SGPT (ALT) in U/L and WHOOP also uses U/L, so the value can be copied directly.",
    explanation_vi:
      "Hoà Hảo trả kết quả SGPT (ALT) theo đơn vị U/L và WHOOP cũng dùng U/L, nên bạn chỉ cần nhập y nguyên giá trị.",
    tags: ["alt", "sgpt", "alanine aminotransferase", "liver", "sgpt (alt)"]
  },

  // 2. ALBUMIN/GLOBULIN RATIO
  {
    id: "ALB_GLOB_RATIO",
    whoop_name: "ALBUMIN/GLOBULIN RATIO",
    hoa_hao: {
      name: null,
      unit: null
    },
    whoop_unit: "",
    type: "multi",
    inputs: {
      albumin: { label: "Albumin", unit: "g/dL" },
      globulin: { label: "Globulin", unit: "g/dL" }
    },
    formula: "=albumin / globulin",
    explanation_en:
      "Hoà Hảo does not report Albumin/Globulin Ratio directly. WHOOP expects Albumin divided by Globulin (both in g/dL).",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm ALBUMIN/GLOBULIN RATIO. WHOOP cần bạn lấy Albumin chia cho Globulin (cùng đơn vị g/dL).",
    tags: ["albumin", "globulin", "ratio", "alb/glob", "tỷ lệ 2 chỉ số"]
  },

  // 3. BUN/CREATININE RATIO
  {
    id: "BUN_CREAT_RATIO",
    whoop_name: "BUN/CREATININE RATIO",
    hoa_hao: {
      name: null,
      unit: null
    },
    whoop_unit: "",
    type: "multi",
    inputs: {
      bun_mgdl: { label: "BUN", unit: "mg/dL" },
      creatinine_mgdl: { label: "Creatinin/Serum", unit: "mg/dL" }
    },
    formula: "=bun_mgdl / creatinine_mgdl",
    explanation_en:
      "Hoà Hảo does not report BUN/Creatinine Ratio directly. WHOOP expects the ratio BUN (mg/dL) divided by Creatinine/Serum (mg/dL).",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm BUN/CREATININE RATIO. WHOOP cần bạn lấy BUN (mg/dL) chia cho Creatinin/Serum (mg/dL).",
    tags: ["bun", "creatinine", "ratio", "bun/creat", "tỷ lệ 2 chỉ số"]
  },

  // 4. CHOLESTEROL / HDL RATIO
  {
    id: "CHOL_HDL_RATIO",
    whoop_name: "CHOLESTEROL / HDL RATIO",
    hoa_hao: {
      name: null,
      unit: null
    },
    whoop_unit: "",
    type: "multi",
    inputs: {
      total_chol_mmol: { label: "Cholesterol, Total", unit: "mmol/L" },
      hdl_mmol: { label: "HDL Cholesterol", unit: "mmol/L" }
    },
    // Ratio is unitless; using mmol/L or mg/dL gives the same numeric result
    formula: "=total_chol_mmol / hdl_mmol",
    explanation_en:
      "Hoà Hảo does not report CHOLESTEROL / HDL RATIO directly. WHOOP expects Total Cholesterol divided by HDL. The ratio is unitless, so using mmol/L for both gives the correct value.",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm CHOLESTEROL / HDL RATIO. WHOOP cần bạn lấy Cholesterol, Total chia cho HDL Cholesterol. Vì là tỷ lệ nên dùng mmol/L cho cả hai vẫn ra đúng giá trị.",
    tags: [
      "cholesterol",
      "hdl",
      "ratio",
      "chol/hdl",
      "cholesterol, total",
      "hdl cholesterol"
    ]
  },

  // 5. FERRITIN
  {
    id: "FERRITIN",
    whoop_name: "FERRITIN",
    hoa_hao: {
      name: "Ferritin",
      unit: "ng/mL"
    },
    whoop_unit: "ng/mL",
    type: "direct",
    inputs: {
      ferritin: { label: "Ferritin", unit: "ng/mL" }
    },
    formula: "=ferritin",
    explanation_en:
      "Hoà Hảo already reports Ferritin in ng/mL and WHOOP uses the same unit, so you can copy the value directly.",
    explanation_vi:
      "Hoà Hảo trả kết quả Ferritin theo đơn vị ng/mL và WHOOP cũng dùng ng/mL, nên bạn chỉ cần nhập y nguyên giá trị.",
    tags: ["ferritin", "iron", "storage iron", "ng/mL"]
  },

  // 6. FREE TESTOSTERONE
  {
    id: "FREE_T",
    whoop_name: "FREE TESTOSTERONE",
    hoa_hao: {
      name: null,
      unit: null
    },
    whoop_unit: "pg/mL",
    type: "computed",
    inputs: {
      albumin: { label: "Albumin", unit: "g/dL" },
      shbg: { label: "SHBG (Roche)", unit: "nmol/L" },
      total_t: { label: "Testosterone", unit: "nmol/L" }
    },
    // Clean description-style formula; your JS will implement the actual math.
    formula:
      "Use the Vermeulen equation. Steps:\n" +
      "1) AlbMol = albumin * 10 / 69000\n" +
      "2) ShbgMol = shbg * 1e-9\n" +
      "3) TTmol = total_t * 1e-9\n" +
      "4) KaA = 36000, KsS = 1e9, MW = 288.42\n" +
      "5) a = KsS * (AlbMol * KaA + 1)\n" +
      "6) b = AlbMol*KaA + KsS*ShbgMol - KsS*TTmol + 1\n" +
      "7) c = -TTmol\n" +
      "8) FTmol = (-b + SQRT(b^2 - 4*a*c)) / (2*a)\n" +
      "9) Free T (pg/mL) = FTmol * MW * 1e9",
    explanation_en:
      "Hoà Hảo does not report Free Testosterone directly. WHOOP uses the Vermeulen equation with Albumin (g/dL), SHBG (nmol/L), and Total Testosterone (nmol/L) to compute Free Testosterone in pg/mL.",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm Free Testosterone. WHOOP dùng công thức Vermeulen với Albumin (g/dL), SHBG (nmol/L) và Testosterone toàn phần (nmol/L) để tính Free Testosterone đơn vị pg/mL.",
    tags: [
      "free testosterone",
      "testosterone",
      "vermeulen",
      "shbg",
      "albumin",
      "hormone"
    ]
  },

  // 7. HEMOGLOBIN A1C (HBA1C)
  {
    id: "HBA1C",
    whoop_name: "HEMOGLOBIN A1C (HBA1C)",
    hoa_hao: {
      // Main direct mapping is HbA1c (NGSP) in %A1c
      name: "HbA1c (NGSP)",
      unit: "%A1c"
    },
    whoop_unit: "%A1c",
    type: "multi", // can come from NGSP directly or from IFCC via conversion
    inputs: {
      a1c_ngsp: { label: "HbA1c (NGSP)", unit: "%A1c" },
      a1c_ifcc: { label: "HbA1c (IFCC)", unit: "mmol/mol" }
    },
    formula:
      "If HbA1c (NGSP) is available, use: =a1c_ngsp.\n" +
      "If only HbA1c (IFCC) is available, convert to NGSP with:\n" +
      "NGSP = (a1c_ifcc * 0.09148) + 2.152",
    explanation_en:
      "WHOOP expects Hemoglobin A1c in NGSP (%A1c). If Hoà Hảo gives HbA1c (NGSP), copy that value. If only IFCC (mmol/mol) is reported, convert using: NGSP = IFCC * 0.09148 + 2.152.",
    explanation_vi:
      "WHOOP cần HbA1c theo chuẩn NGSP (%A1c). Nếu Hoà Hảo có HbA1c (NGSP) thì nhập thẳng. Nếu chỉ có HbA1c (IFCC, mmol/mol) thì đổi sang NGSP bằng công thức: NGSP = IFCC × 0.09148 + 2.152.",
    tags: [
      "hba1c",
      "hemoglobin a1c",
      "ngsp",
      "ifcc",
      "glycated hemoglobin",
      "đường huyết"
    ]
  },

  // 8. LDL CHOLESTEROL
  {
    id: "LDL",
    whoop_name: "LDL CHOLESTEROL",
    hoa_hao: {
      name: "LDL Cholesterol",
      unit: "mmol/L"
    },
    whoop_unit: "mg/dL",
    type: "conversion",
    inputs: {
      ldl_mmol: { label: "LDL Cholesterol", unit: "mmol/L" }
    },
    formula: "=ldl_mmol * 38.67",
    explanation_en:
      "Hoà Hảo reports LDL Cholesterol in mmol/L, but WHOOP expects mg/dL. Multiply the Hoà Hảo value by 38.67.",
    explanation_vi:
      "Hoà Hảo trả LDL Cholesterol theo mmol/L, còn WHOOP dùng mg/dL. Đổi đơn vị bằng cách lấy giá trị Hoà Hảo nhân 38.67.",
    tags: ["ldl", "ldl cholesterol", "cholesterol", "lipid", "mmol/l", "mg/dl"]
  },

  // 9. NON-HDL CHOLESTEROL
  {
    id: "NON_HDL",
    whoop_name: "NON-HDL CHOLESTEROL",
    hoa_hao: {
      name: null,
      unit: null
    },
    whoop_unit: "mg/dL",
    type: "multi",
    inputs: {
      total_chol_mmol: { label: "Cholesterol, Total", unit: "mmol/L" },
      hdl_mmol: { label: "HDL Cholesterol", unit: "mmol/L" }
    },
    formula:
      "First compute (Total Cholesterol − HDL) in mmol/L, then convert to mg/dL:\n" +
      "non_hdl_mgdl = (total_chol_mmol - hdl_mmol) * 38.67",
    explanation_en:
      "Hoà Hảo does not report Non-HDL Cholesterol directly. WHOOP expects (Total Cholesterol − HDL) in mg/dL. Subtract HDL from Total Cholesterol (both in mmol/L), then multiply the difference by 38.67.",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm NON-HDL CHOLESTEROL. WHOOP cần (Cholesterol, Total − HDL) tính theo mg/dL. Bạn lấy Cholesterol, Total trừ HDL (cùng đơn vị mmol/L), rồi nhân kết quả với 38.67.",
    tags: [
      "non-hdl",
      "non hdl",
      "cholesterol",
      "total cholesterol",
      "hdl cholesterol",
      "atherogenic"
    ]
  },

  // 10. TOTAL CHOLESTEROL
  {
    id: "TOTAL_CHOL",
    whoop_name: "TOTAL CHOLESTEROL",
    hoa_hao: {
      name: "Cholesterol, Total",
      unit: "mmol/L"
    },
    whoop_unit: "mg/dL",
    type: "conversion",
    inputs: {
      total_chol_mmol: { label: "Cholesterol, Total", unit: "mmol/L" }
    },
    formula: "=total_chol_mmol * 38.67",
    explanation_en:
      "Hoà Hảo reports Total Cholesterol in mmol/L. WHOOP expects mg/dL. Multiply the Hoà Hảo value by 38.67.",
    explanation_vi:
      "Hoà Hảo trả Cholesterol, Total theo mmol/L, còn WHOOP dùng mg/dL. Đổi đơn vị bằng cách lấy giá trị Hoà Hảo nhân 38.67.",
    tags: [
      "total cholesterol",
      "cholesterol, total",
      "lipid",
      "mmol/l",
      "mg/dl",
      "cholesterol"
    ]
  },

  // 11. TOTAL IRON-BINDING CAPACITY (TIBC)
  {
    id: "TIBC",
    whoop_name: "TOTAL IRON-BINDING CAPACITY (TIBC)",
    hoa_hao: {
      name: "Transferrin",
      unit: "mg/dL"
    },
    whoop_unit: "mcg/dL",
    type: "conversion",
    inputs: {
      transferrin_mgdl: { label: "Transferrin", unit: "mg/dL" }
    },
    formula: "=transferrin_mgdl * 1.25",
    explanation_en:
      "Hoà Hảo does not report TIBC directly, but reports Transferrin in mg/dL. TIBC can be estimated as Transferrin × 1.25, with units µg/dL (same as mcg/dL).",
    explanation_vi:
      "Hoà Hảo không có xét nghiệm TIBC, nhưng có Transferrin (mg/dL). TIBC được ước tính bằng Transferrin × 1.25, đơn vị µg/dL (giống mcg/dL, chỉ khác cách viết).",
    tags: ["tibc", "transferrin", "iron", "total iron-binding capacity", "mcg/dl"]
  },

  // 12. TRIGLYCERIDES
  {
    id: "TRIGLYCERIDES",
    whoop_name: "TRIGLYCERIDES",
    hoa_hao: {
      name: "Triglycerides",
      unit: "mmol/L"
    },
    whoop_unit: "mg/dL",
    type: "conversion",
    inputs: {
      trig_mmol: { label: "Triglycerides", unit: "mmol/L" }
    },
    formula: "=trig_mmol * 88.57",
    explanation_en:
      "Hoà Hảo reports Triglycerides in mmol/L, but WHOOP expects mg/dL. Multiply the Hoà Hảo value by 88.57.",
    explanation_vi:
      "Hoà Hảo trả Triglycerides theo mmol/L, còn WHOOP dùng mg/dL. Đổi đơn vị bằng cách lấy giá trị Hoà Hảo nhân 88.57.",
    tags: ["triglycerides", "trig", "lipid", "mmol/l", "mg/dl"]
  },

  // 13. VITAMIN D
  {
    id: "VITD",
    whoop_name: "VITAMIN D",
    hoa_hao: {
      name: "Vitamin D Total ( 25-OH Vit D )",
      unit: "ng/mL"
    },
    whoop_unit: "ng/mL",
    type: "direct",
    inputs: {
      vitd: { label: "Vitamin D Total ( 25-OH Vit D )", unit: "ng/mL" }
    },
    formula: "=vitd",
    explanation_en:
      "Hoà Hảo reports Vitamin D Total (25-OH) directly in ng/mL, which matches WHOOP’s unit. You can copy the value as-is.",
    explanation_vi:
      "Hoà Hảo có xét nghiệm Vitamin D Total (25-OH) với đơn vị ng/mL, trùng với đơn vị WHOOP nên bạn chỉ cần nhập y nguyên giá trị.",
    tags: [
      "vitamin d",
      "25-oh vit d",
      "vitamin d total",
      "d3",
      "ng/ml",
      "vitamin d total ( 25-oh vit d )"
    ]
  }
];

// Build map for O(1) lookup by id
export const pinned_map = pinned_list.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
