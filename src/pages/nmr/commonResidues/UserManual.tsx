import {
  Dialog,
  Divider,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const UserManual = ({ open, onClose }: Props) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>Manual</DialogTitle>
      <Divider />
      <DialogContent>
        <Typography variant="h6">Introduction</Typography>
        <Typography variant="body1">
          The residue table shows chemical shifts and other details of common
          residual solvents and residues in proton NMR spectroscopy. The table
          combines data from multiple sources and can be used to identify your
          impurities. <br />
          When you click on one of the residues, more <b>details</b> will be
          shown, including the <b>chemical structure</b>. After you've
          identified an impurity, you can click the{" "}
          <span>
            <PlaylistAdd style={{ verticalAlign: "bottom" }} />
          </span>{" "}
          icon to add the residue to the <b>purity calculator</b>.
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          Identifying an impurity
        </Typography>
        <Typography variant="body1">
          When you observe a signal on <sup>1</sup>H NMR that does not originate
          from your product, you can use the following steps to identify the
          impurity:
        </Typography>
        <ol>
          <li>
            In the <i>filters box</i>, select the <b>solvent</b> that was used
            for the measurement.
          </li>
          <li>
            Specify the <b>chemical shift</b> of the impurity.
          </li>
          <li>
            Set the <b>deviation</b> (default is 0.1).
          </li>
          <li>
            Optionally, specify the <b>multiplicity</b> of the signal.
          </li>
        </ol>
        <Typography variant="body1">
          As soon as you specify any filters, the content of the residue table
          will change. The chemical shifts of a residue will be{" "}
          <b>highlighted</b> if they match the chemical shift ± deviation you
          entered.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
