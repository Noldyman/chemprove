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
  { label: "General", path: "/general" },
  { label: "NMR", path: "/nmr" },
  { label: "LC-MS", path: "/lcms" },
  { label: "Manual", path: "/manual" },
];

interface Props {
  onSettings: () => void;
}

export const TopBar = ({ onSettings }: Props) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number | false>(false);

  useEffect(() => {
    const locationTabIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (locationTabIndex >= 0 && locationTabIndex !== selectedTab) {
      setSelectedTab(locationTabIndex + 1);
    } else {
      setSelectedTab(false);
    }
  }, [location, selectedTab]);

  const selectTab = (index: number, path: string) => {
    setSelectedTab(index + 1);
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
          onClick={() => {
            setSelectedTab(false);
            navigate("/");
          }}
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
              value={i + 1}
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
