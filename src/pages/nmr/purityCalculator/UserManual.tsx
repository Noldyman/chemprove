import {
  Dialog,
  Divider,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

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
          The NMR purity calculator can be used to calculate the purity of your
          product based on NMR analysis. The percentages of impurities are also
          displayed.
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            How to Use
          </Typography>
          First, specify the <b>molecular weight</b> of your product. Then, for
          every impurity you observe in your spectrum, perform the following
          steps:
        </Typography>
        <ol>
          <li>
            Select the <b>name of the impurity</b>.<b>*</b> The most common
            residues are included in the list. If the impurity is not included,
            you can enter the name yourself.
          </li>
          <li>
            Enter the <b>molecular weight</b> of the impurity and specify the{" "}
            <b>number of protons</b> that correspond to the signal you
            integrated. If you selected one of the common residues, these values
            will be autofilled.
          </li>
          <li>
            Enter the <b>integral</b> of the signal.
          </li>
        </ol>
        <Typography variant="body1">
          As soon as you enter the data, the purity of your product and
          percentage of each of the impurities will be calculated. At the bottom
          of the page, a <b>sentence</b> appears that lists all the impurities
          and their percentages. Simply click on it to <b>copy the sentence</b>{" "}
          to your clipboard, so that you can paste it in your lab notebook.
          <br />
          <br />
          <b>*</b> When you select an impurity, the <b>molecular weight</b> and{" "}
          <b>number of protons</b> will be filled in automatically. However, if
          you select a residue that has more than one signal on NMR, a dialog
          will appear where you can choose the signal that you'd like to use for
          the calculation.
        </Typography>

        {/* <Typography variant="h6">Introduction</Typography>
        <Typography variant="body1">
          The NMR purity calculator can be used to calculate the purity of your
          product based on NMR analysis. Also the percentages of impurities are
          displayed
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            How to use
          </Typography>
          First, specify the <b>molecular weight</b> of your product. Then, for
          every impurity you observe in your spectrum, perform the following
          steps:
        </Typography>
        <ol>
          <li>
            Select the <b>name of the impurity</b>.<b>*</b> The most common
            residues are included in the list. If the impurity is not included,
            you can enter the name yourself.
          </li>
          <li>
            Enter the <b>molecular weight</b> of the impurity and speficy the{" "}
            <b>number of protons</b> that correspond to the signal you
            inegrated. If you selected one of the common residues, these values
            will be autofilled.
          </li>
          <li>
            Enter the <b>integral</b> of the signal.
          </li>
        </ol>
        <Typography variant="body1">
          As soon as you enter the data, the purity of your product and
          percentage of each of the impurities will be calculated. On the bottom
          of the page appears <b>sentence</b> that lists all the impurities and
          their percentages. Simply click on it to <b>copy the sentence</b> to
          your clipboard, so that you can paste it in your lab notebook.
          <br />
          <br />
          <b>*</b> When you select an impurity, the the <b>molecular weight</b>{" "}
          and <b>number of protons</b> will be filled in automatically. However,
          if you select a residue that has more than one signal on NMR, a dialog
          will appear where you can choose the signal that you'd like to use for
          the calulation.
        </Typography> */}
      </DialogContent>
    </Dialog>
  );
};
