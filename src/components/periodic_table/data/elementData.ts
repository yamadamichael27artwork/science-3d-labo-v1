export const periodicTableData = [
  // Period 1
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, category: "nonmetal" },
  ...Array(16).fill({
    symbol: "",
    name: "",
    atomicNumber: 0,
    category: "placeholder",
  }),
  { symbol: "He", name: "Helium", atomicNumber: 2, category: "noble-gas" },

  // Period 2
  { symbol: "Li", name: "Lithium", atomicNumber: 3, category: "alkali-metal" },
  {
    symbol: "Be",
    name: "Beryllium",
    atomicNumber: 4,
    category: "alkaline-earth",
  },
  ...Array(10).fill({
    symbol: "Bom",
    name: "",
    atomicNumber: 0,
    category: "placeholder",
  }),
  { symbol: "B", name: "Boron", atomicNumber: 5, category: "metalloid" },
  { symbol: "C", name: "Carbon", atomicNumber: 6, category: "nonmetal" },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, category: "nonmetal" },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, category: "nonmetal" },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, category: "halogen" },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, category: "noble-gas" },

  // Period 3
  { symbol: "Na", name: "Sodium", atomicNumber: 11, category: "alkali-metal" },
  {
    symbol: "Mg",
    name: "Magnesium",
    atomicNumber: 12,
    category: "alkaline-earth",
  },
  ...Array(10).fill({
    symbol: "",
    name: "",
    atomicNumber: 0,
    category: "placeholder",
  }),
  {
    symbol: "Al",
    name: "Aluminum",
    atomicNumber: 13,
    category: "post-transition-metal",
  },
  { symbol: "Si", name: "Silicon", atomicNumber: 14, category: "metalloid" },
  { symbol: "P", name: "Phosphorus", atomicNumber: 15, category: "nonmetal" },
  { symbol: "S", name: "Sulfur", atomicNumber: 16, category: "nonmetal" },
  { symbol: "Cl", name: "Chlorine", atomicNumber: 17, category: "halogen" },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, category: "noble-gas" },

  // Period 4
  {
    symbol: "K",
    name: "Potassium",
    atomicNumber: 19,
    category: "alkali-metal",
  },
  {
    symbol: "Ca",
    name: "Calcium",
    atomicNumber: 20,
    category: "alkaline-earth",
  },
  {
    symbol: "Sc",
    name: "Scandium",
    atomicNumber: 21,
    category: "transition-metal",
  },
  {
    symbol: "Ti",
    name: "Titanium",
    atomicNumber: 22,
    category: "transition-metal",
  },
  {
    symbol: "V",
    name: "Vanadium",
    atomicNumber: 23,
    category: "transition-metal",
  },
  {
    symbol: "Cr",
    name: "Chromium",
    atomicNumber: 24,
    category: "transition-metal",
  },
  {
    symbol: "Mn",
    name: "Manganese",
    atomicNumber: 25,
    category: "transition-metal",
  },
  {
    symbol: "Fe",
    name: "Iron",
    atomicNumber: 26,
    category: "transition-metal",
  },
  {
    symbol: "Co",
    name: "Cobalt",
    atomicNumber: 27,
    category: "transition-metal",
  },
  {
    symbol: "Ni",
    name: "Nickel",
    atomicNumber: 28,
    category: "transition-metal",
  },
  {
    symbol: "Cu",
    name: "Copper",
    atomicNumber: 29,
    category: "transition-metal",
  },
  {
    symbol: "Zn",
    name: "Zinc",
    atomicNumber: 30,
    category: "transition-metal",
  },
  {
    symbol: "Ga",
    name: "Gallium",
    atomicNumber: 31,
    category: "post-transition-metal",
  },
  { symbol: "Ge", name: "Germanium", atomicNumber: 32, category: "metalloid" },
  { symbol: "As", name: "Arsenic", atomicNumber: 33, category: "metalloid" },
  { symbol: "Se", name: "Selenium", atomicNumber: 34, category: "nonmetal" },
  { symbol: "Br", name: "Bromine", atomicNumber: 35, category: "halogen" },
  { symbol: "Kr", name: "Krypton", atomicNumber: 36, category: "noble-gas" },

  // Period 5
  {
    symbol: "Rb",
    name: "Rubidium",
    atomicNumber: 37,
    category: "alkali-metal",
  },
  {
    symbol: "Sr",
    name: "Strontium",
    atomicNumber: 38,
    category: "alkaline-earth",
  },
  {
    symbol: "Y",
    name: "Yttrium",
    atomicNumber: 39,
    category: "transition-metal",
  },
  {
    symbol: "Zr",
    name: "Zirconium",
    atomicNumber: 40,
    category: "transition-metal",
  },
  {
    symbol: "Nb",
    name: "Niobium",
    atomicNumber: 41,
    category: "transition-metal",
  },
  {
    symbol: "Mo",
    name: "Molybdenum",
    atomicNumber: 42,
    category: "transition-metal",
  },
  {
    symbol: "Tc",
    name: "Technetium",
    atomicNumber: 43,
    category: "transition-metal",
  },
  {
    symbol: "Ru",
    name: "Ruthenium",
    atomicNumber: 44,
    category: "transition-metal",
  },
  {
    symbol: "Rh",
    name: "Rhodium",
    atomicNumber: 45,
    category: "transition-metal",
  },
  {
    symbol: "Pd",
    name: "Palladium",
    atomicNumber: 46,
    category: "transition-metal",
  },
  {
    symbol: "Ag",
    name: "Silver",
    atomicNumber: 47,
    category: "transition-metal",
  },
  {
    symbol: "Cd",
    name: "Cadmium",
    atomicNumber: 48,
    category: "transition-metal",
  },
  {
    symbol: "In",
    name: "Indium",
    atomicNumber: 49,
    category: "post-transition-metal",
  },
  {
    symbol: "Sn",
    name: "Tin",
    atomicNumber: 50,
    category: "post-transition-metal",
  },
  { symbol: "Sb", name: "Antimony", atomicNumber: 51, category: "metalloid" },
  { symbol: "Te", name: "Tellurium", atomicNumber: 52, category: "metalloid" },
  { symbol: "I", name: "Iodine", atomicNumber: 53, category: "halogen" },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, category: "noble-gas" },

  // Period 6
  { symbol: "Cs", name: "Cesium", atomicNumber: 55, category: "alkali-metal" },
  {
    symbol: "Ba",
    name: "Barium",
    atomicNumber: 56,
    category: "alkaline-earth",
  },
  { symbol: "", name: "", atomicNumber: 0, category: "placeholder" }, // ランタノイドのスペース
  {
    symbol: "Hf",
    name: "Hafnium",
    atomicNumber: 72,
    category: "transition-metal",
  },
  {
    symbol: "Ta",
    name: "Tantalum",
    atomicNumber: 73,
    category: "transition-metal",
  },
  {
    symbol: "W",
    name: "Tungsten",
    atomicNumber: 74,
    category: "transition-metal",
  },
  {
    symbol: "Re",
    name: "Rhenium",
    atomicNumber: 75,
    category: "transition-metal",
  },
  {
    symbol: "Os",
    name: "Osmium",
    atomicNumber: 76,
    category: "transition-metal",
  },
  {
    symbol: "Ir",
    name: "Iridium",
    atomicNumber: 77,
    category: "transition-metal",
  },
  {
    symbol: "Pt",
    name: "Platinum",
    atomicNumber: 78,
    category: "transition-metal",
  },
  {
    symbol: "Au",
    name: "Gold",
    atomicNumber: 79,
    category: "transition-metal",
  },
  {
    symbol: "Hg",
    name: "Mercury",
    atomicNumber: 80,
    category: "transition-metal",
  },
  {
    symbol: "Tl",
    name: "Thallium",
    atomicNumber: 81,
    category: "post-transition-metal",
  },
  {
    symbol: "Pb",
    name: "Lead",
    atomicNumber: 82,
    category: "post-transition-metal",
  },
  {
    symbol: "Bi",
    name: "Bismuth",
    atomicNumber: 83,
    category: "post-transition-metal",
  },
  { symbol: "Po", name: "Polonium", atomicNumber: 84, category: "metalloid" },
  { symbol: "At", name: "Astatine", atomicNumber: 85, category: "halogen" },
  { symbol: "Rn", name: "Radon", atomicNumber: 86, category: "noble-gas" },

  // Period 7
  {
    symbol: "Fr",
    name: "Francium",
    atomicNumber: 87,
    category: "alkali-metal",
  },
  {
    symbol: "Ra",
    name: "Radium",
    atomicNumber: 88,
    category: "alkaline-earth",
  },
  { symbol: "", name: "", atomicNumber: 0, category: "placeholder" }, // アクチノイドのスペース
  {
    symbol: "Rf",
    name: "Rutherfordium",
    atomicNumber: 104,
    category: "transition-metal",
  },
  {
    symbol: "Db",
    name: "Dubnium",
    atomicNumber: 105,
    category: "transition-metal",
  },
  {
    symbol: "Sg",
    name: "Seaborgium",
    atomicNumber: 106,
    category: "transition-metal",
  },
  {
    symbol: "Bh",
    name: "Bohrium",
    atomicNumber: 107,
    category: "transition-metal",
  },
  {
    symbol: "Hs",
    name: "Hassium",
    atomicNumber: 108,
    category: "transition-metal",
  },
  { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, category: "unknown" },
  {
    symbol: "Ds",
    name: "Darmstadtium",
    atomicNumber: 110,
    category: "unknown",
  },
  { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, category: "unknown" },
  {
    symbol: "Cn",
    name: "Copernicium",
    atomicNumber: 112,
    category: "transition-metal",
  },
  { symbol: "Nh", name: "Nihonium", atomicNumber: 113, category: "unknown" },
  { symbol: "Fl", name: "Flerovium", atomicNumber: 114, category: "unknown" },
  { symbol: "Mc", name: "Moscovium", atomicNumber: 115, category: "unknown" },
  { symbol: "Lv", name: "Livermorium", atomicNumber: 116, category: "unknown" },
  { symbol: "Ts", name: "Tennessine", atomicNumber: 117, category: "halogen" },
  { symbol: "Og", name: "Oganesson", atomicNumber: 118, category: "noble-gas" },

  // Lanthanides
  ...[
    "La",
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "Tm",
    "Yb",
    "Lu",
  ].map((el, i) => ({
    symbol: el,
    atomicNumber: 57 + i,
    category: "lanthanide",
  })),

  // Actinides
  ...[
    "Ac",
    "Th",
    "Pa",
    "U",
    "Np",
    "Pu",
    "Am",
    "Cm",
    "Bk",
    "Cf",
    "Es",
    "Fm",
    "Md",
    "No",
    "Lr",
  ].map((el, i) => ({
    symbol: el,
    atomicNumber: 89 + i,
    category: "actinide",
  })),
];
