import React from "react";
import Container from "../common/container/Container";
import classes from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const wheel = useSelector((state) => state.wheel);
  console.log(wheel);
  const dispatch = useDispatch();
  const eventHandler = () => {
    dispatch({ type: "CHANGE_WHEEL_VALUE" });
  };
  return (
    <nav>
      <Container>
        <div
          className={`${classes.navContainer} ${wheel && classes.bgned}`}
          onClick={eventHandler}
        >
          <div className={classes.logo}>
            <img
              className={classes.navLogo}
              src={wheel ? "../pics/JOL black.svg" : "../pics/JOL3.svg"}
              alt="logo"
            ></img>
          </div>
          <div className={`${classes.hamburger} `}>
            <span className={`${wheel && classes.spanned}`}></span>
            <span className={`${wheel && classes.spanned}`}></span>
            <span className={`${wheel && classes.spanned}`}></span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
