import classes from "./modal.module.css";
import React, { useState } from "react";

export default function Modal({ isOpen, isOpenClickHandler }) {
  return (
    <>
      <div
        className={`${classes.modalContainer} ${isOpen ? classes.appear : ""}`}
        onClick={isOpenClickHandler}
      >
        <div
          className={classes.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          JESUS IS LORD
        </div>
      </div>
    </>
  );
}
