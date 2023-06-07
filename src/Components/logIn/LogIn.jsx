import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/card/Card";

import classes from "./login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LogIn() {
  const displayLogin = useSelector((state) => state.displayLogin);

  const [mySwitch, setmySwitch] = useState(false);
  const switchHandler = () => {
    setmySwitch(!mySwitch);
  };
  return (
    <>
      <Card
        className={`${classes.logInContainer} ${
          displayLogin && classes.appear
        }`}
      >
        <div className={classes.switchContainer}>
          <input
            type="checkbox"
            name="switcher"
            className={classes.switcher}
            onClick={switchHandler}
          ></input>
        </div>
        {mySwitch ? <SignIn /> : <SignUp />}
      </Card>
    </>
  );
}
