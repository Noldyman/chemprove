import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    background: {
      paper: "#fff",
      default: "	#f7f7f7",
    },
    mode: "light",
    primary: {
      main: "#0276aa",
    },
    secondary: {
      main: "#f9aa33",
    },
    text: {
      primary: "#515151",
    },
    divider: "rgba(0,0,0,0.4)",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#212121",
      default: "#202020",
    },
    primary: {
      main: "#0276aa",
    },
    secondary: {
      main: "#f9aa33",
    },
    text: {
      primary: "#fff",
    },
    divider: "rgba(255,255,255,0.4)",
  },
});
