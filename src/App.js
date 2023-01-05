import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./Pages/home/Home";

const darkTheme = createTheme({
  shadows: ["none"],
  palette: {
    mode: "dark",
  },
  logo: {
    fill: "#fff",
    stroke: "rgba(0, 0, 0, 0.17)",
  },
});

const lightTheme = createTheme({
  shadows: ["none"],
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
  return (
    <ThemeProvider theme={now >= 18 ? darkTheme : lightTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
