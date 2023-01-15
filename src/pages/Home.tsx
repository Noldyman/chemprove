import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  Divider,
  Typography,
} from "@mui/material";
import { CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    label: "General",
    path: "/general",
    description:
      "Convert units of different quantities and calculate with concentrations.",
  },
  {
    label: "NMR",
    path: "/nmr",
    description:
      "Identify common residues in your NMR spectrum and calculate the purity of your product.",
  },
  {
    label: "LC-MS",
    path: "/lcms",
    description:
      "Calculate a variety of masses that you might observe when using soft ionization mass spectroscopy. ",
  },
];

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={12} lg={10} xl={8}>
      <Card elevation={4}>
        <CardHeader style={{ paddingBottom: "0px" }} title="Home" />
        <Divider style={{ marginTop: "16px" }} />
        <CardContent style={{ padding: "40px" }}>
          <Typography style={{ marginBottom: "25px" }}>
            Welcome to Chemprove. On this website you'll find a variety of tools
            and calculators that might come in handy when you're doing
            chemistry. It's basically a collection of glorified excel sheets. A
            brief description of the different pages can be found below.
          </Typography>
          <div style={{ display: "flex", gap: "25px" }}>
            {pages.map((page) => (
              <Card key={page.path} elevation={7} style={{ width: "300px" }}>
                <CardActionArea
                  style={{ height: "100%" }}
                  onClick={() => navigate(page.path)}
                >
                  <CardContent style={{ height: "100%" }}>
                    <Typography variant="h5">{page.label}</Typography>
                    <Divider style={{ margin: "5px 0px" }} />
                    <Typography>{page.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
