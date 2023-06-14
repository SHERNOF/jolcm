import React, { useState } from "react";
import Container from "../common/container/Container";
import classes from "./header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const wheel = useSelector((state) => state.wheel);
  const [hamburger, sethamburger] = useState(false);
  const test = () => {
    sethamburger(!hamburger);
  };

  return (
    <nav>
      <Container>
        <div className={`${classes.navContainer} ${wheel && classes.bgned}`}>
          <div className={classes.logo}>
            <img
              className={classes.navLogo}
              src={wheel ? "../pics/JOLblack.svg" : "../pics/JOL3.svg"}
              alt="logo"
            ></img>
          </div>
          <div
            className={`${classes.hamburger} ${hamburger && classes.close}`}
            onClick={test}
          >
            <span className={`${wheel && classes.spanned}`}></span>
            <span className={`${wheel && classes.spanned}`}></span>
            <span className={`${wheel && classes.spanned}`}></span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
