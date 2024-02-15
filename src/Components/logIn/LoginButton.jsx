import classes from "./logInButton.module.css";
import { RxEnter, RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, USER_LOGOUT } from "../../store/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../../UI/container/Container";

const style = {
  fontSize: "2em",
  height: "1rem",
  cursor: "pointer",
};

export default function LoginButton() {
  const [openModal, setopenModal] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const logInHandler = () => {
    dispatch({ type: SET_LOGIN });
  };
  const logOutHandler = () => {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: SET_LOGIN });
    localStorage.removeItem("userInfo");
  };
  return (

    <div className={classes.logInButtonContainer}>
      <div className={classes.logInButtonContainerPadding}>
        <div className={classes.iconContainer}>
          <div className={classes.logInIcon}>
            {userInfo ? (
              <Link to={"/"} style={{ color: "white" }}>
                <RxExit style={style} onClick={logOutHandler} />
              </Link>
            ) : (
              <Link to={"/"} style={{ color: "white" }}>
                <RxEnter style={style} onClick={logInHandler} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}
