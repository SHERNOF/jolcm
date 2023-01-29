import classes from "./modal.module.css";
import React, { useState } from "react";

export default function Modal({ setShowModal, isOpen, isOpenClickHandler }) {
  return (
    <>
      <div className={classes.modalContainer} onClick={isOpenClickHandler}>
        <div className={classes.modalContent}>JESUS IS LORD</div>
      </div>
    </>
  );
}
