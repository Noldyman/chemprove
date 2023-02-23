import { useRecoilValue } from "recoil";
import { nmrSolventState } from "../../../services/nmrSolvent";
import { useSetRecoilState } from "recoil";
import { nmrPurityCalculatorState } from "../../../services/nmrPurityCalculator";
import { produce } from "immer";
import { H_NMR_COMMON_RESIDUES as commonResidues } from "../../../data/H_NMR_COMMON_RESIDUES";
import {
  ChemShift,
  ICommonResidue,
  ISignalObj,
} from "../../../models/nmrCommonResidues";
import _ from "lodash";
import {
  useTheme,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { useState } from "react";
import { SelectSignalDialog } from "../purityCalculator/SelectSignalDialog";
import { notificationState } from "../../../services/notifications";

interface IFilters {
  residueName: string;
  chemicalShift: string;
  deviation: string;
  multiplicity: string;
}

interface Props {
  filters: IFilters;
  openResidueDetails: (residue: ICommonResidue) => void;
}

const columns = [
  { label: "Residue", key: "residue" },
  { label: "Proton", key: "proton" },
  { label: "Multiplicity", key: "multiplicity" },
  { label: "# protons", key: "#protons" },
  { label: "Chemical shift (PPM)", key: "chemShift" },
  { label: "", key: "addToCalulator" },
];

export const CommonResidueTable = ({ filters, openResidueDetails }: Props) => {
  const theme = useTheme();
  const selectedSolvent = useRecoilValue(nmrSolventState);
  const setCalculatorState = useSetRecoilState(nmrPurityCalculatorState);
  const [selectSignalResidue, setSelectSignalResidue] = useState<
    ICommonResidue | undefined
  >();
  const setNotification = useSetRecoilState(notificationState);

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

  const addResidueToCalculator = async (residue: ICommonResidue) => {
    if (residue.signals.length === 1) {
      await setCalculatorState((baseState) =>
        produce(baseState, (draftState) => {
          const oldImpurities = baseState.impurities;
          if (
            oldImpurities.length === 1 &&
            oldImpurities[0].name === "" &&
            oldImpurities[0].molWeight === "" &&
            oldImpurities[0].numOfProtons === "1" &&
            oldImpurities[0].integral === "" &&
            oldImpurities[0].molPercent === "" &&
            oldImpurities[0].weightPercent === ""
          ) {
            draftState.impurities = [];
          }

          draftState.impurities.push({
            name: residue.compound,
            molWeight: residue.molWeight?.toString() || "",
            numOfProtons: residue.signals[0].proton.amount?.toString() || "",
            integral: "",
            molPercent: "",
            weightPercent: "",
          });
        })
      );
      setNotification({
        isShown: true,
        message: `${residue.compound} has been added to the purity calculator`,
        severity: "success",
      });
    } else {
      setSelectSignalResidue(residue);
    }
  };

  return (
    <>
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
                  key={c.key}
                  style={{ boxShadow: `0px 1px ${theme.palette.divider}` }}
                >
                  <b>{c.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterCommonResidues().map((r, i) => (
              <TableRow
                key={"tableRow" + i}
                style={{ cursor: r.smiles ? "pointer" : "" }}
                hover
              >
                <TableCell
                  onClick={() => {
                    if (r.smiles) openResidueDetails(r);
                  }}
                >
                  {r.compound}
                </TableCell>
                <TableCell
                  onClick={() => {
                    if (r.smiles) openResidueDetails(r);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {r.signals.map((s, i) =>
                      typeof s.proton.formula === "string" ? (
                        <span key={"string" + i}>{s.proton.formula}</span>
                      ) : (
                        <span key={"obj" + i}>{s.proton.formula}</span>
                      )
                    )}
                  </div>
                </TableCell>
                <TableCell
                  onClick={() => {
                    if (r.smiles) openResidueDetails(r);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {r.signals.map((s, i) => (
                      <span key={"multiplicity" + i}>
                        <sub></sub>
                        {s.proton.multiplicity}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell
                  onClick={() => {
                    if (r.smiles) openResidueDetails(r);
                  }}
                >
                  <div
                    key={r.id + "numOfProtons"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {r.signals.map((s, i) => (
                      <span key={"#protons" + i}>
                        <sub></sub>
                        {s.proton.amount}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell
                  onClick={() => {
                    if (r.smiles) openResidueDetails(r);
                  }}
                >
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
                      if (!chemShift) return <span key={"null" + i}>-</span>;
                      if (typeof chemShift === "object") {
                        return (
                          <span key={"chemShiftObj" + i}>
                            <sub></sub>
                            {shiftIsFilterHit ? (
                              <b
                                style={{ color: theme.palette.secondary.main }}
                              >
                                {chemShift?.highShift.toFixed(2)} -{" "}
                                {chemShift?.lowShift.toFixed(2)}
                              </b>
                            ) : (
                              `${chemShift?.highShift.toFixed(
                                2
                              )} - ${chemShift?.lowShift.toFixed(2)}`
                            )}
                          </span>
                        );
                      }
                      return (
                        <span key={"chemShiftString" + i}>
                          <sub></sub>
                          {shiftIsFilterHit ? (
                            <b style={{ color: theme.palette.secondary.main }}>
                              {chemShift.toFixed(2)}
                            </b>
                          ) : (
                            chemShift.toFixed(2)
                          )}
                        </span>
                      );
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  {i !== 0 && (
                    <Tooltip
                      title={`Add ${r.compound.toLowerCase()} to purity calculator`}
                      enterDelay={500}
                      followCursor
                    >
                      <IconButton onClick={() => addResidueToCalculator(r)}>
                        <PlaylistAdd />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectSignalResidue && (
        <SelectSignalDialog
          open={true}
          residue={selectSignalResidue}
          onClose={() => setSelectSignalResidue(undefined)}
        />
      )}
    </>
  );
};
