import { atom } from "recoil";
import { IUnitConverterSettings } from "../models/unitConverter";
import { localStorageEffect } from "./localStorageEffect";

export const unitConverterSettingsState = atom({
  key: "UnitConverterSettings",
  default: {
    quantity: "mass",
    notation: "numeric",
    numOfDecimals: 1,
  } as IUnitConverterSettings,
  effects: [localStorageEffect("unitConverterSettings")],
});
