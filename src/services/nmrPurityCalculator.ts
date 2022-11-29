import { atom } from "recoil";
import { INmrPurityCalculatorState } from "../models/nmrPurityCalculator";

export const nmrPurityCalculatorState = atom({
  key: "NmrPurityCalculator",
  default: {
    product: { molWeight: "", molPercent: "", weightPercent: "" },
    impurities: [
      {
        name: "",
        molWeight: "",
        numOfProtons: "1",
        integral: "",
        molPercent: "",
        weightPercent: "",
      },
    ],
  } as INmrPurityCalculatorState,
});
