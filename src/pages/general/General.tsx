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
import { UnitConverter } from "./UnitConverter";
import { ConcentrationCalculator } from "./ConcentrationCalculator";

export const General = () => {
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
                General
              </Typography>
              <Tabs centered value={selectedTab} onChange={handleTabChange}>
                <Tab label="Unit converter" />
                <Tab label="Concentration calculator" />
              </Tabs>
            </div>
          }
        />
        <Divider />
        <CardContent>
          <TabPanel value={selectedTab} index={0}>
            <UnitConverter />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <ConcentrationCalculator />
          </TabPanel>
        </CardContent>
      </Card>
    </Grid>
  );
};
