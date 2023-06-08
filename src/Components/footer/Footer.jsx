import React from "react";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div
      className={classes.footer}
      style={{
        height: "60vh",
        width: "100%",
        background: "black",
        color: "white",
      }}
    >
      <div className={classes.ministries}>Ministries</div>
      <div className={classes.email}>EMAIL</div>
    </div>
  );
}
