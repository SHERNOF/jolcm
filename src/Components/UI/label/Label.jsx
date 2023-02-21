import React from "react";
import classes from "./label.module.css";

export default function Label(props) {
  return (
    <label className={classes.label} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
}
