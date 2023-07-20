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
         `}
        >
          <Link to="/" className={classes.logo}>
            <img
              className={classes.navLogo}
              src={wheel ? "../pics/JOLblack.svg" : "../pics/JOL3.svg"}
              alt="logo"
            ></img>
          </Link>
          {/* <div
            style={{
              width: "20rem",
              border: "1px solid red",
            }}
          >
            {userInfo ? (
              <div style={{ display: "flex" }}>
                <p>{userInfo.name}</p>

                <Link to="/" onClick={logOutHandler}>
                  <p>SIGN OUT</p>
                </Link>
              </div>
            ) : (
              <Link to="/signin-page">
                <p>SIGN IN</p>
              </Link>
            )}
          </div> */}
        </div>
      </Container>
    </nav>
  );
}
