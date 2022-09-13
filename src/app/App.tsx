import "./App.css";
import pjson from "../../package.json";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TopBar } from "./TopBar";

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
        <Outlet />
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
