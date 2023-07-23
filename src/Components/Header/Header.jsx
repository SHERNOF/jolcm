import * as React from "react";
import Container from "../common/container/Container";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "../logIn/LoginButton";

export default function Header() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const wheel = useSelector((state) => state.wheel);

  // const [hamburger, sethamburger] = useState(false);
  // const test = () => {
  //   sethamburger(!hamburger);
  // };

  // const logOutHandler = () => {
  //   dispatch({ type: "USER_LOGOUT" });
  //   localStorage.removeItem("userInfo");
  // };

  return (
    <nav>
      <Container>
        <div
          className={`${classes.navContainer} ${wheel && classes.bgned}
         ${classes.logged}`}
        >
          <Link to="/" className={classes.logo}>
            <img
              className={classes.navLogo}
              src={wheel ? "../pics/JOLblack.svg" : "../pics/JOL3.svg"}
              alt="logo"
            ></img>
          </Link>
          <div></div>
          {userInfo && (
            <h6 style={{ color: "#3776ff", fontSize: "1em" }}>
              Good morning {userInfo.name}
            </h6>
          )}
        </div>
      </Container>
    </nav>
  );
}
