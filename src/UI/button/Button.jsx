import React from "react";
import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      // onCLick={props.onCLick}
      // style={props.style || ''}
      className={classes.button}
    >
      {props.children}
    </button>
  );
}
