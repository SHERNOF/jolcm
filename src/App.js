import "./App.css";
import Home from "./Pages/Home/Home";
import React from "react";
// import data from "./data.js";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import LoginButton from "./Components/logIn/LoginButton";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const displayLogin = useSelector((state) => state.displayLogin);

  const dispatch = useDispatch();
  const eventHandler = (e) => {
    const ev = e.deltaY;
    if (ev > 0) {
      dispatch({ type: "CHANGE_HL" });
    } else {
      dispatch({ type: "CHANGE_HD" });
    }
  };

  // const info = data.pastorData;

  return (
    <div className="App" onWheel={eventHandler}>
      <Header></Header>
      {/* <Home info={info} evs={evs}></Home> */}
      <Home></Home>
      {displayLogin && <LogIn></LogIn>}
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;
