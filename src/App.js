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
  const displayLogin = useSelector((state) => state.displayLogin);
  const [isOpen, setisOpen] = useState(false);
  const [eventSet, seteventSet] = useState([]);

  const isOpenClickHandler = () => {
    setisOpen(!isOpen);
    seteventSet(eventInitialPic);
  };

  const dispatch = useDispatch();
  const eventHandler = (e) => {
    const ev = e.deltaY;
    if (ev > 0) {
      dispatch({ type: "CHANGE_HL" });
    } else {
      dispatch({ type: "CHANGE_HD" });
    }
  };

  return (
    <div className="App" onWheel={eventHandler}>
      <Header isOpenClickHandler={isOpenClickHandler} isOpen={isOpen}></Header>

      {isOpen && (
        <Modal
          isOpenClickHandler={isOpenClickHandler}
          isOpen={isOpen}
          eventSet={eventSet}
        />
      )}
      <Home info={info} evs={evs}></Home>
      {displayLogin && <LogIn></LogIn>}
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;
