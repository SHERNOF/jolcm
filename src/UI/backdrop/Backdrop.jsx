import { useSelector } from "react-redux";
import classes from "./backdrop.module.css";
import ReactDom from "react-dom";

export default function Backdrop(props) {
  const setBackdrop = useSelector((state) => state.setBackdrop);
  return (
    <>
      {ReactDom.createPortal(
        <div
          className={`${classes.backdrop} ${
            props.openModal && classes.backdropIn
            
          }`}
        >
          {props.children}
        </div>,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}

/* 
1. fixed the whitescreen issue when the translateX is used by putting an overflow:hidden in the parent div


2. Issue - the backdrop disappear by clicking the backdrop and {props.children}. suppose to be it will only close when the close button and backdrop is click. resolved by using (e) => {e.stopPropagation()}
*/
