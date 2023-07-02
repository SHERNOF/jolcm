import "./App.css";
import Home from "./Pages/Home/Home";
import React from "react";
// import data from "./data.js";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import LoginButton from "./Components/logIn/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./Pages/admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {displayLogin && <LogIn></LogIn>}
        <LoginButton></LoginButton>
      </BrowserRouter>
    </div>
  );
}

export default App;
