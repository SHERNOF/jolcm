import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import LogIn from "./Components/logIn/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CHANGE_MOUSEDOWN, CHANGE_MOUSEUP } from "./store/constants";
import LoginButton from "./Components/logIn/LoginButton";


import EventsPage from "./Pages/events/EventsPage";
import MessagesPage from "./Pages/messages/MessagesPage";
import UsersPage from "./Pages/users/UsersPage";
import AdminRoute from "./Components/adminRoute/AdminRoute";
import WowPage from "./Pages/wow/WowPage";

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
          <Route path='/users' element={<UsersPage />}></Route>
          <Route path='/messages' element={<MessagesPage />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/admin/wow' 
          element={<AdminRoute><WowPage /></AdminRoute>}/>
        </Routes>

        <LoginButton></LoginButton>
        {displayLogin && <LogIn></LogIn>}
      </BrowserRouter>
    </div>
  );
}

export default App;
