import React from "react";
import classes from "./container.module.css";

export default function Container(props) {
  return <div>{props.children}</div>;
}
