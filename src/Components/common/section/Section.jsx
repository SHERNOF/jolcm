import React from "react";
import classes from "./section.module.css";

export default function Section(props) {
  return <div className={classes.section}>{props.children}</div>;
}
