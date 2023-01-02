import {
  createTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

// import Home from "./Pages/Home";

const light = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   light: grey["300"],
    //   main: grey["700"],
    //   dark: grey["900"],
    // },
  },
  logo: {
    fill: "rgba(0, 0, 0, 0.17)",
    stroke: "#fff",
  },
});
const dark = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   light: grey["500"],
    //   main: grey["50"],
    //   dark: "",
    // },
  },

  logo: {
    fill: "#fff",
    stroke: "rgba(0, 0, 0, 0.17)",
  },
});

function App() {
  const themeMUI = useTheme();
  const isMed = useMediaQuery(themeMUI.breakpoints.down("md"));
  const now = new Date().getHours();
  console.log(now);
  const [styleHeader, setStyleHeader] = useState(true);
  const eventHandler = (e) => {
    const evnt = e.nativeEvent.wheelDelta;
    if (evnt < 0) {
      setStyleHeader(false);
    } else {
      setStyleHeader(true);
    }
  };

  return (
    <ThemeProvider theme={now >= 18 && now <= 7 ? light : dark}>
      <Header styleHeader={styleHeader} isMed={isMed}></Header>
      <div className="App" onWheel={eventHandler}>
        <Home isMed={isMed}></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
