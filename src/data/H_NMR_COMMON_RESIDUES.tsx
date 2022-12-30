import { ICommonResidue, ISource } from "../models/nmrCommonResidues";

export const sources: ISource[] = [
  {
    label: "J. Org. Chem., Vol. 62, No. 21, 1997",
    url: "https://pubs.acs.org/doi/10.1021/jo971176v",
  },
  {
    label: "Org. Process Res. Dev. 2016, 20, 3, 661–667",
    url: "https://pubs.acs.org/doi/10.1021/acs.oprd.5b00417",
  },
  {
    label: "Organometallics, Vol. 29, No. 9, 2010",
    url: "https://pubs.acs.org/doi/10.1021/om100106e",
  },
];

export const H_NMR_COMMON_RESIDUES: ICommonResidue[] = [
  {
    id: crypto.randomUUID(),
    compound: "Solvent peak",
    trivialNames: "",
    molWeight: null,
    signals: [
      {
        proton: { formula: null, multiplicity: null, amount: null },
        chemShifts: {
          chloroform_d: 7.26,
          acetone_d6: 2.05,
          dmso_d6: 2.5,
          benzene_d6: 7.16,
          acetonitrile_d3: 1.94,
          methanol_d4: 3.31,
          water_d2: 4.79,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Water",
    trivialNames: "H2O",
    smiles: "O",
    molWeight: 18.02,
    signals: [
      {
        proton: {
          multiplicity: "s",
          amount: 2,
          formula: (
            <span>
              OH<sub>2</sub>
            </span>
          ),
        },
        chemShifts: {
          chloroform_d: 1.56,
          acetone_d6: 2.84,
          dmso_d6: 3.33,
          benzene_d6: 0.4,
          acetonitrile_d3: 2.13,
          methanol_d4: 4.87,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Acetic acid",
    trivialNames: "AcOH glacial ethanoic",
    smiles: "CC(=O)O",
    molWeight: 60.05,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.1,
          acetone_d6: 1.96,
          dmso_d6: 1.91,
          benzene_d6: 1.55,
          acetonitrile_d3: 1.96,
          methanol_d4: 1.99,
          water_d2: 2.08,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Acetic anhydride",
    trivialNames: "Acetyl acetate",
    smiles: "CC(=O)OC(=O)C",
    molWeight: 102.09,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.23,
          acetone_d6: 2.21,
          dmso_d6: 2.22,
          acetonitrile_d3: 2.18,
          methanol_d4: null,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Acetone",
    trivialNames: "propanone",
    smiles: "CC(=O)C",
    molWeight: 58.08,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.17,
          acetone_d6: 2.09,
          dmso_d6: 2.09,
          benzene_d6: 1.55,
          acetonitrile_d3: 2.08,
          methanol_d4: 2.15,
          water_d2: 2.22,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Acetonitrile",
    trivialNames: "ACN MeCN",
    smiles: "CC#N",
    molWeight: 41.05,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.01,
          acetone_d6: 2.05,
          dmso_d6: 2.07,
          benzene_d6: 1.55,
          acetonitrile_d3: 1.96,
          methanol_d4: 2.03,
          water_d2: 2.06,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "iso-Amyl acetate",
    trivialNames: "Isopentyl acetate",
    smiles: "O=C(OCCC(C)C)C",
    molWeight: 130.19,
    signals: [
      {
        proton: {
          formula: (
            <span>
              OCH<sub>2</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 4.1,
          acetone_d6: 4.05,
          dmso_d6: 4.02,
          acetonitrile_d3: 4.05,
          methanol_d4: 4.09,
          water_d2: 4.14,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.05,
          acetone_d6: 1.97,
          dmso_d6: 1.99,
          acetonitrile_d3: 1.97,
          methanol_d4: 2.01,
          water_d2: 2.07,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "nonet", amount: 1 },
        chemShifts: {
          chloroform_d: 1.68,
          acetone_d6: 1.69,
          dmso_d6: 1.64,
          acetonitrile_d3: 1.67,
          methanol_d4: 1.69,
          water_d2: 1.67,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>CH
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 1.52,
          acetone_d6: 1.5,
          dmso_d6: 1.45,
          acetonitrile_d3: 1.49,
          methanol_d4: 1.51,
          water_d2: 1.53,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.92,
          acetone_d6: 0.91,
          dmso_d6: 0.88,
          acetonitrile_d3: 0.91,
          methanol_d4: 0.93,
          water_d2: 0.89,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "iso-Amyl alcohol",
    trivialNames: "Isopentanol",
    smiles: "OCCC(C)C",
    molWeight: 88.15,
    signals: [
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>OH
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 3.68,
          acetone_d6: 3.56,
          dmso_d6: 3.41,
          acetonitrile_d3: 3.51,
          methanol_d4: 3.57,
          water_d2: 3.64,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "t", amount: 1 },
        chemShifts: {
          chloroform_d: null,
          acetone_d6: 3.34,
          dmso_d6: 4.29,
          acetonitrile_d3: 2.4,
          methanol_d4: null,
          water_d2: null,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "nonet", amount: 1 },
        chemShifts: {
          chloroform_d: 1.72,
          acetone_d6: 1.73,
          dmso_d6: 1.65,
          acetonitrile_d3: 1.67,
          methanol_d4: 1.71,
          water_d2: 1.67,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>CH
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 1.47,
          acetone_d6: 1.39,
          dmso_d6: 1.31,
          acetonitrile_d3: 1.37,
          methanol_d4: 1.42,
          water_d2: 1.44,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.92,
          acetone_d6: 0.89,
          dmso_d6: 0.85,
          acetonitrile_d3: 0.89,
          methanol_d4: 0.91,
          water_d2: 0.9,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "tert-Amyl methyl ether",
    trivialNames: "TAME",
    smiles: "O(C(C)(C)CC)C",
    molWeight: 102.18,
    signals: [
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.18,
          acetone_d6: 3.1,
          dmso_d6: 3.05,
          acetonitrile_d3: 3.1,
          methanol_d4: 3.17,
          water_d2: 3.2,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 1.49,
          acetone_d6: 1.46,
          dmso_d6: 1.42,
          acetonitrile_d3: 1.46,
          methanol_d4: 1.51,
          water_d2: 1.55,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C(CH<sub>3</sub>)<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.13,
          acetone_d6: 1.07,
          dmso_d6: 1.05,
          acetonitrile_d3: 1.08,
          methanol_d4: 1.13,
          water_d2: 1.17,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>C<b>H</b>
              <sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 0.87,
          acetone_d6: 0.82,
          dmso_d6: 0.79,
          acetonitrile_d3: 0.83,
          methanol_d4: 0.86,
          water_d2: 0.85,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Anisole",
    trivialNames: "Methoxybenzene",
    smiles: "COc1ccccc1",
    molWeight: 108.14,
    signals: [
      {
        proton: { formula: "CH (3,5)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: { lowShift: 7.27, highShift: 7.32 },
          acetone_d6: { lowShift: 7.25, highShift: 7.31 },
          dmso_d6: { lowShift: 7.26, highShift: 7.31 },
          acetonitrile_d3: { lowShift: 7.27, highShift: 7.32 },
          methanol_d4: { lowShift: 7.22, highShift: 7.28 },
          water_d2: 7.4,
        },
      },
      {
        proton: { formula: "CH (2,4,6)", multiplicity: "m", amount: 3 },
        chemShifts: {
          chloroform_d: { lowShift: 6.89, highShift: 6.97 },
          acetone_d6: { lowShift: 6.89, highShift: 6.96 },
          dmso_d6: { lowShift: 6.9, highShift: 6.94 },
          acetonitrile_d3: { lowShift: 6.9, highShift: 6.96 },
          methanol_d4: { lowShift: 6.87, highShift: 6.92 },
          water_d2: { lowShift: 7.03, highShift: 7.09 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.81,
          acetone_d6: 3.78,
          dmso_d6: 3.75,
          acetonitrile_d3: 3.77,
          methanol_d4: 3.77,
          water_d2: 3.85,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Benzene",
    trivialNames: "",
    smiles: "c1ccccc1",
    molWeight: 78.11,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "s", amount: 6 },
        chemShifts: {
          chloroform_d: 7.36,
          acetone_d6: 7.36,
          dmso_d6: 7.37,
          benzene_d6: 7.15,
          acetonitrile_d3: 7.37,
          methanol_d4: 7.33,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "BHT",
    trivialNames: "2,6-Dimethyl-4-tert-butylphenol",
    smiles: "Cc1cc(C(C)(C)C)cc(c1O)C",
    molWeight: 178.27,
    signals: [
      {
        proton: { formula: "ArH", multiplicity: "s", amount: 2 },
        chemShifts: {
          chloroform_d: 6.98,
          acetone_d6: 6.96,
          dmso_d6: 6.87,
          benzene_d6: 7.05,
          acetonitrile_d3: 6.97,
          methanol_d4: 6.92,
          water_d2: null,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 5.01,
          acetone_d6: null,
          dmso_d6: 6.65,
          benzene_d6: 4.79,
          acetonitrile_d3: 5.2,
          methanol_d4: null,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              ArCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.27,
          acetone_d6: 2.22,
          dmso_d6: 2.18,
          benzene_d6: 2.24,
          acetonitrile_d3: 2.22,
          methanol_d4: 2.21,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              Ar(CH<sub>3</sub>)<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 9,
        },
        chemShifts: {
          chloroform_d: 1.43,
          acetone_d6: 1.41,
          dmso_d6: 1.36,
          benzene_d6: 1.38,
          acetonitrile_d3: 1.39,
          methanol_d4: 1.4,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "2-Butanone",
    trivialNames: "Methylethylketone MEK Methylacetone Methylpropanone",
    smiles: "CC(=O)CC",
    molWeight: 72.11,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.14,
          acetone_d6: 2.07,
          dmso_d6: 2.07,
          benzene_d6: 1.58,
          acetonitrile_d3: 2.06,
          methanol_d4: 2.12,
          water_d2: 2.19,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>CH<sub>3</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 2.46,
          acetone_d6: 2.45,
          dmso_d6: 2.43,
          benzene_d6: 1.81,
          acetonitrile_d3: 2.43,
          methanol_d4: 2.5,
          water_d2: 3.18,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>C<b>H</b>
              <sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.06,
          acetone_d6: 0.96,
          dmso_d6: 0.91,
          benzene_d6: 0.85,
          acetonitrile_d3: 0.96,
          methanol_d4: 1.01,
          water_d2: 1.26,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "iso-Butyl acetate",
    trivialNames: "",
    smiles: "O=C(OCC(C)C)C",
    molWeight: 116.16,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 3.85,
          acetone_d6: 3.81,
          dmso_d6: 3.79,
          acetonitrile_d3: 3.81,
          methanol_d4: 3.84,
          water_d2: 3.91,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.06,
          acetone_d6: 1.99,
          dmso_d6: 2.01,
          acetonitrile_d3: 1.99,
          methanol_d4: 2.03,
          water_d2: 2.11,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "nonet", amount: 1 },
        chemShifts: {
          chloroform_d: 1.92,
          acetone_d6: 1.89,
          dmso_d6: 1.87,
          acetonitrile_d3: 1.9,
          methanol_d4: 1.92,
          water_d2: 1.94,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.93,
          acetone_d6: 0.91,
          dmso_d6: 0.88,
          acetonitrile_d3: 0.91,
          methanol_d4: 0.93,
          water_d2: 0.93,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "n-Butyl acetate",
    trivialNames: "Butile",
    smiles: "CCCCOC(=O)C",
    molWeight: 116.16,
    signals: [
      {
        proton: {
          formula: (
            <span>
              OCH<sub>2</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 4.07,
          acetone_d6: 4.02,
          dmso_d6: 3.99,
          acetonitrile_d3: 4.02,
          methanol_d4: 4.05,
          water_d2: 4.12,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.05,
          acetone_d6: 1.97,
          dmso_d6: 1.99,
          acetonitrile_d3: 1.97,
          methanol_d4: 2.01,
          water_d2: 2.09,
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<sub>2</sub>C<b>H</b>
              <sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.64, lowShift: 1.57 },
          acetone_d6: { highShift: 1.62, lowShift: 1.55 },
          dmso_d6: { highShift: 1.57, lowShift: 1.5 },
          acetonitrile_d3: { highShift: 1.61, lowShift: 1.54 },
          methanol_d4: { highShift: 1.64, lowShift: 1.57 },
          water_d2: { highShift: 1.67, lowShift: 1.6 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>CH<sub>3</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.43, lowShift: 1.34 },
          acetone_d6: { highShift: 1.42, lowShift: 1.33 },
          dmso_d6: { highShift: 1.37, lowShift: 1.27 },
          acetonitrile_d3: { highShift: 1.41, lowShift: 1.32 },
          methanol_d4: { highShift: 1.44, lowShift: 1.34 },
          water_d2: { highShift: 1.42, lowShift: 1.33 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>C<b>H</b>
              <sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 0.94,
          acetone_d6: 0.92,
          dmso_d6: 0.89,
          acetonitrile_d3: 0.92,
          methanol_d4: 0.94,
          water_d2: 0.91,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "tert-Butyl alcohol",
    trivialNames: "tBuOH 2-methylpropan-2-ol methyl-2-propanol tert-butanol",
    smiles: "OC(C)(C)C",
    molWeight: 74.12,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 9,
        },
        chemShifts: {
          chloroform_d: 1.28,
          acetone_d6: 1.18,
          dmso_d6: 1.11,
          benzene_d6: 1.05,
          acetonitrile_d3: 1.16,
          methanol_d4: 1.4,
          water_d2: 1.24,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: null,
          acetone_d6: null,
          dmso_d6: 4.19,
          benzene_d6: 1.55,
          acetonitrile_d3: 2.18,
          methanol_d4: null,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Chlorobenzene",
    trivialNames: "phenyl chloride",
    smiles: "c1ccc(cc1)Cl",
    molWeight: 112.56,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "m", amount: 5 },
        chemShifts: {
          chloroform_d: { highShift: 7.36, lowShift: 7.22 },
          acetone_d6: { highShift: 7.42, lowShift: 7.31 },
          dmso_d6: { highShift: 7.45, lowShift: 7.32 },
          acetonitrile_d3: { highShift: 7.41, lowShift: 7.29 },
          methanol_d4: { highShift: 7.37, lowShift: 7.25 },
          water_d2: { highShift: 7.46, lowShift: 7.33 },
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Chloroform",
    trivialNames: "trichloromethane TCM Methyl trichloride",
    smiles: "C(Cl)(Cl)Cl",
    molWeight: 119.37,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 7.26,
          acetone_d6: 8.02,
          dmso_d6: 8.32,
          benzene_d6: 6.15,
          acetonitrile_d3: 7.58,
          methanol_d4: 7.9,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "18-Crown-6",
    trivialNames: "",
    smiles: "O1CCOCCOCCOCCOCCOCC1",
    molWeight: 264.32,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 24,
        },
        chemShifts: {
          chloroform_d: 3.67,
          acetone_d6: 3.59,
          dmso_d6: 3.51,
          benzene_d6: 3.39,
          acetonitrile_d3: 3.51,
          methanol_d4: 3.64,
          water_d2: 3.8,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Cyclohexane",
    trivialNames: "Hexanaphthene",
    smiles: "C1CCCCC1",
    molWeight: 84.16,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 12,
        },
        chemShifts: {
          chloroform_d: 1.43,
          acetone_d6: 1.43,
          dmso_d6: 1.4,
          benzene_d6: 1.4,
          acetonitrile_d3: 1.44,
          methanol_d4: 1.45,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Cyclohexanone",
    trivialNames: "pimelic ketone",
    smiles: "C1CCCCC1(=O)",
    molWeight: 98.15,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub> (2,6)
            </span>
          ),
          multiplicity: "t",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 2.33,
          acetone_d6: 2.27,
          dmso_d6: 2.25,
          acetonitrile_d3: 2.27,
          methanol_d4: 2.34,
          water_d2: 2.4,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub> (3,5)
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.86, lowShift: 1.84 },
          acetone_d6: { highShift: 1.83, lowShift: 1.79 },
          dmso_d6: { highShift: 1.78, lowShift: 1.74 },
          acetonitrile_d3: { highShift: 1.84, lowShift: 1.79 },
          methanol_d4: { highShift: 1.87, lowShift: 1.85 },
          water_d2: { highShift: 1.9, lowShift: 1.85 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub> (4)
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.73, lowShift: 1.71 },
          acetone_d6: { highShift: 1.74, lowShift: 1.7 },
          dmso_d6: { highShift: 1.66, lowShift: 1.64 },
          acetonitrile_d3: { highShift: 1.72, lowShift: 1.67 },
          methanol_d4: { highShift: 1.76, lowShift: 1.74 },
          water_d2: { highShift: 1.75, lowShift: 1.7 },
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Cyclopentyl methyl ether",
    trivialNames: "CPME Methoxycyclopentane",
    smiles: "COC1CCCC1",
    molWeight: 100.16,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: { highShift: 3.82, lowShift: 3.78 },
          acetone_d6: { highShift: 3.77, lowShift: 3.73 },
          dmso_d6: { highShift: 3.76, lowShift: 3.71 },
          acetonitrile_d3: { highShift: 3.78, lowShift: 3.74 },
          methanol_d4: { highShift: 3.85, lowShift: 3.8 },
          water_d2: { highShift: 3.99, lowShift: 3.94 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.28,
          acetone_d6: 3.19,
          dmso_d6: 3.15,
          acetonitrile_d3: 3.19,
          methanol_d4: 3.26,
          water_d2: 3.3,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 8,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.74, lowShift: 1.5 },
          acetone_d6: { highShift: 1.72, lowShift: 1.44 },
          dmso_d6: { highShift: 1.67, lowShift: 1.42 },
          acetonitrile_d3: { highShift: 1.7, lowShift: 1.48 },
          methanol_d4: { highShift: 1.77, lowShift: 1.5 },
          water_d2: { highShift: 1.86, lowShift: 1.51 },
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "p-Cymene",
    trivialNames: "Paracymene 4-Isopropyltoluene",
    smiles: "c1cc(ccc1C(C)C)C",
    molWeight: 134.22,
    signals: [
      {
        proton: { formula: "ArH", multiplicity: "m", amount: 4 },
        chemShifts: {
          chloroform_d: { highShift: 7.14, lowShift: 7.09 },
          acetone_d6: { highShift: 7.13, lowShift: 7.07 },
          dmso_d6: { highShift: 7.12, lowShift: 7.07 },
          acetonitrile_d3: { highShift: 7.14, lowShift: 7.09 },
          methanol_d4: { highShift: 7.09, lowShift: 7.04 },
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>(CH<sub>3</sub>)<sub>2</sub>
            </span>
          ),
          multiplicity: "sept",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 2.87,
          acetone_d6: 2.85,
          dmso_d6: 2.83,
          acetonitrile_d3: 2.86,
          methanol_d4: 2.83,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              ArCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.32,
          acetone_d6: 2.27,
          dmso_d6: 2.25,
          acetonitrile_d3: 2.28,
          methanol_d4: 2.27,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH(C<b>H</b>
              <sub>3</sub>)<sub>2</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.24,
          acetone_d6: 1.2,
          dmso_d6: 1.17,
          acetonitrile_d3: 1.2,
          methanol_d4: 1.21,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,2-Dichloroethane",
    trivialNames: "ethylene dichloride EDC",
    smiles: "ClCCCl",
    molWeight: 98.95,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.73,
          acetone_d6: 3.87,
          dmso_d6: 3.9,
          benzene_d6: 2.9,
          acetonitrile_d3: 3.81,
          methanol_d4: 3.78,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Dichloromethane",
    trivialNames: "DCM methylene chloride",
    smiles: "ClCCl",
    molWeight: 84.93,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 5.3,
          acetone_d6: 5.63,
          dmso_d6: 5.76,
          benzene_d6: 4.27,
          acetonitrile_d3: 5.44,
          methanol_d4: 5.49,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Diethyl ether",
    trivialNames: "ethoxy ethane",
    smiles: "CCOCC",
    molWeight: 74.12,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.21,
          acetone_d6: 1.11,
          dmso_d6: 1.09,
          benzene_d6: 1.11,
          acetonitrile_d3: 1.12,
          methanol_d4: 1.18,
          water_d2: 1.17,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.48,
          acetone_d6: 3.41,
          dmso_d6: 3.38,
          benzene_d6: 3.26,
          acetonitrile_d3: 3.42,
          methanol_d4: 3.49,
          water_d2: 3.56,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Diglyme",
    trivialNames: "bis(2-methoxyethyl) ether Diethylene glycol dimethyl ether",
    smiles: "COCCOCCOC",
    molWeight: 134.18,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.65,
          acetone_d6: 3.56,
          dmso_d6: 3.51,
          benzene_d6: 3.46,
          acetonitrile_d3: 3.53,
          methanol_d4: 3.61,
          water_d2: 3.67,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.57,
          acetone_d6: 3.47,
          dmso_d6: 3.38,
          benzene_d6: 3.34,
          acetonitrile_d3: 3.45,
          methanol_d4: 3.58,
          water_d2: 3.61,
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 3.39,
          acetone_d6: 3.28,
          dmso_d6: 3.24,
          benzene_d6: 3.11,
          acetonitrile_d3: 3.29,
          methanol_d4: 3.35,
          water_d2: 3.37,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,2-Dimethoxyethane",
    trivialNames: "Glyme Monoglyme dimethyl glycol dimethyl ether DME",
    smiles: "COCCOC",
    molWeight: 90.12,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 3.4,
          acetone_d6: 3.28,
          dmso_d6: 3.24,
          benzene_d6: 3.12,
          acetonitrile_d3: 3.28,
          methanol_d4: 3.35,
          water_d2: 3.37,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.55,
          acetone_d6: 3.46,
          dmso_d6: 3.43,
          benzene_d6: 3.33,
          acetonitrile_d3: 3.45,
          methanol_d4: 3.52,
          water_d2: 3.6,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Dimethylacetamide",
    trivialNames: "DMAc DMA N,N-Dimethylacetamide",
    smiles: "CN(C)C(=O)C",
    molWeight: 87.12,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.09,
          acetone_d6: 1.97,
          dmso_d6: 1.96,
          benzene_d6: 1.6,
          acetonitrile_d3: 1.97,
          methanol_d4: 2.07,
          water_d2: 2.08,
        },
      },
      {
        proton: {
          formula: (
            <span>
              NCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.02,
          acetone_d6: 3.0,
          dmso_d6: 2.94,
          benzene_d6: 2.57,
          acetonitrile_d3: 2.96,
          methanol_d4: 3.31,
          water_d2: 3.06,
        },
      },
      {
        proton: {
          formula: (
            <span>
              NCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.94,
          acetone_d6: 2.83,
          dmso_d6: 2.78,
          benzene_d6: 2.05,
          acetonitrile_d3: 2.83,
          methanol_d4: 2.92,
          water_d2: 2.9,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Dimethyl carbonate",
    trivialNames: "DMC",
    smiles: "COC(=O)OC",
    molWeight: 90.08,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 3.79,
          acetone_d6: 3.72,
          dmso_d6: 3.69,
          acetonitrile_d3: 3.72,
          methanol_d4: 3.74,
          water_d2: 3.69,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Dimethylformamide",
    trivialNames: "DMF N,N-Dimethylformamide",
    smiles: "CN(C)C(=O)",
    molWeight: 73.1,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 8.02,
          acetone_d6: 7.96,
          dmso_d6: 7.95,
          benzene_d6: 7.63,
          acetonitrile_d3: 7.92,
          methanol_d4: 7.97,
          water_d2: 7.92,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.96,
          acetone_d6: 2.94,
          dmso_d6: 2.89,
          benzene_d6: 2.36,
          acetonitrile_d3: 2.89,
          methanol_d4: 2.99,
          water_d2: 3.01,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.88,
          acetone_d6: 2.78,
          dmso_d6: 2.73,
          benzene_d6: 1.86,
          acetonitrile_d3: 2.77,
          methanol_d4: 2.86,
          water_d2: 2.85,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Dimethyl sulfoxide",
    trivialNames: "DMSO (Methanesulfinyl)methane",
    smiles: "CS(=O)C",
    molWeight: 78.13,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.62,
          acetone_d6: 2.52,
          dmso_d6: 2.54,
          benzene_d6: 1.68,
          acetonitrile_d3: 2.5,
          methanol_d4: 2.65,
          water_d2: 2.71,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,4-Dioxane",
    trivialNames: "1,4-Dioxacyclohexane",
    smiles: "O1CCOCC1",
    molWeight: 88.11,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 8,
        },
        chemShifts: {
          chloroform_d: 3.71,
          acetone_d6: 3.59,
          dmso_d6: 3.57,
          benzene_d6: 3.35,
          acetonitrile_d3: 3.6,
          methanol_d4: 3.66,
          water_d2: 3.75,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "DMPU",
    trivialNames: "1,3-Dimethyl-3,4,5,6-tetrahydro-2(1H)-pyrimidinone",
    smiles: "O=C1N(C)CCCN1C",
    molWeight: 128.18,
    signals: [
      {
        proton: {
          formula: (
            <span>
              NCH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: { highShift: 3.25, lowShift: 3.22 },
          acetone_d6: { highShift: 3.25, lowShift: 3.22 },
          dmso_d6: { highShift: 3.2, lowShift: 3.17 },
          acetonitrile_d3: { highShift: 3.22, lowShift: 3.19 },
          methanol_d4: { highShift: 3.3, lowShift: 3.27 },
          water_d2: { highShift: 3.3, lowShift: 3.27 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              NCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.92,
          acetone_d6: 2.81,
          dmso_d6: 2.75,
          acetonitrile_d3: 2.81,
          methanol_d4: 2.88,
          water_d2: 2.86,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: { highShift: 2.0, lowShift: 1.94 },
          acetone_d6: { highShift: 1.97, lowShift: 1.92 },
          dmso_d6: { highShift: 1.9, lowShift: 1.84 },
          acetonitrile_d3: { highShift: 1.94, lowShift: 1.88 },
          methanol_d4: { highShift: 2.0, lowShift: 1.94 },
          water_d2: { highShift: 1.98, lowShift: 1.92 },
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethane",
    trivialNames: "",
    smiles: "CC",
    molWeight: 30.07,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.87,
          acetone_d6: 0.83,
          dmso_d6: 0.82,
          benzene_d6: 0.8,
          acetonitrile_d3: 0.85,
          methanol_d4: 0.85,
          water_d2: 0.82,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethanol",
    trivialNames: "EtOH alcohol ethyl alcohol",
    smiles: "CCO",
    molWeight: 46.07,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.25,
          acetone_d6: 1.12,
          dmso_d6: 1.06,
          benzene_d6: 0.96,
          acetonitrile_d3: 1.12,
          methanol_d4: 1.19,
          water_d2: 1.17,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 3.72,
          acetone_d6: 3.57,
          dmso_d6: 3.44,
          benzene_d6: 3.34,
          acetonitrile_d3: 3.54,
          methanol_d4: 3.6,
          water_d2: 3.65,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 1.32,
          acetone_d6: 3.39,
          dmso_d6: 4.63,
          benzene_d6: null,
          acetonitrile_d3: 2.47,
          methanol_d4: null,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethyl acetate",
    trivialNames: "EtOAc ETAC EA",
    smiles: "CCOC(=O)C",
    molWeight: 88.11,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.05,
          acetone_d6: 1.97,
          dmso_d6: 1.99,
          benzene_d6: 1.65,
          acetonitrile_d3: 1.97,
          methanol_d4: 2.01,
          water_d2: 2.07,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>2</sub>CH<sub>3</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 4.12,
          acetone_d6: 4.05,
          dmso_d6: 4.03,
          benzene_d6: 3.89,
          acetonitrile_d3: 4.06,
          methanol_d4: 4.09,
          water_d2: 4.14,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>C<b>H</b>
              <sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.26,
          acetone_d6: 1.2,
          dmso_d6: 1.17,
          benzene_d6: 0.92,
          acetonitrile_d3: 1.2,
          methanol_d4: 1.24,
          water_d2: 1.24,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethyl benzene",
    trivialNames: "",
    smiles: "c1ccccc1(CC)",
    molWeight: 106.17,
    signals: [
      {
        proton: { formula: "CH (3,5)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: { highShift: 7.3, lowShift: 7.26 },
          acetone_d6: { highShift: 7.29, lowShift: 7.25 },
          dmso_d6: { highShift: 7.29, lowShift: 7.26 },
          acetonitrile_d3: { highShift: 7.3, lowShift: 7.25 },
          methanol_d4: { highShift: 7.26, lowShift: 7.22 },
          water_d2: null,
        },
      },
      {
        proton: { formula: "CH (2,6)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: { highShift: 7.23, lowShift: 7.15 },
          acetone_d6: { highShift: 7.22, lowShift: 7.19 },
          dmso_d6: { highShift: 7.22, lowShift: 7.14 },
          acetonitrile_d3: { highShift: 7.23, lowShift: 7.21 },
          methanol_d4: { highShift: 7.18, lowShift: 7.16 },
          water_d2: null,
        },
      },
      {
        proton: { formula: "CH (4)", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: { highShift: 7.23, lowShift: 7.15 },
          acetone_d6: { highShift: 7.17, lowShift: 7.13 },
          dmso_d6: { highShift: 7.22, lowShift: 7.14 },
          acetonitrile_d3: { highShift: 7.19, lowShift: 7.14 },
          methanol_d4: { highShift: 7.14, lowShift: 7.1 },
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 2.65,
          acetone_d6: 2.63,
          dmso_d6: 2.6,
          acetonitrile_d3: 2.63,
          methanol_d4: 2.62,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.24,
          acetone_d6: 1.2,
          dmso_d6: 1.17,
          acetonitrile_d3: 1.21,
          methanol_d4: 1.21,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethylene",
    trivialNames: "Ethene",
    smiles: "C=C",
    molWeight: 28.05,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 5.4,
          acetone_d6: 5.38,
          dmso_d6: 5.41,
          benzene_d6: 5.25,
          acetonitrile_d3: 5.41,
          methanol_d4: 5.39,
          water_d2: 5.44,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethylene glycol",
    trivialNames: "Ethylene alcohol 1,2-Dihydroxyethane",
    smiles: "OCCO",
    molWeight: 62.07,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.76,
          acetone_d6: { highShift: 3.58, lowShift: 3.54 },
          dmso_d6: { highShift: 3.4, lowShift: 3.38 },
          acetonitrile_d3: { highShift: 3.52, lowShift: 3.5 },
          methanol_d4: 3.59,
          water_d2: 3.67,
        },
      },
      {
        proton: {
          formula: "OH",
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 2.28,
          acetone_d6: null,
          dmso_d6: { highShift: 4.46, lowShift: 4.43 },
          acetonitrile_d3: { highShift: 2.72, lowShift: 2.69 },
          methanol_d4: null,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethylene glycol diacetate",
    trivialNames: "",
    smiles: "CC(=O)OCCOC(=O)C",
    molWeight: 146.14,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 4.27,
          acetone_d6: 4.24,
          dmso_d6: 4.19,
          acetonitrile_d3: 4.21,
          methanol_d4: 4.25,
          water_d2: 4.34,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.09,
          acetone_d6: 2.01,
          dmso_d6: 2.02,
          acetonitrile_d3: 2.01,
          methanol_d4: 2.04,
          water_d2: 2.12,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "L-Ethyl lactate",
    trivialNames: "Acytol",
    smiles: "C[C@H](O)C(OCC)=O",
    molWeight: 118.13,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: { highShift: 4.3, lowShift: 4.22 },
          acetone_d6: { highShift: 4.24, lowShift: 4.09 },
          dmso_d6: { highShift: 4.14, lowShift: 4.08 },
          acetonitrile_d3: { highShift: 4.21, lowShift: 4.11 },
          methanol_d4: 4.22,
          water_d2: 4.4,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 4.25,
          acetone_d6: { highShift: 4.24, lowShift: 4.09 },
          dmso_d6: 4.08,
          acetonitrile_d3: { highShift: 4.21, lowShift: 4.11 },
          methanol_d4: 4.18,
          water_d2: 4.23,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "d", amount: 1 },
        chemShifts: {
          chloroform_d: 2.79,
          acetone_d6: null,
          dmso_d6: 5.35,
          acetonitrile_d3: 3.33,
          methanol_d4: null,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>3</sub>CH
            </span>
          ),
          multiplicity: "d",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.42,
          acetone_d6: 1.32,
          dmso_d6: 1.24,
          acetonitrile_d3: 1.31,
          methanol_d4: 1.36,
          water_d2: 1.41,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>
              <sub>3</sub>CH<sub>2</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.31,
          acetone_d6: 1.23,
          dmso_d6: 1.19,
          acetonitrile_d3: 1.23,
          methanol_d4: 1.27,
          water_d2: 1.28,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Ethyl tert-butyl ether",
    trivialNames: "ETBE",
    smiles: "O(C(C)(C)C)CC",
    molWeight: 102.18,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 3.41,
          acetone_d6: 3.37,
          dmso_d6: 3.33,
          acetonitrile_d3: 3.38,
          methanol_d4: 3.45,
          water_d2: 3.54,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C(CH<sub>3</sub>)<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 9,
        },
        chemShifts: {
          chloroform_d: 1.2,
          acetone_d6: 1.14,
          dmso_d6: 1.12,
          acetonitrile_d3: 1.14,
          methanol_d4: 1.19,
          water_d2: 1.23,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.17,
          acetone_d6: 1.06,
          dmso_d6: 1.04,
          acetonitrile_d3: 1.07,
          methanol_d4: 1.13,
          water_d2: 1.15,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Formic acid",
    trivialNames: "Methanoic acid",
    smiles: "O=CO",
    molWeight: 46.03,
    signals: [
      {
        proton: { formula: "OCH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 8.03,
          acetone_d6: 8.11,
          dmso_d6: 8.14,
          acetonitrile_d3: 8.03,
          methanol_d4: 8.07,
          water_d2: 8.26,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "n-Heptane",
    trivialNames: "Septane",
    smiles: "CCCCCCC",
    molWeight: 100.21,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 10,
        },
        chemShifts: {
          chloroform_d: { highShift: 1.32, lowShift: 1.24 },
          acetone_d6: { highShift: 1.33, lowShift: 1.25 },
          dmso_d6: { highShift: 1.3, lowShift: 1.22 },
          acetonitrile_d3: { highShift: 1.33, lowShift: 1.25 },
          methanol_d4: { highShift: 1.34, lowShift: 1.24 },
          water_d2: { highShift: 1.33, lowShift: 1.23 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.88,
          acetone_d6: 0.88,
          dmso_d6: 0.86,
          acetonitrile_d3: 0.89,
          methanol_d4: 0.9,
          water_d2: 0.87,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Hexamethylbenzene",
    trivialNames: "Mellitene",
    smiles: "c1(c(c(c(c(c1C)C)C)C)C)C",
    molWeight: 162.28,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 18,
        },
        chemShifts: {
          chloroform_d: 2.24,
          acetone_d6: 2.17,
          dmso_d6: 2.14,
          benzene_d6: 2.13,
          acetonitrile_d3: 2.19,
          methanol_d4: 2.19,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Hexamethyldisiloxane",
    trivialNames: "HMDSO Bis(trimethylsilyl) ether",
    smiles: "O([Si](C)(C)C)[Si](C)(C)C",
    molWeight: 162.38,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 18,
        },
        chemShifts: {
          chloroform_d: 0.07,
          acetone_d6: 0.07,
          dmso_d6: 0.06,
          benzene_d6: 0.12,
          acetonitrile_d3: 0.07,
          methanol_d4: 0.07,
          water_d2: 0.28,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Hexamethylphosphoramide",
    smiles: "O=P(N(C)C)(N(C)C)N(C)C",
    trivialNames: "HMPA",
    molWeight: 179.2,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 18,
        },
        chemShifts: {
          chloroform_d: 2.65,
          acetone_d6: 2.59,
          dmso_d6: 2.53,
          benzene_d6: 2.4,
          acetonitrile_d3: 2.57,
          methanol_d4: 2.64,
          water_d2: 2.61,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "n-Hexane",
    trivialNames: "",
    smiles: "CCCCCC",
    molWeight: 86.18,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.88,
          acetone_d6: 0.88,
          dmso_d6: 0.86,
          benzene_d6: 0.89,
          acetonitrile_d3: 0.89,
          methanol_d4: 0.9,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 8,
        },
        chemShifts: {
          chloroform_d: 1.26,
          acetone_d6: 1.28,
          dmso_d6: 1.25,
          benzene_d6: 1.24,
          acetonitrile_d3: 1.28,
          methanol_d4: 1.29,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Hydrogen",
    trivialNames: "H2",
    smiles: "[HH]",
    molWeight: 2.02,
    signals: [
      {
        proton: {
          formula: (
            <span>
              H<sub>2</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 4.62,
          acetone_d6: 4.54,
          dmso_d6: 4.61,
          benzene_d6: 4.47,
          acetonitrile_d3: 4.57,
          methanol_d4: 4.56,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Imidazole",
    trivialNames: "",
    smiles: "c1cnc[nH]1",
    molWeight: 68.08,
    signals: [
      {
        proton: { formula: "CH (2)", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 7.67,
          acetone_d6: 7.62,
          dmso_d6: 7.63,
          benzene_d6: 7.33,
          acetonitrile_d3: 7.57,
          methanol_d4: 7.67,
          water_d2: 7.78,
        },
      },
      {
        proton: { formula: "CH (4,5)", multiplicity: "s", amount: 2 },
        chemShifts: {
          chloroform_d: 7.1,
          acetone_d6: 7.04,
          dmso_d6: 7.01,
          benzene_d6: 6.9,
          acetonitrile_d3: 7.01,
          methanol_d4: 7.05,
          water_d2: 7.14,
        },
      },
    ],
  },

  {
    id: crypto.randomUUID(),
    compound: "Methane",
    trivialNames: "",
    smiles: "C",
    molWeight: 16.04,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>4</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 0.22,
          acetone_d6: 0.17,
          dmso_d6: 0.2,
          benzene_d6: 0.16,
          acetonitrile_d3: 0.2,
          methanol_d4: 0.2,
          water_d2: 0.18,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Methanol",
    trivialNames: "MeOH methyl alcohol Hydroxymethane",
    smiles: "CO",
    molWeight: 32.04,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.49,
          acetone_d6: 3.31,
          dmso_d6: 3.16,
          benzene_d6: 3.07,
          acetonitrile_d3: 3.28,
          methanol_d4: 3.34,
          water_d2: 3.34,
        },
      },
      {
        proton: { formula: "OH", multiplicity: "s", amount: 1 },
        chemShifts: {
          chloroform_d: 1.09,
          acetone_d6: 3.12,
          dmso_d6: 4.01,
          benzene_d6: null,
          acetonitrile_d3: 2.16,
          methanol_d4: null,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Methyl acetate",
    trivialNames: "",
    smiles: "O=C(OC)C",
    molWeight: 74.08,
    signals: [
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.67,
          acetone_d6: 3.59,
          dmso_d6: 3.57,
          acetonitrile_d3: 3.6,
          methanol_d4: 3.64,
          water_d2: 3.69,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.06,
          acetone_d6: 1.98,
          dmso_d6: 2.0,
          acetonitrile_d3: 1.99,
          methanol_d4: 2.02,
          water_d2: 2.09,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Methyl iso-butyl ketone",
    trivialNames: "MIBK",
    smiles: "CC(C)CC(=O)C",
    molWeight: 100.16,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 2.3,
          acetone_d6: 2.31,
          dmso_d6: 2.3,
          acetonitrile_d3: 2.29,
          methanol_d4: 2.35,
          water_d2: 2.43,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: 2.13,
          acetone_d6: { highShift: 2.12, lowShift: 2.02 },
          dmso_d6: 1.99,
          acetonitrile_d3: { highShift: 2.08, lowShift: 2.02 },
          methanol_d4: 2.09,
          water_d2: 2.08,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.12,
          acetone_d6: 2.06,
          dmso_d6: 2.06,
          acetonitrile_d3: 2.05,
          methanol_d4: 2.11,
          water_d2: 2.21,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH(C<b>H</b>
              <sub>3</sub>)<sub>2</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.92,
          acetone_d6: 0.88,
          dmso_d6: 0.85,
          acetonitrile_d3: 0.88,
          methanol_d4: 0.91,
          water_d2: 0.9,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Methyl tert-butyl ether",
    trivialNames: "MTBE",
    smiles: "O(C(C)(C)C)C",
    molWeight: 88.15,
    signals: [
      {
        proton: {
          formula: (
            <span>
              OCH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 3.22,
          acetone_d6: 3.13,
          dmso_d6: 3.08,
          acetonitrile_d3: 3.13,
          methanol_d4: 3.2,
          water_d2: 3.22,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C(CH<sub>3</sub>)<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 9,
        },
        chemShifts: {
          chloroform_d: 1.19,
          acetone_d6: 1.13,
          dmso_d6: 1.11,
          acetonitrile_d3: 1.14,
          methanol_d4: 1.15,
          water_d2: 1.21,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "2-Methyl tetrahydrofuran",
    trivialNames: "Methyl THF",
    smiles: "O1C(C)CCC1",
    molWeight: 86.13,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: 3.94,
          acetone_d6: 3.83,
          dmso_d6: 3.82,
          acetonitrile_d3: 3.85,
          methanol_d4: 3.95,
          water_d2: 4.03,
        },
      },
      {
        proton: {
          formula: (
            <span>
              OC<b>H</b>H
            </span>
          ),
          multiplicity: "m",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 3.89,
          acetone_d6: 3.78,
          dmso_d6: 3.75,
          acetonitrile_d3: 3.79,
          methanol_d4: 3.86,
          water_d2: 3.88,
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<b>H</b>
            </span>
          ),
          multiplicity: "m",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 3.71,
          acetone_d6: 3.58,
          dmso_d6: 3.55,
          acetonitrile_d3: 3.6,
          methanol_d4: 3.7,
          water_d2: 3.74,
        },
      },
      {
        proton: {
          formula: (
            <span>
              OCH<sub>2</sub>C<b>H</b>
              <sub>2</sub>, C<b>H</b>HCH
            </span>
          ),
          multiplicity: "m",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: { highShift: 2.03, lowShift: 1.81 },
          acetone_d6: { highShift: 2.0, lowShift: 1.75 },
          dmso_d6: { highShift: 1.97, lowShift: 1.72 },
          acetonitrile_d3: { highShift: 2.0, lowShift: 1.76 },
          methanol_d4: { highShift: 2.06, lowShift: 1.85 },
          water_d2: { highShift: 2.11, lowShift: 1.86 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<b>H</b>CH
            </span>
          ),
          multiplicity: "m",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 1.41,
          acetone_d6: 1.34,
          dmso_d6: 1.31,
          acetonitrile_d3: 1.35,
          methanol_d4: 1.42,
          water_d2: 1.47,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.23,
          acetone_d6: 1.14,
          dmso_d6: 1.12,
          acetonitrile_d3: 1.15,
          methanol_d4: 1.2,
          water_d2: 1.23,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Nitromethane",
    trivialNames: "Nitrocarbol",
    smiles: "C[N+](=O)[O-]",
    molWeight: 61.04,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 4.33,
          acetone_d6: 4.43,
          dmso_d6: 4.42,
          benzene_d6: 2.94,
          acetonitrile_d3: 4.31,
          methanol_d4: 4.34,
          water_d2: 4.4,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "n-Pentane",
    trivialNames: "",
    smiles: "CCCCC",
    molWeight: 72.15,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.88,
          acetone_d6: 0.88,
          dmso_d6: 0.86,
          benzene_d6: 0.87,
          acetonitrile_d3: 0.89,
          methanol_d4: 0.9,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.27,
          acetone_d6: 1.27,
          dmso_d6: 1.27,
          benzene_d6: 1.23,
          acetonitrile_d3: 1.29,
          methanol_d4: 1.29,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Propane",
    trivialNames: "",
    smiles: "CCC",
    molWeight: 44.1,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 0.9,
          acetone_d6: 0.88,
          dmso_d6: 0.87,
          benzene_d6: 0.86,
          acetonitrile_d3: 0.9,
          methanol_d4: 0.91,
          water_d2: 0.88,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "sept",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 1.32,
          acetone_d6: 1.31,
          dmso_d6: 1.29,
          benzene_d6: 1.26,
          acetonitrile_d3: 1.33,
          methanol_d4: 1.34,
          water_d2: 1.3,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "iso-Propanol",
    trivialNames: "Isopropyl alcohol Isopropanol IPA",
    smiles: "OC(C)C",
    molWeight: 60.1,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.22,
          acetone_d6: 1.1,
          dmso_d6: 1.04,
          benzene_d6: 0.95,
          acetonitrile_d3: 1.09,
          methanol_d4: 1.5,
          water_d2: 1.17,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "sept", amount: 1 },
        chemShifts: {
          chloroform_d: 4.04,
          acetone_d6: 3.9,
          dmso_d6: 3.78,
          benzene_d6: 3.67,
          acetonitrile_d3: 3.87,
          methanol_d4: 3.92,
          water_d2: 4.02,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "iso-Propyl acetate",
    trivialNames: "",
    smiles: "CC(=O)OC(C)C",
    molWeight: 102.13,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "sept", amount: 1 },
        chemShifts: {
          chloroform_d: 4.99,
          acetone_d6: 4.91,
          dmso_d6: 4.86,
          acetonitrile_d3: 4.91,
          methanol_d4: 4.95,
          water_d2: 4.98,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>CO
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.02,
          acetone_d6: 1.94,
          dmso_d6: 1.96,
          acetonitrile_d3: 1.94,
          methanol_d4: 1.99,
          water_d2: 2.07,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH(C<b>H</b>
              <sub>3</sub>)<sub>2</sub>
            </span>
          ),
          multiplicity: "d",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 1.23,
          acetone_d6: 1.19,
          dmso_d6: 1.17,
          acetonitrile_d3: 1.19,
          methanol_d4: 1.22,
          water_d2: 1.25,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Propylene",
    trivialNames: "propene",
    smiles: "CC=C",
    molWeight: 42.08,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 1.73,
          benzene_d6: 1.55,
          acetone_d6: 1.68,
          dmso_d6: 1.68,
          acetonitrile_d3: 1.7,
          methanol_d4: 1.7,
          water_d2: 1.7,
        },
      },
      {
        proton: {
          formula: (
            <span>
              C<b>H</b>H
            </span>
          ),
          multiplicity: "m",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 4.94,
          benzene_d6: 4.95,
          acetone_d6: 4.9,
          dmso_d6: 4.94,
          acetonitrile_d3: 4.93,
          methanol_d4: 4.91,
          water_d2: 4.95,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<b>H</b>
            </span>
          ),
          multiplicity: "m",
          amount: 1,
        },
        chemShifts: {
          chloroform_d: 5.03,
          benzene_d6: 5.01,
          acetone_d6: 5.0,
          dmso_d6: 5.03,
          acetonitrile_d3: 5.04,
          methanol_d4: 5.01,
          water_d2: 5.06,
        },
      },
      {
        proton: { formula: "CH", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: 5.83,
          benzene_d6: 5.72,
          acetone_d6: 5.81,
          dmso_d6: 5.8,
          acetonitrile_d3: 5.85,
          methanol_d4: 5.82,
          water_d2: 5.9,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Pyridine",
    trivialNames: "Azabenzene Azine",
    smiles: "c1ccncc1",
    molWeight: 79.1,
    signals: [
      {
        proton: { formula: "CH (2)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: 8.62,
          acetone_d6: 8.58,
          dmso_d6: 8.58,
          benzene_d6: 8.53,
          acetonitrile_d3: 8.57,
          methanol_d4: 8.53,
          water_d2: 8.52,
        },
      },
      {
        proton: { formula: "CH (3)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: 7.29,
          acetone_d6: 7.35,
          dmso_d6: 7.39,
          benzene_d6: 6.66,
          acetonitrile_d3: 7.33,
          methanol_d4: 7.44,
          water_d2: 7.45,
        },
      },
      {
        proton: { formula: "CH (4)", multiplicity: "m", amount: 1 },
        chemShifts: {
          chloroform_d: 7.68,
          acetone_d6: 7.76,
          dmso_d6: 7.79,
          benzene_d6: 6.98,
          acetonitrile_d3: 7.73,
          methanol_d4: 7.85,
          water_d2: 7.87,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Pyrrole",
    trivialNames: "Azole Imidole",
    smiles: "[nH]1cccc1",
    molWeight: 67.09,
    signals: [
      {
        proton: { formula: "NH", multiplicity: "t", amount: 1 },
        chemShifts: {
          chloroform_d: 8.4,
          acetone_d6: 10.02,
          dmso_d6: 10.75,
          benzene_d6: 7.8,
          acetonitrile_d3: 9.27,
          methanol_d4: null,
          water_d2: null,
        },
      },
      {
        proton: { formula: "CH (2,5)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: 6.83,
          acetone_d6: 6.77,
          dmso_d6: 6.73,
          benzene_d6: 6.48,
          acetonitrile_d3: 6.75,
          methanol_d4: 6.72,
          water_d2: 6.93,
        },
      },
      {
        proton: { formula: "CH (3,4)", multiplicity: "m", amount: 2 },
        chemShifts: {
          chloroform_d: 6.26,
          acetone_d6: 6.07,
          dmso_d6: 6.01,
          benzene_d6: 6.37,
          acetonitrile_d3: 6.1,
          methanol_d4: 6.08,
          water_d2: 6.26,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Pyrrolidine",
    trivialNames: "Tetrahydropyrrole Azolidine Prolamine",
    smiles: "C1CCNC1",
    molWeight: 71.12,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub> (2,5)
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 2.87,
          acetone_d6: null,
          dmso_d6: 2.67,
          benzene_d6: 2.54,
          acetonitrile_d3: 2.75,
          methanol_d4: 2.8,
          water_d2: 3.07,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub> (3,4)
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 1.68,
          acetone_d6: null,
          dmso_d6: 1.55,
          benzene_d6: 1.33,
          acetonitrile_d3: 1.61,
          methanol_d4: 1.72,
          water_d2: 1.87,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Sulfolane",
    trivialNames: "Tetramethylene sulfone",
    smiles: "C1CCS(=O)(=O)C1",
    molWeight: 120.17,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>SO<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: { highShift: 3.05, lowShift: 3.02 },
          acetone_d6: { highShift: 2.97, lowShift: 2.93 },
          dmso_d6: { highShift: 3.01, lowShift: 2.97 },
          acetonitrile_d3: { highShift: 2.96, lowShift: 2.92 },
          methanol_d4: { highShift: 3.03, lowShift: 2.99 },
          water_d2: { highShift: 3.19, lowShift: 3.15 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: { highShift: 2.25, lowShift: 2.21 },
          acetone_d6: { highShift: 2.21, lowShift: 2.17 },
          dmso_d6: { highShift: 2.09, lowShift: 2.05 },
          acetonitrile_d3: { highShift: 2.16, lowShift: 2.12 },
          methanol_d4: { highShift: 2.21, lowShift: 2.18 },
          water_d2: { highShift: 2.26, lowShift: 2.22 },
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Tetrahydrofuran",
    trivialNames: "THF Oxolane",
    smiles: "O1CCCC1",
    molWeight: 72.11,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 1.85,
          acetone_d6: 1.79,
          dmso_d6: 1.76,
          benzene_d6: 1.4,
          acetonitrile_d3: 1.8,
          methanol_d4: 1.87,
          water_d2: 1.88,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>O
            </span>
          ),
          multiplicity: "m",
          amount: 4,
        },
        chemShifts: {
          chloroform_d: 3.76,
          acetone_d6: 3.63,
          dmso_d6: 3.6,
          benzene_d6: 3.57,
          acetonitrile_d3: 3.64,
          methanol_d4: 3.71,
          water_d2: 3.74,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Toluene",
    trivialNames: "MeBn toluol methylbenzene",
    smiles: "c1ccccc1C",
    molWeight: 92.14,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 2.36,
          acetone_d6: 2.32,
          dmso_d6: 2.3,
          benzene_d6: 2.11,
          acetonitrile_d3: 2.33,
          methanol_d4: 2.32,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: "CH (2,4,6)",
          multiplicity: "m",
          amount: 3,
        },
        chemShifts: {
          chloroform_d: 7.17,
          acetone_d6: { lowShift: 7.1, highShift: 7.2 },
          dmso_d6: 7.18,
          benzene_d6: 7.02,
          acetonitrile_d3: { lowShift: 7.1, highShift: 7.3 },
          methanol_d4: 7.16,
          water_d2: null,
        },
      },
      {
        proton: {
          formula: "CH (3,5)",
          multiplicity: "m",
          amount: 2,
        },
        chemShifts: {
          chloroform_d: 7.25,
          acetone_d6: { lowShift: 7.1, highShift: 7.2 },
          dmso_d6: 7.25,
          benzene_d6: 7.13,
          acetonitrile_d3: { lowShift: 7.1, highShift: 7.3 },
          methanol_d4: 7.16,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "Triethylamine",
    trivialNames: "TEA",
    smiles: "CCN(CC)CC",
    molWeight: 101.19,
    signals: [
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "t",
          amount: 9,
        },
        chemShifts: {
          chloroform_d: 1.03,
          acetone_d6: 0.96,
          dmso_d6: 0.93,
          benzene_d6: 0.96,
          acetonitrile_d3: 0.96,
          methanol_d4: 1.05,
          water_d2: 0.99,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>2</sub>
            </span>
          ),
          multiplicity: "q",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.53,
          acetone_d6: 2.45,
          dmso_d6: 2.43,
          benzene_d6: 2.4,
          acetonitrile_d3: 2.45,
          methanol_d4: 2.58,
          water_d2: 2.57,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,2-Xylene",
    trivialNames: "",
    smiles: "Cc1c(C)cccc1",
    molWeight: 106.17,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "m", amount: 4 },
        chemShifts: {
          chloroform_d: { highShift: 7.14, lowShift: 7.08 },
          acetone_d6: { highShift: 7.12, lowShift: 7.03 },
          dmso_d6: { highShift: 7.14, lowShift: 7.04 },
          acetonitrile_d3: { highShift: 7.15, lowShift: 7.05 },
          methanol_d4: { highShift: 7.1, lowShift: 7.01 },
          water_d2: null,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.26,
          acetone_d6: 2.23,
          dmso_d6: 2.21,
          acetonitrile_d3: 2.25,
          methanol_d4: 2.24,
          water_d2: null,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,3-Xylene",
    trivialNames: "",
    smiles: "Cc1cc(C)ccc1",

    molWeight: 106.17,
    signals: [
      {
        proton: { formula: "CH (5)", multiplicity: "t", amount: 1 },
        chemShifts: {
          chloroform_d: 7.15,
          acetone_d6: 7.11,
          dmso_d6: 7.13,
          acetonitrile_d3: 7.13,
          methanol_d4: 7.08,
          water_d2: 7.24,
        },
      },
      {
        proton: { formula: "CH (2,4,6)", multiplicity: "m", amount: 3 },
        chemShifts: {
          chloroform_d: { highShift: 7.0, lowShift: 6.96 },
          acetone_d6: { highShift: 6.99, lowShift: 6.94 },
          dmso_d6: { highShift: 6.99, lowShift: 6.95 },
          acetonitrile_d3: { highShift: 7.01, lowShift: 6.96 },
          methanol_d4: { highShift: 6.97, lowShift: 6.92 },
          water_d2: { highShift: 7.14, lowShift: 7.07 },
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.32,
          acetone_d6: 2.27,
          dmso_d6: 2.26,
          acetonitrile_d3: 2.28,
          methanol_d4: 2.27,
          water_d2: 2.31,
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    compound: "1,4-Xylene",
    trivialNames: "",
    smiles: "Cc1ccc(C)cc1",
    molWeight: 106.17,
    signals: [
      {
        proton: { formula: "CH", multiplicity: "s", amount: 4 },
        chemShifts: {
          chloroform_d: 7.06,
          acetone_d6: 7.05,
          dmso_d6: 7.05,
          acetonitrile_d3: 7.06,
          methanol_d4: 7.02,
          water_d2: 7.18,
        },
      },
      {
        proton: {
          formula: (
            <span>
              CH<sub>3</sub>
            </span>
          ),
          multiplicity: "s",
          amount: 6,
        },
        chemShifts: {
          chloroform_d: 2.31,
          acetone_d6: 2.26,
          dmso_d6: 2.24,
          acetonitrile_d3: 2.27,
          methanol_d4: 2.26,
          water_d2: 2.3,
        },
      },
    ],
  },
];

// {
//   id: crypto.randomUUID(),
//   compound: '',
//   trivialNames: '' ,
//   molWeight: ,
//   signals: [
//     {
//       proton: { formula: <span><sub></sub></span>, multiplicity: , amount:  },
//       chemShifts: {
//         chloroform_d: ,
//         acetone_d6: ,
//         dmso_d6: ,
//         benzene_d6
//         acetonitrile_d3: ,
//         methanol_d4: ,
//         water_d2: ,
//       },
//     },
//   ],
// },
