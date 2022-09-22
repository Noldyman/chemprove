import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { H_NMR_COMMON_RESIDUES as commonResidues } from "../../data/H_NMR_COMMON_RESIDUES";
import _ from "lodash";
import { useState } from "react";

type Solvents = "chloroform_d";

export const CommonResidues = () => {
  const [selectedSolvent, setSelectedSolvent] =
    useState<Solvents>("chloroform_d");

  const columns = [
    { label: "Residue" },
    { label: "Proton" },
    { label: "Multiplicity" },
    { label: "# protons" },
    { label: "Chemical shift (PPM)" },
  ];

  return (
    <TableContainer
      elevation={2}
      component={Paper}
      style={{ maxHeight: "500px" }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell>{c.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {commonResidues.map((r) => (
            <TableRow hover>
              <TableCell>{r.compound}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {r.signals.map((s) =>
                    typeof s.proton.formula === "string" ? (
                      <span>{s.proton.formula}</span>
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
                  {r.signals.map((s) => (
                    <span>
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
                  {r.signals.map((s) => (
                    <span>
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
                  {r.signals.map((s) => {
                    const chemShift = s.chemShifts[selectedSolvent];
                    if (typeof chemShift === "object") {
                      return (
                        <span>
                          <sub></sub>
                          {chemShift?.highShift} - {chemShift?.lowShift}
                        </span>
                      );
                    }
                    return (
                      <span>
                        <sub></sub>
                        {chemShift}
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
