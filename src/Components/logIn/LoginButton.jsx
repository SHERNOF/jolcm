import classes from "./logInButton.module.css";
import { RxEnter } from "react-icons/rx";
import { useDispatch } from "react-redux";

const style = {
  fontSize: "2em",
  height: "1rem",
  cursor: "pointer",
};

export default function LoginButton() {
  const dispatch = useDispatch();
  const logInHandler = () => {
    dispatch({ type: "SET_LOGIN" });
  };
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
