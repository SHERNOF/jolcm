import classes from "./input.module.css";
import React from "react";

export default function Input(props) {
  return (
    <input
      className={classes.input}
      type={props.type}
      name={props.name}
      id={props.id || ""}
      onChange={props.onChane}
    >
      {props.children}
    </input>
  );
}
