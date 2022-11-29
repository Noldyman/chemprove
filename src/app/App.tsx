import "./App.css";
import pjson from "../../package.json";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { selectedThemeState } from "../services/theme";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { darkTheme, lightTheme } from "../themes/themes";
import { CssBaseline } from "@mui/material";
import { TopBar } from "./TopBar";
import { Grid, ThemeProvider } from "@mui/material";
import { SettingsDrawer } from "../components/SettingsDrawer";
import { Notification } from "../components/Notification";

const App = () => {
  const locaction = useLocation();
  const navigate = useNavigate();
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const selectedTheme = useRecoilValue(selectedThemeState);

  useEffect(() => {
    if (locaction.pathname === "/") navigate("/nmr");
  }, [locaction, navigate]);

  const handleOpenSettings = () => setSettingsIsOpen(true);
  const handleCloseSettings = () => setSettingsIsOpen(false);

  const getTheme = () => {
    if (selectedTheme === "system") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return darkTheme;
      } else return lightTheme;
    } else {
      return selectedTheme === "light" ? lightTheme : darkTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <>
        <TopBar onSettings={handleOpenSettings} />
        <div className="app">
          <Grid
            style={{ marginTop: "30px" }}
            container
            spacing={{ xs: 2, lg: 4 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Outlet />
          </Grid>
        </div>
        <footer
          style={{
            cursor: "pointer",
            backgroundColor: getTheme().palette.primary.main,
          }}
          onClick={() => window.open("https://github.com/Noldyman/chemprove")}
          className="footer"
        >
          {pjson.name} {pjson.version}
        </footer>
        <SettingsDrawer isOpen={settingsIsOpen} onClose={handleCloseSettings} />
      </>
      <Notification />
    </ThemeProvider>
  );
};

export default App;
