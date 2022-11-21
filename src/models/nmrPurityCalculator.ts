export interface IImpurity {
  name: string;
  molWeight: string;
  numOfProtons: string;
  integral: string;
  molPercent: string;
  weightPercent: string;
}

export interface INmrPurityCalculatorState {
  product: { molWeight: string; molPercent: string; weightPercent: string };
  impurities: IImpurity[];
}
