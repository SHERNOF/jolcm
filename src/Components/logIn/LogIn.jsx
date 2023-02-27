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
          <label htmlFor="switch" className={classes.swicthLabel}>
            <input
              type="checkbox"
              id="switch"
              className={classes.switchInput}
            ></input>
            <div className={classes.switchFilled}>
              {/* {mySwitch ? "Sign In" : "Sign Up"} */}
            </div>
          </label>
        </div>
        <SignIn />
      </Card>
    </>
  );
}
