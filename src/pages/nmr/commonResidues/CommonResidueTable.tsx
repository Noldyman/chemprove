import { useRecoilValue } from "recoil";
import { nmrSolventState } from "../../../services/nmrSolvent";
import { H_NMR_COMMON_RESIDUES as commonResidues } from "../../../data/H_NMR_COMMON_RESIDUES";
import { ChemShift, ISignalObj } from "../../../models/nmrCommonResidues";
import _ from "lodash";
import {
  useTheme,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

interface IFilters {
  residueName: string;
  chemicalShift: string;
  deviation: string;
  multiplicity: string;
}

interface Props {
  filters: IFilters;
}

const columns = [
  { label: "Residue" },
  { label: "Proton" },
  { label: "Multiplicity" },
  { label: "# protons" },
  { label: "Chemical shift (PPM)" },
];

export const CommonResidueTable = ({ filters }: Props) => {
  const theme = useTheme();
  const selectedSolvent = useRecoilValue(nmrSolventState);

  const filterCommonResidues = () => {
    let data = _.tail(commonResidues);

    if (filters.residueName) {
      data = data.filter(
        (res) =>
          res.compound
            .toLocaleLowerCase()
            .includes(filters.residueName.toLocaleLowerCase()) ||
          res.trivialNames
            .toLocaleLowerCase()
            .includes(filters.residueName.toLocaleLowerCase())
      );
    } else if (filters.chemicalShift) {
      const matchingResidueId: string[] = [];
      const shift = parseFloat(filters.chemicalShift);
      const dev = parseFloat(filters.deviation) || 0;

      if (isNaN(shift)) return [commonResidues[0], ...data];

      if (filters.multiplicity) {
        data.forEach((res) => {
          res.signals.forEach((sig) => {
            const chemShiftAtSolvent = sig.chemShifts[selectedSolvent];
            if (typeof chemShiftAtSolvent === "object") {
              if (
                sig.proton.multiplicity === filters.multiplicity &&
                chemShiftAtSolvent &&
                chemShiftAtSolvent.highShift >= shift - dev &&
                chemShiftAtSolvent.lowShift <= shift + dev
              ) {
                matchingResidueId.push(res.id);
              }
            } else {
              if (
                sig.proton.multiplicity === filters.multiplicity &&
                chemShiftAtSolvent &&
                chemShiftAtSolvent >= shift - dev &&
                chemShiftAtSolvent <= shift + dev
              ) {
                matchingResidueId.push(res.id);
              }
            }
          });
        });
      } else {
        data.forEach((res) => {
          res.signals.forEach((sig) => {
            const chemShiftAtSolvent = sig.chemShifts[selectedSolvent];
            if (typeof chemShiftAtSolvent === "object") {
              if (
                chemShiftAtSolvent &&
                chemShiftAtSolvent.highShift >= shift - dev &&
                chemShiftAtSolvent.lowShift <= shift + dev
              ) {
                matchingResidueId.push(res.id);
              }
            } else {
              if (
                chemShiftAtSolvent &&
                chemShiftAtSolvent >= shift - dev &&
                chemShiftAtSolvent <= shift + dev
              ) {
                matchingResidueId.push(res.id);
              }
            }
          });
        });
      }
      data = data.filter((res) => matchingResidueId.includes(res.id));
    }
    return [commonResidues[0], ...data];
  };

  const checkIfChemShiftIsFilterHit = (
    signal: ISignalObj,
    currentValue: ChemShift | undefined
  ) => {
    if (!currentValue || !filters.chemicalShift) return;
    const filterShift = parseFloat(filters.chemicalShift);
    const filterDev = parseFloat(filters.deviation) || 0;

    if (filters.multiplicity) {
      if (typeof currentValue === "object") {
        if (
          signal.proton.multiplicity === filters.multiplicity &&
          currentValue &&
          currentValue.highShift >= filterShift - filterDev &&
          currentValue.lowShift <= filterShift + filterDev
        )
          return true;
      } else {
        if (
          signal.proton.multiplicity === filters.multiplicity &&
          currentValue &&
          currentValue >= filterShift - filterDev &&
          currentValue <= filterShift + filterDev
        )
          return true;
      }
    } else {
      if (typeof currentValue === "object") {
        if (
          currentValue &&
          currentValue.highShift >= filterShift - filterDev &&
          currentValue.lowShift <= filterShift + filterDev
        )
          return true;
      } else {
        if (
          currentValue &&
          currentValue >= filterShift - filterDev &&
          currentValue <= filterShift + filterDev
        )
          return true;
      }
    }
  };

  return (
    <TableContainer
      style={{
        maxHeight: "500px",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "5px",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell
                key={c.label}
                style={{ boxShadow: `0px 1px ${theme.palette.divider}` }}
              >
                <b>{c.label}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filterCommonResidues().map((r) => (
            <TableRow hover>
              <TableCell>{r.compound}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {r.signals.map((s, i) =>
                    typeof s.proton.formula === "string" ? (
                      <span key={"formula" + i}>{s.proton.formula}</span>
                    ) : (
                      s.proton.formula
                    )
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {r.signals.map((s, i) => (
                    <span key={"mult" + i}>
                      <sub></sub>
                      {s.proton.multiplicity}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {r.signals.map((s, i) => (
                    <span key={"amount" + i}>
                      <sub></sub>
                      {s.proton.amount}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {r.signals.map((s, i) => {
                    const chemShift = s.chemShifts[selectedSolvent];
                    const shiftIsFilterHit = checkIfChemShiftIsFilterHit(
                      s,
                      chemShift
                    );

                    if (typeof chemShift === "object") {
                      return (
                        <span key={"shift" + i}>
                          <sub></sub>
                          {shiftIsFilterHit ? (
                            <b style={{ color: theme.palette.secondary.main }}>
                              {chemShift?.highShift} - {chemShift?.lowShift}
                            </b>
                          ) : (
                            `${chemShift?.highShift} - ${chemShift?.lowShift}`
                          )}
                        </span>
                      );
                    }
                    return (
                      <span key={"shift" + i}>
                        <sub></sub>
                        {shiftIsFilterHit ? (
                          <b style={{ color: theme.palette.secondary.main }}>
                            {chemShift}
                          </b>
                        ) : (
                          chemShift
                        )}
                      </span>
                    );
                  })}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
