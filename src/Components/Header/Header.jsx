import React from "react";
import Container from "../common/container/Container";
import classes from "./header.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const userInfo = useSelector((state) => state.userInfo);
  const wheel = useSelector((state) => state.wheel);

  // const [hamburger, sethamburger] = useState(false);
  // const test = () => {
  //   sethamburger(!hamburger);
  // };

  return (
    <nav>
      <Container>
        <div className={`${classes.navContainer} ${wheel && classes.bgned}`}>
          <Link to="/" className={classes.logo}>
            <img
              className={classes.navLogo}
              src={wheel ? "../pics/JOLblack.svg" : "../pics/JOL3.svg"}
              alt="logo"
            ></img>
          </Link>
          <div
            style={{
              width: "10rem",
            }}
          >
            {userInfo ? <p>Good day {userInfo.name}</p> : <p>no user</p>}
          </div>
        </div>
      </Container>
    </nav>
  );
}
