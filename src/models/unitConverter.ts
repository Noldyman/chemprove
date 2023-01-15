export type UnitConverterQuantity =
  | "mass"
  | "temperature"
  | "pressure"
  | "volume";
export type UnitConverterNotation = "numeric" | "scientific";

export interface IUnitConverterSettings {
  quantity: UnitConverterQuantity;
  notation: UnitConverterNotation;
  numOfDecimals: number;
}
