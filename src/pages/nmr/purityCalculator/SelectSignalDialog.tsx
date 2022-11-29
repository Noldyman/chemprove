import { ChangeEvent } from "react";
import {
  ICommonResidue,
  NmrSolvent,
  ISignalObj,
} from "../../../models/nmrCommonResidues";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nmrSolventState } from "../../../services/nmrSolvent";
import { nmrPurityCalculatorState } from "../../../services/nmrPurityCalculator";
import { notificationState } from "../../../services/notifications";
import { produce } from "immer";
import { nmrSolvents } from "../commonResidues/CommonResidues";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  residue: ICommonResidue;
  impurityIndex?: number;
}

export const SelectSignalDialog = ({
  open,
  onClose,
  residue,
  impurityIndex,
}: Props) => {
  const theme = useTheme();
  const [selectedSolvent, setSelectedSolvent] = useRecoilState(nmrSolventState);
  const setCalculatorState = useSetRecoilState(nmrPurityCalculatorState);
  const setNotification = useSetRecoilState(notificationState);

  const columns = [
    { label: "Proton", key: "proton" },
    { label: "Multiplicity", key: "multiplicity" },
    { label: "# protons", key: "numOfProtons" },
    { label: "Chem. shift", key: "chemShift" },
  ];

  const changeSolvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedSolvent(e.target.value as NmrSolvent);
  };

  const renderChemShifts = (signal: ISignalObj) => {
    const chemShift = signal.chemShifts[selectedSolvent];
    if (chemShift) {
      if (typeof chemShift === "object") {
        return `${chemShift.highShift.toFixed(
          2
        )} - ${chemShift.lowShift.toFixed(2)}`;
      }
      return chemShift.toFixed(2);
    }
    return null;
  };

  const selectSignal = async (signalIndex: number) => {
    if (typeof impurityIndex !== "number") {
      await setCalculatorState((baseState) =>
        produce(baseState, (draftState) => {
          draftState.impurities.push({
            name: residue.compound,
            molWeight: residue.molWeight?.toString() || "",
            numOfProtons:
              residue.signals[signalIndex].proton.amount?.toString() || "",
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
      setCalculatorState((baseState) =>
        produce(baseState, (draftState) => {
          draftState.impurities[impurityIndex] = {
            name: residue.compound,
            molWeight: residue.molWeight?.toString() || "",
            numOfProtons:
              residue.signals[signalIndex].proton.amount?.toString() || "",
            integral: baseState.impurities[impurityIndex].integral,
            molPercent: "",
            weightPercent: "",
          };
        })
      );
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{residue.compound}</DialogTitle>
      <Divider />
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography>
            Select the signal that you would like to use in the purity
            calculator.
          </Typography>
          <TextField
            style={{ width: "250px" }}
            select
            label="Solvent"
            size="small"
            value={selectedSolvent}
            onChange={changeSolvent}
          >
            {nmrSolvents.map((s) => (
              <MenuItem value={s.value} key={s.value}>
                {s.label}
              </MenuItem>
            ))}
          </TextField>
          <TableContainer
            style={{
              maxHeight: "500px",
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "5px",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow
                  style={{ boxShadow: `0px 1px ${theme.palette.divider}` }}
                >
                  {columns.map((c) => (
                    <TableCell key={c.key}>
                      <b>{c.label}</b>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {residue.signals.map((s, i) => (
                  <TableRow
                    key={"row" + i}
                    hover
                    style={{ cursor: "pointer" }}
                    onClick={() => selectSignal(i)}
                  >
                    <TableCell key={"proton" + i}>{s.proton.formula}</TableCell>
                    <TableCell key={"multiplicity" + i}>
                      {s.proton.multiplicity}
                    </TableCell>
                    <TableCell key={"#protons" + i}>
                      {s.proton.amount}
                    </TableCell>
                    <TableCell key={"chemSHift" + i}>
                      {renderChemShifts(s)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
