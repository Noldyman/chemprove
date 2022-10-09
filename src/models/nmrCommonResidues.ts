export type NmrSolvent =
  | "chloroform_d"
  | "acetone_d6"
  | "dmso_d6"
  | "benzene_d6"
  | "acetonitrile_d3"
  | "methanol_d4"
  | "water_d2";

export type ChemShift = number | { lowShift: number; highShift: number } | null;

type Multiplicities =
  | "s"
  | "d"
  | "dd"
  | "t"
  | "q"
  | "sept"
  | "nonet"
  | "m"
  | null;

export interface ISignalObj {
  proton: {
    formula: any;
    multiplicity: Multiplicities;
    amount: number | null;
  };
  chemShifts: {
    chloroform_d?: ChemShift;
    acetone_d6?: ChemShift;
    dmso_d6?: ChemShift;
    benzene_d6?: ChemShift;
    acetonitrile_d3?: ChemShift;
    methanol_d4?: ChemShift;
    water_d2?: ChemShift;
  };
}

export interface ICommonResidue {
  id: string;
  compound: string;
  trivialNames: string;
  smiles?: string;
  molWeight: number | null;
  signals: ISignalObj[];
}

export interface ISource {
  label: string;
  url: string;
  dateAccessed?: string;
}
