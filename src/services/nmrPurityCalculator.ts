import { atom } from "recoil";
import { INmrPurityCalculatorState } from "../models/nmrPurityCalculator";

export const nmrPurityCalculatorState = atom({
  key: "NmrPurityCalculatorState",
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
