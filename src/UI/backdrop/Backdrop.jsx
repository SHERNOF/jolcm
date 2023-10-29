import classes from "./backdrop.module.css";
import ReactDom from "react-dom";

export default function Backdrop(props) {
  return (
    <>
      {ReactDom.createPortal(
        <div
          className={`${classes.backdrop} ${
            props.showBackdrop && classes.backdropIn
          }`}
          // onClick={props.onClick}
        >
          {props.children}
        </div>,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}
