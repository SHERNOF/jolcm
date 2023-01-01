// import { useTheme } from "@emotion/react";
import {
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { blue, grey, lightBlue, red } from "@mui/material/colors";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

// import Home from "./Pages/Home";

const light = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "rgba(0, 0, 0, 0.67)",
    //   light: "rgba(0, 0, 0, 0.87)",
    // },
    // text: {
    //   primary: "rgba(0, 0, 0, 0.87)",
    //   secondary: "rgba(0, 0, 0, 0.6)",
    //   disabled: "rgba(0, 0, 0, 0.38)",
    // },
    // background: {
    //   default: "#fff",
    //   paper: "#fff",
    // },
    // divider: "rgba(0, 0, 0, 0.12)",
    // action: {
    //   active: "#fff",
    //   hover: "rgba(255, 255, 255, 0.08)",
    //   selected: "rgba(255, 255, 255, 0.16)",
    //   disabled: "rgba(255, 255, 255, 0.3)",
    //   disabledBackground: "rgba(255, 255, 255, 0.12)",
    // },
  },

  // strong: {
  //   primary: grey["900"],
  // },
  logo: {
    fill: "rgba(0, 0, 0, 0.17)",
    stroke: "#fff",
  },

  // title: {
  //   primary: blue["500"],
  // },
  // darker: {
  //   primary: blue["500"],
  // },
});
const dark = createTheme({
  palette: {
    mode: "dark",
    //   primary: {
    //     // main: grey["700"],
    //     // light: grey["900"],
    //     // dark: grey["900"],
    //     main: "#fff",
    //     light: "rgba(255, 255, 255, 0.7)",
    //     // dark: "rgba(255, 255, 255, 0.9)",
    //   },
    //   text: {
    //     primary: "#fff",
    //     secondary: "rgba(255, 255, 255, 0.7)",
    //     disabled: "rgba(255, 255, 255, 0.5)",
    //   },
    //   background: {
    //     default: "#121212",
    //     paper: "#121212",
    //   },
    //   divider: "rgba(255, 255, 255, 0.12)",
    //   strong: {
    //     primary: blue["100"],
    //   },
    //   action: {
    //     active: "#fff",
    //     hover: "rgba(255, 255, 255, 0.08)",
    //     selected: "rgba(255, 255, 255, 0.16)",
    //     disabled: "rgba(255, 255, 255, 0.3)",
    //     disabledBackground: "rgba(255, 255, 255, 0.12)",
    //   },
  },

  logo: {
    fill: "#fff",
    stroke: "rgba(0, 0, 0, 0.17)",
  },

  // title: {
  //   primary: grey["A500"],
  // },
  // darker: {
  //   primary: "#000000",
  // },
});

function App() {
  const themeMUI = useTheme();
  const isMatch = useMediaQuery(themeMUI.breakpoints.down("md"));
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
    <ThemeProvider theme={now >= 13 && now <= 18 ? light : dark}>
      <Header styleHeader={styleHeader} isMatch={isMatch}></Header>
      <div className="App" onWheel={eventHandler}>
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
