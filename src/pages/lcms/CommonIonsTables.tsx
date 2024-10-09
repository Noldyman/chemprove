import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { ReactElement } from "react";

interface IIons {
  adduct: ReactElement;
  buildUp: string;
  mz: (exactMass: number) => number;
}

interface Props {
  exactMass: number;
  observedMz: number;
  deviation: number;
}

export const CommonIonsTables = ({ exactMass, observedMz, deviation }: Props) => {
  const theme = useTheme();

  const columns = [
    { label: "Ion", key: "ion" },
    { label: "Mass build-up", key: "massAddition" },
    { label: "m/z", key: "mz" },
  ];

  const positiveIons: IIons[] = [
    {
      adduct: (
        <span>
          [M+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 1",
      mz: (exactMass) => exactMass + 1,
    },
    {
      adduct: (
        <span>
          [2M+H]<sup>+</sup>
        </span>
      ),
      buildUp: "2M + 1",
      mz: (exactMass) => 2 * exactMass + 1,
    },
    {
      adduct: (
        <span>
          [M+NH4]<sup>+</sup>
        </span>
      ),

      buildUp: "M + 18",
      mz: (exactMass) => exactMass + 18,
    },
    {
      adduct: (
        <span>
          [M+H3O]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 19",
      mz: (exactMass) => exactMass + 19,
    },
    {
      adduct: (
        <span>
          [M+Na]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 23",
      mz: (exactMass) => exactMass + 23,
    },
    {
      adduct: (
        <span>
          [M+CH3OH+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 33",
      mz: (exactMass) => exactMass + 33,
    },
    {
      adduct: (
        <span>
          [M+K]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 39",
      mz: (exactMass) => exactMass + 39,
    },
    {
      adduct: (
        <span>
          [M+CH3CN+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 42",
      mz: (exactMass) => exactMass + 42,
    },
    {
      adduct: (
        <span>
          [M+HCOOH+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 47",
      mz: (exactMass) => exactMass + 47,
    },
    {
      adduct: (
        <span>
          [M+CH<sub>3</sub>CN+NH<sub>4</sub>]<sup>+</sup>
        </span>
      ),
      buildUp: "M + 59",
      mz: (exactMass) => exactMass + 59,
    },
    {
      adduct: (
        <span>
          [2M+Na]<sup>+</sup>
        </span>
      ),
      buildUp: "2M + 23",
      mz: (exactMass) => exactMass * 2 + 23,
    },
    {
      adduct: (
        <span>
          Boc moiety: [M-Boc+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M - 99",
      mz: (exactMass) => exactMass - 99,
    },
    {
      adduct: (
        <span>
          Boc moiety: [M-<i>t</i>Bu+H]<sup>+</sup>
        </span>
      ),
      buildUp: "M - 55",
      mz: (exactMass) => exactMass - 55,
    },
    {
      adduct: (
        <span>
          [M+2H]<sup>2+</sup>
        </span>
      ),
      buildUp: "(M + 2) / 2",
      mz: (exactMass) => (exactMass + 2) / 2,
    },
    {
      adduct: (
        <span>
          [M+2H+H<sub>2</sub>O]<sup>2+</sup>
        </span>
      ),
      buildUp: "(M + 20) / 2",
      mz: (exactMass) => (exactMass + 20) / 2,
    },
    {
      adduct: (
        <span>
          [M+H+Na+H<sub>2</sub>O]<sup>2+</sup>
        </span>
      ),
      buildUp: "(M + 42) / 2",
      mz: (exactMass) => (exactMass + 42) / 2,
    },
    {
      adduct: (
        <span>
          [M+3H+H<sub>2</sub>O]<sup>3+</sup>
        </span>
      ),
      buildUp: "(M + 21) / 3",
      mz: (exactMass) => (exactMass + 21) / 3,
    },
    {
      adduct: (
        <span>
          [M+2H+Na]<sup>3+</sup>
        </span>
      ),
      buildUp: "(M + 25) / 3",
      mz: (exactMass) => (exactMass + 25) / 3,
    },
    {
      adduct: (
        <span>
          [M+3H+2H<sub>2</sub>O]<sup>3+</sup>
        </span>
      ),
      buildUp: "(M + 39) / 3",
      mz: (exactMass) => (exactMass + 39) / 3,
    },
  ];

  const negativeIons: IIons[] = [
    {
      adduct: (
        <span>
          [M-H]<sup>-</sup>
        </span>
      ),
      buildUp: "M - 1",
      mz: (exactMass) => exactMass - 1,
    },
    {
      adduct: (
        <span>
          [M+Cl]<sup>-</sup>
        </span>
      ),
      buildUp: "M + 35",
      mz: (exactMass) => exactMass + 35,
    },
    {
      adduct: (
        <span>
          [M+HCOO]<sup>-</sup>
        </span>
      ),
      buildUp: "M + 45",
      mz: (exactMass) => exactMass + 45,
    },
    {
      adduct: (
        <span>
          [M+OAc]<sup>-</sup>
        </span>
      ),
      buildUp: "M + 59",
      mz: (exactMass) => exactMass + 59,
    },
    {
      adduct: (
        <span>
          Boc moiety: [M-Boc-H]<sup>-</sup>
        </span>
      ),
      buildUp: "M - 101",
      mz: (exactMass) => exactMass - 101,
    },
    {
      adduct: (
        <span>
          Boc moiety: [M-<i>t</i>Bu-H]<sup>-</sup>
        </span>
      ),
      buildUp: "M - 57",
      mz: (exactMass) => exactMass - 57,
    },
  ];

  const displayMz = (mz: number) => {
    if (!mz) return "-";
    let value = mz.toString();
    if (mz % 1 !== 0) {
      value = mz.toFixed(1);
    }

    if (mz >= observedMz - deviation && mz <= observedMz + deviation) {
      return <b style={{ color: theme.palette.secondary.main }}>{value}</b>;
    }
    return value;
  };

  const createTable = (title: string, ions: IIons[]) => (
    <TableContainer
      style={{
        height: "fit-content",
        maxHeight: "500px",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "5px",
      }}
    >
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell key="positiveIons" colSpan={3} style={{ borderBottom: `0px` }}>
              <b style={{ fontSize: "16px" }}>{title}</b>
            </TableCell>
          </TableRow>
          <TableRow>
            {columns.map((c) => (
              <TableCell key={c.key} style={{ boxShadow: `0px 1px ${theme.palette.divider}` }}>
                <b>{c.label}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {ions.map((ion, i) => (
            <TableRow key={i}>
              <TableCell key={"ion" + i}>{ion.adduct}</TableCell>
              <TableCell key={"buildup" + i}>{ion.buildUp}</TableCell>
              <TableCell key={"mz" + i}>{displayMz(ion.mz(exactMass))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {createTable("Positive ions", positiveIons)}
      {createTable("Negative ions", negativeIons)}
    </div>
  );
};
