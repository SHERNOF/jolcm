import React from "react";
import Container from "../common/container/Container";
import classes from "./header.module.css";

export default function Header({ wheel }) {
  return (
    <nav>
      <Container>
        <div className={`${classes.navContainer} ${wheel && classes.bgned}`}>
          <div className={classes.logo}>
            <img
              className={classes.navLogo}
              // src="../pics/logo-white.svg"
              // src="../pics/JOL3.svg"
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
