import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import { pastorData } from "./data.js";
import { churchEvents } from "./data.js";
import Modal from "./Components/common/modal/Modal";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import LoginButton from "./Components/logIn/LoginButton";
import { useDispatch, useSelector } from "react-redux";

const info = pastorData;
const evs = churchEvents;
const eventInitialPic = churchEvents[0];

function App() {
  // For LogIn Button
  const displayLogin = useSelector((state) => state.displayLogin);
  // const displayLogin = useSelector({state => state.displayLogin})
  // const [displayLogin, setdisplayLogin] = useState(false);
  // const logInHandler = () => {
  //   setdisplayLogin(!displayLogin);
  // };

  // For LogIn Button

  const [isOpen, setisOpen] = useState(false);
  const [eventSet, seteventSet] = useState([]);

  const isOpenClickHandler = () => {
    setisOpen(!isOpen);
    seteventSet(eventInitialPic);
  };

  // const now = new Date().getHours();
  // const theme = useTheme();
  // const isMed = useMediaQuery(theme.breakpoints.down("md"));
  // const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // event handler for header's background color transition
  const dispatch = useDispatch();
  // const [wheel, setWheel] = useState(false);
  const eventHandler = (e) => {
    const ev = e.deltaY;
    // ev > 0 ? setWheel(true) : setWheel(false);
    if (ev > 0) {
      dispatch({ type: "CHANGE_HL" });
    } else {
      dispatch({ type: "CHANGE_HD" });
    }
  };

  // event handler for header's background color transition

  return (
    <div className="App" onWheel={eventHandler}>
      <Header
        isOpenClickHandler={isOpenClickHandler}
        isOpen={isOpen}
        // isMed={isMed}
        // wheel={wheel}
      ></Header>

      {isOpen && (
        <Modal
          isOpenClickHandler={isOpenClickHandler}
          isOpen={isOpen}
          eventSet={eventSet}
        />
      )}
      <Home
        // isMed={isMed}
        info={info}
        // isSmall={isSmall}
        evs={evs}
        // wheel={wheel}
      ></Home>
      {/* {displayLogin && <LogIn displayLogin={displayLogin}></LogIn>} */}
      {displayLogin && <LogIn></LogIn>}
      {/* displayLogin <LoginButton logInHandler={logInHandler}></LoginButton> */}
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;
