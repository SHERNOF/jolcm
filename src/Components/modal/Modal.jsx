import classes from "./modal.module.css";
import React, { useState } from "react";

export default function Modal({ isOpen, isOpenClickHandler }) {
  return (
    <>
      <div
        className={`${classes.modalContainer} ${isOpen && classes.appear}`}
        onClick={isOpenClickHandler}
      >
        <div
          className={`${classes.modalContent} `}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className={isOpen ? classes.appear : ""}> JESUS IS LORD</h1>
        </div>
      </div>
    </>
  );
}
