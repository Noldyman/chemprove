import { useState, useEffect, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { nmrPurityCalculatorState } from "../../../services/nmrPurityCalculator";
import { produce } from "immer";
import {
  Button,
  Chip,
  Divider,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { FileCopy, Quiz } from "@mui/icons-material";
import { ImpurityTable } from "./ImpurityTable";
import { UserManual } from "./UserManual";

export const PurityCalculator = () => {
  const theme = useTheme();
  const [calculatorState, setCalculatorState] = useRecoilState(
    nmrPurityCalculatorState
  );
  const [puritySentence, setPuritySentence] = useState("");
  const [manualIsOpen, setManualIsOpen] = useState(false);

  // Calculate purity and impurity percentages
  useEffect(() => {
    setCalculatorState((baseState) =>
      produce(baseState, (draftState) => {
        if (
          isNaN(parseFloat(baseState.product.molWeight)) ||
          parseFloat(baseState.product.molWeight) === 0
        ) {
          draftState.product.molPercent = "";
          draftState.product.weightPercent = "";
          draftState.impurities.forEach((impurity) => {
            impurity.molPercent = "";
            impurity.weightPercent = "";
          });
          return;
        }

        let totalIntegral = 1;
        let totalWeightPerMol = parseFloat(baseState.product.molWeight);

        baseState.impurities.forEach((impurity) => {
          const numOfProtonsFloat = parseFloat(impurity.numOfProtons);
          const integralFloat = parseFloat(impurity.integral);
          const molWeightFloat = parseFloat(impurity.molWeight);

          totalIntegral += integralFloat / numOfProtonsFloat;
          totalWeightPerMol +=
            (integralFloat / numOfProtonsFloat) * molWeightFloat;
        });
        draftState.product.molPercent = ((1 / totalIntegral) * 100).toString();
        draftState.product.weightPercent = (
          (parseFloat(baseState.product.molWeight) / totalWeightPerMol) *
          100
        ).toString();

        draftState.impurities.forEach((impurity) => {
          const numOfProtonsFloat = parseFloat(impurity.numOfProtons);
          const integralFloat = parseFloat(impurity.integral);
          const molWeightFloat = parseFloat(impurity.molWeight);

          impurity.molPercent = (
            (integralFloat / numOfProtonsFloat / totalIntegral) *
            100
          ).toString();
          impurity.weightPercent = (
            (((integralFloat / numOfProtonsFloat) * molWeightFloat) /
              totalWeightPerMol) *
            100
          ).toString();
        });
      })
    );
  }, [calculatorState, setCalculatorState]);

  // Create purity sentence
  useEffect(() => {
    const createImpurityName = (name: string) => {
      if (!name) return "unnamed residue";
      return name.toLowerCase();
    };

    const filteredImpurities = calculatorState.impurities.filter(
      (impurity) => parseFloat(impurity.integral) > 0
    );

    if (
      filteredImpurities.length < 1 ||
      isNaN(parseFloat(calculatorState.product.molWeight))
    ) {
      return setPuritySentence("");
    }

    if (filteredImpurities.length === 1) {
      const impurity = filteredImpurities[0];
      const molPerc = parseFloat(impurity.molPercent).toFixed(2);
      const wtPerc = parseFloat(impurity.weightPercent).toFixed(2);
      if (isNaN(parseFloat(molPerc)) || isNaN(parseFloat(wtPerc)))
        return setPuritySentence("");

      return setPuritySentence(
        `Product contains ${wtPerc} wt% ${createImpurityName(
          impurity.name
        )} (${molPerc} mol%).`
      );
    } else {
      let sentence = "Product contains ";
      filteredImpurities.forEach((impurity, index) => {
        const molPerc = parseFloat(impurity.molPercent).toFixed(2);
        const wtPerc = parseFloat(impurity.weightPercent).toFixed(2);

        if (isNaN(parseFloat(molPerc)) || isNaN(parseFloat(wtPerc))) {
          sentence = "";
          return setPuritySentence("");
        }

        const impurityPercentages = `${wtPerc} wt% ${createImpurityName(
          impurity.name
        )} (${molPerc} mol%)`;

        if (filteredImpurities.length - 1 === index) {
          sentence += `and ${impurityPercentages}.`;
        } else if (filteredImpurities.length - 2 === index) {
          sentence += `${impurityPercentages} `;
        } else {
          sentence += `${impurityPercentages}, `;
        }
      });
      return setPuritySentence(sentence);
    }
  }, [calculatorState]);

  const changeProductMolWeight = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    if (value.match(/[^0-9.]/g)) return;
    if (value.match(/[.]/g) && value.match(/[.]/g)!.length > 1) return;

    setCalculatorState((baseState) =>
      produce(baseState, (draftState) => {
        draftState.product.molWeight = value;
      })
    );
  };

  const addPlainImpurity = () => {
    setCalculatorState((baseState) =>
      produce(baseState, (draftState) => {
        draftState.impurities.push({
          name: "",
          molWeight: "",
          numOfProtons: "1",
          integral: "",
          molPercent: "",
          weightPercent: "",
        });
      })
    );
  };

  return (
    <>
      <Typography variant="h5" align="center">
        NMR purity calculator
      </Typography>
      <Divider />
      <Typography style={{ margin: "20px 0px" }} align={"center"}>
        After performing <sup>1</sup>H NMR analysis, this tool can be used to
        calculate the purity of your product and the percentages of the
        impurities you observe.
      </Typography>
      <div style={{ margin: "auto", width: "400px", marginBottom: "20px" }}>
        <Button
          fullWidth
          startIcon={<Quiz />}
          variant="outlined"
          color="inherit"
          onClick={() => setManualIsOpen(true)}
        >
          Manual
        </Button>
      </div>

      <fieldset
        style={{
          margin: "auto",
          width: "650px",
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "5px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <legend style={{ margin: "auto" }}>
          <b>Product</b>
        </legend>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <TextField
            style={{ width: "250px" }}
            name="productMolWeight"
            label="Molecular weight (g/mol)"
            size="small"
            inputProps={{ maxLength: 10 }}
            value={calculatorState.product.molWeight}
            onChange={changeProductMolWeight}
          />
          <Divider orientation="vertical" flexItem={true} />
          <Typography style={{ width: "250px" }}>
            Purity:{" "}
            {!isNaN(parseFloat(calculatorState.product.molPercent))
              ? parseFloat(calculatorState.product.molPercent).toFixed(2)
              : "-"}{" "}
            mol%{" "}
            {!isNaN(parseFloat(calculatorState.product.weightPercent))
              ? parseFloat(calculatorState.product.weightPercent).toFixed(2)
              : "-"}{" "}
            wt%
          </Typography>
        </div>
      </fieldset>
      <ImpurityTable />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ marginTop: "20px", width: "50%", minWidth: "250px" }}
          variant="contained"
          onClick={addPlainImpurity}
        >
          Add new impurity
        </Button>
      </div>
      {puritySentence && (
        <Tooltip title="Copy to clipboard" enterDelay={500} followCursor>
          <Chip
            style={{
              width: "100%",
              padding: "5px 20px",
              marginTop: "20px",
            }}
            label={puritySentence}
            icon={<FileCopy fontSize="small" />}
            variant="outlined"
            onClick={() => navigator.clipboard.writeText(puritySentence)}
          />
        </Tooltip>
      )}
      <UserManual open={manualIsOpen} onClose={() => setManualIsOpen(false)} />
    </>
  );
};
