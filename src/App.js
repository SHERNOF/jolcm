import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./Pages/admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CHANGE_MOUSEDOWN, CHANGE_MOUSEUP } from "./store/constants";
import LoginButton from "./Components/logIn/LoginButton";
import Users from "./Pages/users/Users";
import Messages from "./Pages/messages/Messages";
import Events from "./Pages/events/Events";

function App() {
  const displayLogin = useSelector((state) => state.displayLogin);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const eventHandler = (e) => {
    if (!userInfo) {
      const ev = e.deltaY;
      if (ev > 0) {
        dispatch({ type: CHANGE_MOUSEUP });
      } else {
        dispatch({ type: CHANGE_MOUSEDOWN });
      }
    }
  };
  return (
    <div className="App" onWheel={eventHandler}>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<Users />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/events' element={<Events />}></Route>
        </Routes>

        <LoginButton></LoginButton>
        {displayLogin && <LogIn></LogIn>}
      </BrowserRouter>
    </div>
  );
}

export default App;
