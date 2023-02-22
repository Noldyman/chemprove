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
      "Identify impurities in your NMR spectrum and calculate the purity of your product.",
  },
  {
    label: "LC-MS",
    path: "/lcms",
    description:
      "Identify masses that you might observe when using soft ionization mass spectroscopy. ",
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
          <Typography style={{ marginBottom: "25px" }} align="center">
            Welcome to Chemprove, the ultimate resource for organic chemists.
            This website provides a variety of tools designed to help you out
            with complex calculations and analyses.
            <br />
            On the <b>General</b> page, you'll find a unit converter and a
            concentration calculator to assist with scientific calculations. The{" "}
            <b>NMR tool</b> can help you identify impurities and calculate the
            purity of a sample, while the <b>LC-MS tool</b> makes it easy to
            identify masses you may observe in your MS spectra.
            <br />
            Hopefully, Chemprove will streamline your day-to-day workflow and
            save you some time!
          </Typography>
          <div
            style={{ display: "flex", gap: "25px", justifyContent: "center" }}
          >
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
