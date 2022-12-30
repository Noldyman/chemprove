import { Grid, Card, CardHeader, Divider, CardContent } from "@mui/material";
import { CommonIons } from "./CommonIons";

export const Lcms = () => {
  return (
    <Grid item xs={12} md={12} lg={10} xl={8}>
      <Card elevation={4}>
        <CardHeader style={{ paddingBottom: "0px" }} title="LC-MS" />
        <Divider style={{ marginTop: "16px" }} />
        <CardContent style={{ padding: "40px" }}>
          <CommonIons />
        </CardContent>
      </Card>
    </Grid>
  );
};
