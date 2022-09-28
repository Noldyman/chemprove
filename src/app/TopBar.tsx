import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useTheme,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  IconButton,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

const navItems = [
  { label: "NMR", path: "/nmr" },
  { label: "Manual", path: "/manual" },
];

interface Props {
  onSettings: () => void;
}

export const TopBar = ({ onSettings }: Props) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const locationTabIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (locationTabIndex >= 0 && locationTabIndex !== selectedTab) {
      setSelectedTab(locationTabIndex);
    }
  }, [location, selectedTab]);

  const selectTab = (index: number, path: string) => {
    setSelectedTab(index);
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          position="absolute"
          variant="h5"
        >
          Chemprove
        </Typography>
        <Tabs
          style={{ margin: "auto", marginBottom: "0px" }}
          textColor="inherit"
          value={selectedTab}
          TabIndicatorProps={{ style: { background: "#fff" } }}
        >
          {navItems.map((item, i) => (
            <Tab
              key={item.label + i}
              value={i}
              label={item.label}
              onClick={() => selectTab(i, item.path)}
            />
          ))}
        </Tabs>
        <IconButton onClick={onSettings} color="inherit">
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
