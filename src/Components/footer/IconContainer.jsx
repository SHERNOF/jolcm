import React from "react";
import classes from './footer.module.css'

export default function IconContainer(props) {
  return (
    <div className={classes.individualIcon}>
      {props.children}
    </div>
  );
}
