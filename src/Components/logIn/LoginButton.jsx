import React, { useState } from "react";
import classes from "./logInButton.module.css";
import { RxEnter } from "react-icons/rx";

const style = {
  fontSize: "2em",
  height: "1.5rem",
  cursor: "pointer",
  paddingRight: "1rem",
};

export default function LoginButton({ logInHandler }) {
  return (
    <div className={classes.logInButton}>
      <div className={classes.iconContainer}>
        <RxEnter style={style} onClick={logInHandler} />
      </div>
    </div>
  );
}
