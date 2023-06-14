import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useEffect, useState } from "react";
import { pastorData } from "./data.js";
// import { churchEvents } from "./data.js";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import LoginButton from "./Components/logIn/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const info = pastorData;
// const evs = churchEvents;
// const eventInitialPic = churchEvents[0];

function App() {
  const [churchEvents, setchurchEvents] = useState([]);
  console.log(churchEvents);

  console.log(test);
  useEffect(() => {
    const fetchChurchEvents = async () => {
      const result = await axios.get("/church-events");
      setchurchEvents(result.churchEvents);
    };
    fetchChurchEvents();
  }, []);

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

  return (
    <div className="App" onWheel={eventHandler}>
      <Header></Header>
      <Home info={info} evs={churchEvents}></Home>
      {displayLogin && <LogIn></LogIn>}
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;
