import classes from "./logInButton.module.css";
import { RxEnter, RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, USER_LOGOUT } from "../../store/constants";
import { Link } from "react-router-dom";

const style = {
  fontSize: "2em",
  height: "1rem",
  cursor: "pointer",
};

export default function LoginButton() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const logInHandler = () => {
    dispatch({ type: "SET_LOGIN" });
  };
  const logOutHandler = () => {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: SET_LOGIN });
    localStorage.removeItem("userInfo");
  };
  return (
    <div className={classes.logInButton}>
      <div className={classes.iconContainer}>
        <div className={classes.logInIcon}>
          {userInfo ? (
            <Link to="/">
              <RxExit style={style} onClick={logOutHandler} />
            </Link>
          ) : (
            <RxEnter style={style} onClick={logInHandler} />
          )}
        </div>
      </div>
    </div>
  );
}
