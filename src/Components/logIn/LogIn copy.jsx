import React, { useState } from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./login.module.css";

export default function LogIn({ displayLogin }) {
  const [logIn, setlogIn] = useState(false);

  const signUpHandler = () => {
    setlogIn(!logIn);
  };
  const signUp = (
    <Card className={classes.signInForm}>
      {/* <div className={classes.name}> */}
      <Label htmlFor="name">Name</Label>
      <Input type="Text" name="name"></Input>
      {/* </div> */}
      {/* <div className={classes.lastName}> */}
      <Label htmlFor="lastName">Last Name</Label>
      <Input type="Text" name="lastName"></Input>
      {/* </div> */}
      {/* <div className={classes.email}> */}
      <Label htmlFor="email">email</Label>
      <Input type="Email" name="email"></Input>
      {/* </div> */}
      {/* <div className={classes.password}> */}
      <Label htmlFor="password">password</Label>
      <Input type="Text" name="password"></Input>
      {/* </div> */}
      {/* <div className={classes.ssinSsup}> */}
      <Button type="submit">Sign Up</Button>
      {/* </div> */}
    </Card>
  );
  const signInSignUp = (
    <Card className={classes.logInForm}>
      <Label htmlFor="email">Email</Label>
      <Input type="Email" email="email"></Input>
      <Label htmlFor="password">Password</Label>
      <Input type="Text" name="password"></Input>
      <div className={classes.ssinSsup}>
        <Button type="submit">Sign In</Button>
        <Button onCLick={signUpHandler} type="submit">
          Sign Up
        </Button>
      </div>
    </Card>
  );

  return (
    <>
      <div
        className={`${classes.logInContainer} ${
          displayLogin && classes.appear
        }`}
      >
        <form className={classes.logInContent}>
          {logIn ? signUp : signInSignUp}
        </form>
      </div>
    </>
  );
}
