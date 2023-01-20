import { atom } from "recoil";
import { IGenerealSettings } from "../models/general";
import { localStorageEffect } from "./localStorageEffect";

export const generealSettingsState = atom({
  key: "GeneralSettings",
  default: {
    convQuantity: "mass",
    concCalcParameter: "concentration",
    notation: "numeric",
    numOfDecimals: 1,
  } as IGenerealSettings,
  effects: [localStorageEffect("generalSettings")],
});
