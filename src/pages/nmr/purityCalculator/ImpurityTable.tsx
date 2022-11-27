import { useState, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { nmrPurityCalculatorState } from "../../../services/nmrPurityCalculator";
import { produce } from "immer";
import { H_NMR_COMMON_RESIDUES as commonResidues } from "../../../data/H_NMR_COMMON_RESIDUES";
import { ICommonResidue } from "../../../models/nmrCommonResidues";
import {
  useTheme,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { SelectSignalDialog } from "./SelectSignalDialog";

export const ImpurityTable = () => {
  const theme = useTheme();
  const [calculatorState, setCalculatorState] = useRecoilState(
    nmrPurityCalculatorState
  );
  const [selectSignalResidue, setSelectSignalResidue] = useState<
    ICommonResidue | undefined
  >();
  const [selectSignalResidueIndex, setSelectSignalResidueIndex] = useState<
    number | 0 | undefined
  >();

  const columns = [
    { label: "Impurity", key: "impurity" },
    { label: "Mol. weight (g/mol)", key: "molWeight" },
    { label: "Number of protons", key: "numOfProtons" },
    { label: "Integral", key: "integral" },
    { label: "mol%", key: "molPercent" },
    { label: "wt%", key: "weightPercent" },
  ];

  const changeImpurityName = (
    params: string | ICommonResidue | null,
    index: number
  ) => {
    if (!params) return;
    if (typeof params === "string") {
      setCalculatorState((baseState) =>
        produce(baseState, (draftState) => {
          draftState.impurities[index].name = params;
        })
      );
    } else {
      if (params.signals.length === 1) {
        setCalculatorState((baseState) =>
          produce(baseState, (draftState) => {
            draftState.impurities[index] = {
              name: params.compound,
              molWeight: params.molWeight?.toString() || "",
              numOfProtons: params.signals[0].proton.amount?.toString() || "",
              integral: "",
              molPercent: "",
              weightPercent: "",
            };
          })
        );
      } else {
        setSelectSignalResidue(params);
        setSelectSignalResidueIndex(index);
      }
    }
  };

  const closeSelectSignalDialog = () => {
    setSelectSignalResidue(undefined);
    setSelectSignalResidueIndex(undefined);
  };

  const changeImpurityInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const targetName = e.target.name as
      | "molWeight"
      | "numOfProtons"
      | "integral";
    let enteredValue = e.target.value;

    if (targetName === "numOfProtons") {
      if (enteredValue.match(/[^0-9]/g)) return;
    } else {
      enteredValue = enteredValue.replace(",", ".");
      if (enteredValue.match(/[^0-9.]/g)) return;
      if (enteredValue.match(/[.]/g) && enteredValue.match(/[.]/g)!.length > 1)
        return;
    }

    setCalculatorState((baseState) =>
      produce(baseState, (draftState) => {
        draftState.impurities[index][targetName] = enteredValue;
      })
    );
  };

  const deleteImpurity = (index: number) => {
    setCalculatorState((baseState) =>
      produce(baseState, (draftState) => {
        draftState.impurities.splice(index, 1);
      })
    );
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
            <TableRow style={{ boxShadow: `0px 1px ${theme.palette.divider}` }}>
              {columns.map((c) => (
                <TableCell key={c.key}>
                  <b>{c.label}</b>
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {calculatorState.impurities.map((impurity, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Autocomplete
                    style={{ width: "200px" }}
                    size="small"
                    autoHighlight
                    autoSelect
                    freeSolo
                    options={commonResidues.slice(1)}
                    getOptionLabel={(option) =>
                      typeof option === "string" ? option : option.compound
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Select/ name impurity"
                      />
                    )}
                    value={calculatorState.impurities[i].name}
                    onChange={(_, params) => changeImpurityName(params, i)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    name="molWeight"
                    placeholder="Mol. weight"
                    variant="standard"
                    value={impurity.molWeight}
                    onChange={(e) => changeImpurityInput(e, i)}
                    inputProps={{ maxLength: 10 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    name="numOfProtons"
                    placeholder="Number of protons"
                    variant="standard"
                    value={impurity.numOfProtons}
                    onChange={(e) => changeImpurityInput(e, i)}
                    inputProps={{ maxLength: 3 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    name="integral"
                    placeholder="Integral"
                    variant="standard"
                    value={impurity.integral}
                    onChange={(e) => changeImpurityInput(e, i)}
                    inputProps={{ maxLength: 10 }}
                  />
                </TableCell>
                <TableCell>
                  {!isNaN(parseFloat(impurity.molPercent))
                    ? parseFloat(impurity.molPercent).toFixed(2)
                    : "-"}
                </TableCell>
                <TableCell>
                  {!isNaN(parseFloat(impurity.weightPercent))
                    ? parseFloat(impurity.weightPercent).toFixed(2)
                    : "-"}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteImpurity(i)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectSignalResidue && selectSignalResidueIndex !== undefined && (
        <SelectSignalDialog
          open={true}
          onClose={closeSelectSignalDialog}
          residue={selectSignalResidue}
          impurityIndex={selectSignalResidueIndex}
        />
      )}
    </>
  );
};
