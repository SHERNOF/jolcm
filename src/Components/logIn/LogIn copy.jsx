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
          <div
            // className={`${classes.switch} ${mySwitch && classes.switchChange}`}
            className={classes.switch}
          >
            <div
              className={`${classes.theSwitch} ${mySwitch && classes.anim}`}
              onClick={switchHandler}
            >
              {mySwitch ? "Sign In" : "Sign Up"}
            </div>
          </div>
        </div>

        {mySwitch ? <SignUp /> : <SignIn />}
      </Card>
    </>
  );
}
