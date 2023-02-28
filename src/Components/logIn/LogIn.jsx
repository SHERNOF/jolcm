import React, { useState } from "react";

import Card from "../UI/card/Card";

import classes from "./login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LogIn({ displayLogin }) {
  const [mySwitch, setmySwitch] = useState(false);
  const switchHandler = () => {
    console.log(mySwitch);
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
