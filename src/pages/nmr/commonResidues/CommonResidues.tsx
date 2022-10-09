import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { nmrSolventState } from "../../../services/nmrSolvent";
import { NmrSolvent } from "../../../models/nmrCommonResidues";
import {
  useTheme,
  TextField,
  MenuItem,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import { CommonResidueTable } from "./CommonResidueTable";

export const nmrSolvents: { label: string; value: NmrSolvent }[] = [
  { label: "Chloroform d", value: "chloroform_d" },
  { label: "Acetone d6", value: "acetone_d6" },
  { label: "DMSO d6", value: "dmso_d6" },
  { label: "Benzene d6", value: "benzene_d6" },
  { label: "Acetonitrile d3", value: "acetonitrile_d3" },
  { label: "Methanol d4", value: "methanol_d4" },
  { label: "Water d2", value: "water_d2" },
];

const multiplicities = ["s", "d", "dd", "t", "q", "sept", "nonet", "m"];

const initialFilters = {
  residueName: "",
  chemicalShift: "",
  deviation: "",
  multiplicity: "",
};

export const CommonResidues = () => {
  const theme = useTheme();
  const [selectedSolvent, setSelectedSolvent] = useRecoilState(nmrSolventState);
  const [filters, setFilters] = useState(initialFilters);

  const handleSolventChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedSolvent(e.target.value as NmrSolvent);
  };

  const handleFilterChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const target = e.target.name;
    let value = e.target.value;

    if (target === "chemicalShift" || target === "deviation") {
      value = value.replace(",", ".");
      if (value.match(/[^0-9.]/g)) return;
      if (value.match(/[.]/g) && value.match(/[.]/g)!.length > 1) return;
    }

    if (target === "chemicalShift" && !filters.deviation) {
      setFilters((prevValue) => ({
        ...prevValue,
        chemicalShift: value,
        deviation: "0.1",
      }));
    } else {
      setFilters((prevValue) => ({ ...prevValue, [target]: value }));
    }
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Common residues in standard NMR solvents
      </Typography>
      <Divider />
      <Typography style={{ margin: "20px 0px" }} align={"center"}>
        This table shows the chemical shifts of common residual solvents and
        residues in <sup>1</sup>H NMR spectroscopy. The table can be used to
        identify your residues.
      </Typography>
      <fieldset
        style={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "5px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <legend style={{ margin: "auto" }}>
          <b> Filters</b>
        </legend>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5x",
          }}
        >
          <TextField
            style={{ width: "20%" }}
            label="Solvent"
            select
            size="small"
            value={selectedSolvent}
            onChange={handleSolventChange}
          >
            {nmrSolvents.map((s) => (
              <MenuItem value={s.value} key={s.value}>
                {s.label}
              </MenuItem>
            ))}
          </TextField>
          <Divider orientation="vertical" flexItem={true} />
          <TextField
            style={{ width: "35%" }}
            name="residueName"
            label="Residue name"
            size="small"
            inputProps={{ maxLength: 50 }}
            value={filters.residueName}
            onChange={handleFilterChange}
          />
          <Divider orientation="vertical" flexItem={true} />
          <TextField
            style={{ width: "13%" }}
            name="chemicalShift"
            label="Chem. shift"
            size="small"
            inputProps={{ maxLength: 6 }}
            value={filters.chemicalShift}
            onChange={handleFilterChange}
          />
          <TextField
            style={{ width: "13%" }}
            name="deviation"
            label="deviation"
            size="small"
            inputProps={{ maxLength: 6 }}
            value={filters.deviation}
            onChange={handleFilterChange}
          />
          <TextField
            style={{ width: "13%" }}
            name="multiplicity"
            label="Multiplicity"
            select
            size="small"
            value={filters.multiplicity}
            onChange={handleFilterChange}
          >
            <MenuItem value="" key="none">
              <em>none</em>
            </MenuItem>
            ,
            {multiplicities.map((m) => (
              <MenuItem value={m} key={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {Object.values(filters).some((f) => f) && (
          <Button
            style={{ margin: "auto", width: "40%" }}
            color="primary"
            startIcon={<HighlightOff />}
            variant="contained"
            size="small"
            onClick={clearFilters}
          >
            clear filters
          </Button>
        )}
      </fieldset>
      <CommonResidueTable filters={filters} />
    </>
  );
};
