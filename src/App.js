import { useTheme } from "@emotion/react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { blue, grey, lightBlue, red } from "@mui/material/colors";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

// import Home from "./Pages/Home";

const light = createTheme({
  mode: "light",
  palette: {
    primary: {
      main: blue["50"],
      light: blue["100"],
      dark: blue["200"],
    },
  },
  text: {
    primary: grey["900"],
  },
  strong: {
    primary: grey["900"],
  },
  logo: {
    primary: grey["900"],
  },
  title: {
    primary: blue["500"],
  },
  darker: {
    primary: blue["500"],
  },
});
const dark = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: grey["700"],
      light: grey["900"],
      dark: grey["900"],
    },
  },
  text: {
    primary: blue["50"],
  },
  strong: {
    primary: blue["100"],
  },
  logo: {
    primary: blue["50"],
  },
  title: {
    primary: grey["A500"],
  },
  darker: {
    primary: "#000000",
  },
});

function App() {
  const now = new Date().getHours();
  const [styleHeader, setStyleHeader] = useState(true);
  const eventHandler = (e) => {
    const evnt = e.nativeEvent.wheelDelta;
    if (evnt < 0) {
      setStyleHeader(false);
    } else {
      setStyleHeader(true);
    }
  };

  console.log(now);

  return (
    <ThemeProvider theme={now >= 7 && now <= 18 ? dark : light}>
      <Header styleHeader={styleHeader}></Header>
      <div className="App" onWheel={eventHandler}>
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
