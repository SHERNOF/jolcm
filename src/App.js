import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  logo: {
    fill: "#fff",
    stroke: "rgba(0, 0, 0, 0.17)",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  logo: {
    fill: "rgba(0, 0, 0, 0.17)",
    stroke: "#fff",
  },
});

function App() {
  const now = new Date().getHours();
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [wheel, setWheel] = useState(false);
  const eventHandler = (e) => {
    const ev = e.deltaY;
    ev > 0 ? setWheel(true) : setWheel(false);
  };
  return (
    <ThemeProvider theme={now >= 18 ? darkTheme : lightTheme}>
      <div className="App" onWheel={eventHandler}>
        <Home isMed={isMed} isSmall={isSmall} wheel={wheel}></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
