import { useState, useEffect, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { unitsAndConversions } from "../../data/unitsAndConversions";
import { generealSettingsState } from "../../services/generalSettings";
import {
  Notation,
  ConcentrationCalculatorParameter,
} from "../../models/general";
import {
  useTheme,
  Typography,
  Divider,
  TextField,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Chip,
  InputAdornment,
} from "@mui/material";
import { RemoveCircle, AddCircle } from "@mui/icons-material";

export const ConcentrationCalculator = () => {
  const theme = useTheme();
  const [settings, setSettings] = useRecoilState(generealSettingsState);
  const [input, setInput] = useState({
    molWeight: "",
    massOfSolute: "",
    massOfSoluteUnit: "gram",
    volume: "",
    volumeUnit: "liter",
    concentration: "",
    concentrationUnit: "molar",
  });
  const [output, setOutput] = useState({ value: "-", unit: "" });

  useEffect(() => {
    switch (settings.concCalcParameter) {
      case "concentration":
        setOutput((prevValue) => ({ ...prevValue, unit: "molar" }));
        break;
      case "volume":
        setOutput((prevValue) => ({ ...prevValue, unit: "liter" }));
        break;
      case "mass":
        setOutput((prevValue) => ({ ...prevValue, unit: "gram" }));
        break;
    }
  }, [settings.concCalcParameter]);

  useEffect(() => {
    let outputBaseValue = 0;
    const massUnit = unitsAndConversions.mass.find(
      (m) => m.value === input.massOfSoluteUnit
    );
    const volumeUnit = unitsAndConversions.volume.find(
      (v) => v.value === input.volumeUnit
    );
    const concentrationUnit = unitsAndConversions.concentration.find(
      (c) => c.value === input.concentrationUnit
    );
    const molWeight = parseFloat(input.molWeight);
    const mass = massUnit?.convertToBase(parseFloat(input.massOfSolute));
    const volume = volumeUnit?.convertToBase(parseFloat(input.volume));
    const concentration = concentrationUnit?.convertToBase(
      parseFloat(input.concentration)
    );

    switch (settings.concCalcParameter) {
      case "concentration":
        if (!molWeight || !mass || !volume) {
          outputBaseValue = NaN;
        } else {
          outputBaseValue = mass / molWeight / volume;
        }
        break;
      case "volume":
        if (!molWeight || !mass || !concentration) {
          outputBaseValue = NaN;
        } else {
          outputBaseValue = mass / molWeight / concentration;
        }
        break;
      case "mass":
        if (!molWeight || !volume || !concentration) {
          outputBaseValue = NaN;
        } else {
          outputBaseValue = molWeight * volume * concentration;
        }
        break;
    }

    const outputUnit = unitsAndConversions[settings.concCalcParameter].find(
      (u) => u.value === output.unit
    );

    const newOutput = outputUnit?.convertFromBase(outputBaseValue);

    if (!newOutput || isNaN(newOutput)) {
      setOutput((prevValue) => ({ ...prevValue, value: "-" }));
    } else {
      const outputString =
        settings.notation === "numeric"
          ? newOutput.toFixed(settings.numOfDecimals)
          : newOutput.toExponential(settings.numOfDecimals);

      setOutput((prevValue) => ({ ...prevValue, value: outputString }));
    }
  }, [settings, input, output.unit]);

  const parameters: {
    label: string;
    value: ConcentrationCalculatorParameter;
  }[] = [
    { label: "Concentration", value: "concentration" },
    { label: "Volume", value: "volume" },
    { label: "Mass of solute", value: "mass" },
  ];

  const handleParameterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSettings((prevValue) => ({
      ...prevValue,
      concCalcParameter: e.target.value as ConcentrationCalculatorParameter,
    }));
  };

  const handleNotationChange = (_: any, newNotation: string) => {
    if (newNotation && newNotation !== settings.notation) {
      setSettings((prevValue) => ({
        ...prevValue,
        notation: newNotation as Notation,
      }));
    }
  };

  const handleAddDecimal = () => {
    if (settings.numOfDecimals >= 4) return;
    setSettings((prevValue) => ({
      ...prevValue,
      numOfDecimals: prevValue.numOfDecimals + 1,
    }));
  };

  const handleRemoveDecimal = () => {
    if (settings.numOfDecimals < 1) return;
    setSettings((prevValue) => ({
      ...prevValue,
      numOfDecimals: prevValue.numOfDecimals - 1,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    setInput((prevValue) => ({
      ...prevValue,
      [e.target.name]: value,
    }));
  };

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "outputUnit") {
      setOutput((prevValue) => ({ ...prevValue, unit: e.target.value }));
    }
    setInput((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Concentration calculator
      </Typography>
      <Divider />
      <Typography style={{ margin: "20px 0px" }} align={"center"}>
        This tool allows you to calculate molar concentration, mass of solute
        and volume of a chemical solution. Select the parameter you'd like to
        calculate.
      </Typography>
      <fieldset
        style={{
          margin: "auto auto 20px auto",
          width: "700px",
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "5px",
          gap: "10px",
        }}
      >
        <legend style={{ margin: "auto" }}>
          <b>Settings</b>
        </legend>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            style={{ width: "300px" }}
            name="parameter"
            label="Parameter"
            select
            size="small"
            value={settings.concCalcParameter}
            onChange={handleParameterChange}
          >
            {parameters.map((p) => (
              <MenuItem value={p.value} key={p.value}>
                {p.label}
              </MenuItem>
            ))}
          </TextField>
          <Divider orientation="vertical" flexItem={true} />
          <ToggleButtonGroup
            size="small"
            exclusive
            value={settings.notation}
            onChange={handleNotationChange}
          >
            <ToggleButton value="numeric">Numeric</ToggleButton>
            <ToggleButton value="scientific">Scientific</ToggleButton>
          </ToggleButtonGroup>

          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <IconButton
              disabled={settings.numOfDecimals < 1}
              size="small"
              color="primary"
              onClick={handleRemoveDecimal}
            >
              <RemoveCircle />
            </IconButton>
            <Chip label={`${settings.numOfDecimals} decimals`} />
            <IconButton
              size="small"
              color="primary"
              disabled={settings.numOfDecimals >= 4}
              onClick={handleAddDecimal}
            >
              <AddCircle />
            </IconButton>
          </div>
        </div>
      </fieldset>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ width: "410px" }}>
          <TextField
            style={{ width: "300px" }}
            name="molWeight"
            label="Molecular weight"
            size="small"
            value={input.molWeight}
            error={Boolean(
              input.molWeight && isNaN(parseFloat(input.molWeight))
            )}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">g/mol</InputAdornment>
              ),
            }}
          />
        </div>
        {settings.concCalcParameter !== "mass" && (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <TextField
              style={{ width: "300px" }}
              name="massOfSolute"
              label="Mass of solute"
              size="small"
              error={Boolean(
                input.massOfSolute && isNaN(parseFloat(input.massOfSolute))
              )}
              value={input.massOfSolute}
              onChange={handleInputChange}
            />
            <TextField
              select
              style={{ width: "100px" }}
              name="massOfSoluteUnit"
              label="Unit"
              size="small"
              value={input.massOfSoluteUnit}
              onChange={handleUnitChange}
            >
              {unitsAndConversions.mass.map((u) => (
                <MenuItem value={u.value} key={u.value} title={u.fullName}>
                  {u.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )}
        {settings.concCalcParameter !== "volume" && (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <TextField
              style={{ width: "300px" }}
              name="volume"
              label="Volume"
              size="small"
              error={Boolean(input.volume && isNaN(parseFloat(input.volume)))}
              value={input.volume}
              onChange={handleInputChange}
            />
            <TextField
              select
              style={{ width: "100px" }}
              name="volumeUnit"
              label="Unit"
              size="small"
              value={input.volumeUnit}
              onChange={handleUnitChange}
            >
              {unitsAndConversions.volume.map((u) => (
                <MenuItem value={u.value} key={u.value} title={u.fullName}>
                  {u.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )}
        {settings.concCalcParameter !== "concentration" && (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <TextField
              style={{ width: "300px" }}
              name="concentration"
              label="Conentration"
              size="small"
              error={Boolean(
                input.molWeight && isNaN(parseFloat(input.molWeight))
              )}
              value={input.concentration}
              onChange={handleInputChange}
            />
            <TextField
              select
              style={{ width: "100px" }}
              name="concentrationUnit"
              label="Unit"
              size="small"
              value={input.concentrationUnit}
              onChange={handleUnitChange}
            >
              {unitsAndConversions.concentration.map((u) => (
                <MenuItem value={u.value} key={u.value} title={u.fullName}>
                  {u.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )}
        <div style={{ width: "500px" }}>
          <Divider />
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <TextField
            style={{ width: "300px", caretColor: "transparent" }}
            name="output"
            label="Output"
            size="small"
            value={output.value}
          />
          <TextField
            select
            style={{ width: "100px" }}
            name="outputUnit"
            label="Unit"
            size="small"
            value={output.unit}
            onChange={handleUnitChange}
          >
            {unitsAndConversions[settings.concCalcParameter].map((u) => (
              <MenuItem value={u.value} key={u.value} title={u.fullName}>
                {u.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </>
  );
};
