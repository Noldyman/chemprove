import "./App.css";
import pjson from "../../package.json";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TopBar } from "./TopBar";
import { Grid } from "@mui/material";

const App = () => {
  const locaction = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (locaction.pathname === "/") navigate("/nmr");
  }, [locaction, navigate]);

  return (
    <>
      <TopBar />
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
        style={{ cursor: "pointer" }}
        onClick={() => window.open("https://github.com/Noldyman/chemprove")}
        className="footer"
      >
        {pjson.name} {pjson.version}
      </footer>
    </>
  );
};

export default App;
