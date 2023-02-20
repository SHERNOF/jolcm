import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import { data } from "./data.js";
import { event } from "./data.js";
import Modal from "./Components/modal/Modal";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import LoginButton from "./Components/logIn/LoginButton";

const info = data;
const eventInitialPic = event[0];

function App() {
  const [displayLogin, setdisplayLogin] = useState(false);
  const logInHandler = () => {
    setdisplayLogin(!displayLogin);
  };

  const [isOpen, setisOpen] = useState(false);
  const [eventSet, seteventSet] = useState([]);

  const isOpenClickHandler = () => {
    setisOpen(!isOpen);
    seteventSet(eventInitialPic);
  };

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
        <Modal
          isOpenClickHandler={isOpenClickHandler}
          isOpen={isOpen}
          eventSet={eventSet}
        />
      )}
      <Home isMed={isMed} info={info} isSmall={isSmall} wheel={wheel}></Home>
      {displayLogin && <LogIn displayLogin={displayLogin}></LogIn>}
      <LoginButton logInHandler={logInHandler}></LoginButton>
    </div>
  );
}

export default App;
