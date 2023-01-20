export type UnitConverterQuantity =
  | "mass"
  | "temperature"
  | "pressure"
  | "volume";
export type ConcentrationCalculatorParameter =
  | "concentration"
  | "volume"
  | "mass";
export type Notation = "numeric" | "scientific";

export interface IGenerealSettings {
  convQuantity: UnitConverterQuantity;
  concCalcParameter: ConcentrationCalculatorParameter;
  notation: Notation;
  numOfDecimals: number;
}
