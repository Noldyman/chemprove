import { atom } from "recoil";
import { localStorageEffect } from "./localStorageEffect";

export type Theme = "light" | "system" | "dark";

export const selectedThemeState = atom({
  key: "SelectedTheme",
  default: "system" as Theme,
  effects: [localStorageEffect("selectedTheme")],
});
