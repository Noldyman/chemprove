import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";

const navItems = [
  { label: "NMR", path: "/nmr" },
  { label: "About", path: "/about" },
  { label: "Manual", path: "/manual" },
];

export const TopBar = () => {
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
    <AppBar position="static">
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
          style={{ margin: "auto" }}
          textColor="inherit"
          value={selectedTab}
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
      </Toolbar>
    </AppBar>
  );
};
