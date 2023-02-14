import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import { data } from "./data.js";
import Modal from "./Components/modal/Modal";
import Header from "./Components/Header/Header";

const info = data;

function App() {
  const [isOpen, setisOpen] = useState(true);

  const isOpenClickHandler = () => {
    setisOpen(!isOpen);
  };
  console.log(isOpen);

  // const now = new Date().getHours();
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [wheel, setWheel] = useState(false);
  const eventHandler = (e) => {
    const ev = e.deltaY;
    ev > 0 ? setWheel(true) : setWheel(false);
  };
  return (
    <div className="App" onWheel={eventHandler}>
      <Header
        isOpenClickHandler={isOpenClickHandler}
        isOpen={isOpen}
        isMed={isMed}
        wheel={wheel}
      ></Header>

      {isOpen && (
        <Modal isOpenClickHandler={isOpenClickHandler} isOpen={isOpen} />
      )}
      <Home isMed={isMed} info={info} isSmall={isSmall} wheel={wheel}></Home>
    </div>
  );
}

export default App;
