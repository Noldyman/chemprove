import { useState, useEffect, ChangeEvent } from "react";
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
  Tooltip,
} from "@mui/material";
import { AddCircle, RemoveCircle, SwapHoriz } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { generealSettingsState } from "../../services/generalSettings";
import { Notation, UnitConverterQuantity } from "../../models/general";
import { unitsAndConversions } from "../../data/unitsAndConversions";

const quantities = [
  { label: "Mass", value: "mass" },
  { label: "Temperature", value: "temperature" },
  { label: "Pressure", value: "pressure" },
  { label: "Volume", value: "volume" },
];

export const UnitConverter = () => {
  const theme = useTheme();
  const [output, setOutput] = useState("");
  const [input, setInput] = useState({
    input: "",
    inputUnit: "",
    outputUnit: "",
  });
  const [settings, setSettings] = useRecoilState(generealSettingsState);

  useEffect(() => {
    if (
      unitsAndConversions[settings.convQuantity].length &&
      input.inputUnit &&
      input.outputUnit
    ) {
      const inputValue = parseFloat(input.input);
      const convertToBase = unitsAndConversions[settings.convQuantity].find(
        (u) => u.value === input.inputUnit
      )?.convertToBase;
      const convertFromBase = unitsAndConversions[settings.convQuantity].find(
        (u) => u.value === input.outputUnit
      )?.convertFromBase;
      if (!convertToBase || !convertFromBase) return;
      const baseValue = convertToBase(inputValue);
      const outputValue = convertFromBase(baseValue);
      if (!outputValue || isNaN(outputValue)) {
        setOutput("-");
      } else {
        const outputString =
          settings.notation === "numeric"
            ? outputValue.toFixed(settings.numOfDecimals)
            : outputValue.toExponential(settings.numOfDecimals);
        setOutput(outputString);
      }
    }
  }, [input, settings]);

  useEffect(() => {
    setInput((prevValue) => ({
      ...prevValue,
      inputUnit: unitsAndConversions[settings.convQuantity][0].value,
      outputUnit: unitsAndConversions[settings.convQuantity][1].value,
    }));
  }, [settings.convQuantity]);

  const handleQuantityChange = (e: any) => {
    setSettings((prevValue) => ({
      ...prevValue,
      convQuantity: e.target.value as UnitConverterQuantity,
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
    setInput((prevValue) => ({ ...prevValue, input: value }));
  };

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUnitSwitch = () => {
    setInput((prevValue) => ({
      ...prevValue,
      inputUnit: prevValue.outputUnit,
      outputUnit: prevValue.inputUnit,
    }));
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Unit converter
      </Typography>
      <Divider />
      <Typography style={{ margin: "20px 0px" }} align={"center"}>
        This tool allows you to convert the units of different quantities.
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
            name="quantity"
            label="Quantity"
            select
            size="small"
            value={settings.convQuantity}
            onChange={handleQuantityChange}
          >
            {quantities.map((q) => (
              <MenuItem value={q.value} key={q.value}>
                {q.label}
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
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <TextField
            style={{ width: "300px" }}
            label="Input"
            size="small"
            error={Boolean(input.input && isNaN(parseFloat(input.input)))}
            value={input.input}
            onChange={handleInputChange}
          />
          <TextField
            style={{ width: "100px" }}
            select
            value={input.inputUnit}
            onChange={handleUnitChange}
            name="inputUnit"
            label="Unit"
            size="small"
          >
            {unitsAndConversions[settings.convQuantity].map((u) => (
              <MenuItem value={u.value} key={u.value} title={u.fullName}>
                {u.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Tooltip title="Switch units" enterDelay={500} followCursor>
          <IconButton onClick={handleUnitSwitch}>
            <SwapHoriz />
          </IconButton>
        </Tooltip>
        <div style={{ display: "flex", gap: "10px" }}>
          <TextField
            style={{ width: "300px", caretColor: "transparent" }}
            label="Output"
            size="small"
            value={output}
          />
          <TextField
            style={{ width: "100px" }}
            select
            value={input.outputUnit}
            onChange={handleUnitChange}
            name="outputUnit"
            label="Unit"
            size="small"
          >
            {unitsAndConversions[settings.convQuantity].map((u) => (
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
