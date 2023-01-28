import classes from "./modal.module.css";
import React from "react";

export default function Modal({ setShowModal, setIsOpen }) {
  const openEvent = () => {
    setIsOpen(true);
    setShowModal(false);
  };
  return (
    <div className={classes.modalContainer} onClick={openEvent}>
      <div className={classes.modalContent}>JESUS IS LORD</div>
    </div>
  );
}
