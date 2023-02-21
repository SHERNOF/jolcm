import classes from "./logInButton.module.css";
import { RxEnter } from "react-icons/rx";

const style = {
  fontSize: "2em",
  height: "1rem",
  cursor: "pointer",
  // paddingRight: "-.5rem",
};

export default function LoginButton({ logInHandler }) {
  return (
    <div className={classes.logInButton}>
      <div className={classes.iconContainer}>
        <div className={classes.logInIcon}>
          <RxEnter style={style} onClick={logInHandler} />
        </div>
      </div>
    </div>
  );
}
