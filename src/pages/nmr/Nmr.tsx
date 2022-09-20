import { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  Divider,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import { TabPanel } from "../../components/TabPanel";
import { CommonResidues } from "./CommonResidues";
import { PurityCalculator } from "./PurityCalculator";

export const Nmr = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_: any, newTab: number) => {
    setSelectedTab(newTab);
  };

  return (
    <Grid item xs={12} md={12} lg={10} xl={8}>
      <Card elevation={4}>
        <CardHeader
          style={{ paddingBottom: "0px" }}
          title={
            <div>
              <Typography style={{ position: "absolute" }} variant="h5">
                NMR
              </Typography>
              <Tabs centered value={selectedTab} onChange={handleTabChange}>
                <Tab label="Common residues" />
                <Tab label="Purity calculator" />
              </Tabs>
            </div>
          }
        />
        <Divider />
        <CardContent>
          <TabPanel value={selectedTab} index={0}>
            <CommonResidues />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <PurityCalculator />
          </TabPanel>
        </CardContent>
      </Card>
    </Grid>
  );
};
