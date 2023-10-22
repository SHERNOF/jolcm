import * as React from "react";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const wheel = useSelector((state) => state.wheel);

  return (
    <nav>
      <div
        className={`${classes.navContainer} ${wheel && classes.bgned}
         ${classes.logged}`}
      >
        <Link to="/" className={classes.logo}>
          <img
            className={classes.navLogo}
            src="../pics/JOL3.svg"
            alt="logo"
          ></img>
        </Link>

        {userInfo && (
          <h6 style={{ color: "#3776ff", fontSize: "1em" }}>
            Good morning {userInfo.name}
          </h6>
        )}
      </div>
    </nav>
  );
}
