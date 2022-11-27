import { useEffect, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { nmrPurityCalculatorState } from "../../../services/nmrPurityCalculator";
import { produce } from "immer";
import {
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Quiz } from "@mui/icons-material";
import { ImpurityTable } from "./ImpurityTable";

export const PurityCalculator = () => {
  const theme = useTheme();
  const [calculatorState, setCalculatorState] = useRecoilState(
    nmrPurityCalculatorState
  );

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
        This tool can be used to calculate the purity of your product based on
        NMR analysis. Specify the molecular weight of your product and add the
        residues you observe in your NMR spectrum. The purity of your product
        and the percentages of each residue will be calculated automatically.
      </Typography>
      <div style={{ margin: "auto", width: "400px", marginBottom: "20px" }}>
        <Button
          fullWidth
          startIcon={<Quiz />}
          variant="outlined"
          color="inherit"
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
    </>
  );
};
