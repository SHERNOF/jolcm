import classes from "./input.module.css";
import React from "react";

export default function Input(props) {
  return (
    <input
      class
      className={classes.input}
      type={props.type}
      name={props.name}
      id={props.id || ""}
    >
      {props.children}
    </input>
  );
}
