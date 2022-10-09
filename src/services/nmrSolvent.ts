import { atom } from "recoil";
import { localStorageEffect } from "./localStorageEffect";
import { NmrSolvent } from "../models/nmrCommonResidues";

export const nmrSolventState = atom({
  key: "NmrSolvent",
  default: "chloroform_d" as NmrSolvent,
  effects: [localStorageEffect("nmrSolvent")],
});
