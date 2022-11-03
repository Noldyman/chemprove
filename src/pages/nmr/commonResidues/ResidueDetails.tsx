import {
  useTheme,
  Dialog,
  DialogTitle,
  Divider,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Skeleton,
} from "@mui/material";

import { useEffect, useState } from "react";
import { ICommonResidue } from "../../../models/nmrCommonResidues";
import parseHTML from "html-react-parser";

interface Props {
  open: boolean;
  onClose: () => void;
  residue: ICommonResidue;
}

export const ResidueDetails = ({ open, onClose, residue }: Props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [compoundInfo, setCompoundInfo] = useState({
    iupacName: "",
    cas: "",
    molecularFormula: "",
  });

  useEffect(() => {
    const smiles = residue.smiles;
    const getCompoundInfo = async () => {
      setLoading(true);
      setImageUrl("");

      const response = await fetch(
        `https://cactus.nci.nih.gov/chemical/structure/${smiles}/image`
      );

      const data = await response.blob();
      const imgUrl = await URL.createObjectURL(data);
      setImageUrl(imgUrl);

      let iupacName = "";
      let cas = "";
      let molecularFormula = "";

      const iupacResponse = await fetch(
        `https://cactus.nci.nih.gov/chemical/structure/${smiles}/iupac_name`
      );
      const casResponse = await fetch(
        `https://cactus.nci.nih.gov/chemical/structure/${smiles}/cas`
      );
      const molFormResponse = await fetch(
        `https://cactus.nci.nih.gov/chemical/structure/${smiles}/formula`
      );

      if (
        iupacResponse.ok &&
        !iupacResponse.headers.get("content-type")?.includes("html")
      )
        iupacName = await iupacResponse.text();
      if (
        casResponse.ok &&
        !casResponse.headers.get("content-type")?.includes("html")
      ) {
        const casNumbers = await casResponse.text();
        cas = casNumbers.split("\n")[0];
      }
      if (
        molFormResponse.ok &&
        !molFormResponse.headers.get("content-type")?.includes("html")
      )
        molecularFormula = await molFormResponse.text();

      setCompoundInfo({ iupacName, cas, molecularFormula });
      setLoading(false);
    };

    if (smiles) getCompoundInfo();
  }, [residue]);

  const createMolecularFormula = (molForm: string) => {
    if (!molForm) return "Not available";
    let htmlString = "";

    for (let i = 0; i < molForm.length; i++) {
      if (!isNaN(parseFloat(molForm[i]))) {
        htmlString += `<sub>${molForm[i]}</sub>`;
      } else {
        htmlString += molForm[i];
      }
    }
    return <span>{parseHTML(htmlString)}</span>;
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{residue.compound}</DialogTitle>
      <Divider />
      <DialogContent>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "300px",
              height: "300px",
              border: `solid 1px ${theme.palette.divider}`,
              borderRadius: "5px",
            }}
          >
            {loading ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={298}
                  height={298}
                />
              </div>
            ) : (
              <img
                style={{ width: "298px", borderRadius: "5px" }}
                src={imageUrl}
                alt="Structure not available"
              />
            )}
          </div>
          <List>
            <ListItem>
              <ListItemText
                primary="IUPAC name"
                secondary={
                  loading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    compoundInfo.iupacName || "Not available"
                  )
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="CAS"
                secondary={
                  loading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    compoundInfo.cas || "Not available"
                  )
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Molecular formula"
                secondary={
                  loading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    createMolecularFormula(compoundInfo.molecularFormula)
                  )
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Molecular weight"
                secondary={
                  loading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    `${residue.molWeight} g/mol`
                  )
                }
              />
            </ListItem>
          </List>
        </div>
      </DialogContent>
    </Dialog>
  );
};
