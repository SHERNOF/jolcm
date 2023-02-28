import React from "react";
import classes from "./title.module.css";

export default function Title(props) {
  return <div className={classes.title}>{props.children}</div>;
}
