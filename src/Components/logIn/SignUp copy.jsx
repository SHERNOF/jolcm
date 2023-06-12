import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./signUp.module.css";

export default function SignUp() {
  const [usernameEntered, setusernameEntered] = useState("");
  const userNameEnteredHandler = (event) => {
    setusernameEntered(event.target.value);
  };
  const [nameEntered, setnameEntered] = useState("");
  const nameEnteredHandler = (event) => {
    setnameEntered(event.target.value);
  };
  const [emailEntered, setemailEntered] = useState("");
  const emailEnteredHandler = (event) => {
    setemailEntered(event.target.value);
  };

  const [passwordEntered, setpasswordEntered] = useState("");
  const passwordEnteredHandler = (event) => {
    setpasswordEntered(event.target.value);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (
      usernameEntered.trim().length === 0 ||
      nameEntered.trim().length === 0 ||
      emailEntered.trim().length === 0 ||
      passwordEntered.trim().length === 0
    ) {
      return;
    }

    setusernameEntered("");
    setnameEntered("");
    setemailEntered("");
    setpasswordEntered("");
  };

  // const signUpHandler = (e) => {
  //   e.preventDefault();
  //   const signUpData = {
  //     usernameEntered,
  //     nameEntered,
  //     emailEntered,
  //     passwordEntered,
  //   };
  //   console.log(signUpData);
  //   setusernameEntered("");
  //   setnameEntered("");
  //   setemailEntered("");
  //   setpasswordEntered("");
  // };

  return (
    <form onSubmit={signUpHandler} className={classes.logInContent}>
      <div className={classes.signUp}>
        <Label htmlFor="name">Name</Label>
        <Input
          value={nameEntered}
          onChange={nameEnteredHandler}
          type="text"
          name="name"
          required
          id="name"
        ></Input>

        <Label htmlFor="email">email</Label>
        <Input
          value={emailEntered}
          onChange={emailEnteredHandler}
          type="Email"
          name="email"
          required
          id="email"
        ></Input>

        <Label htmlFor="password">password</Label>
        <Input
          id="password"
          value={passwordEntered}
          onChange={passwordEnteredHandler}
          type="password"
          name="password"
          required
        ></Input>

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          value={confirmPassword}
          onChange={passwordEnteredHandler}
          type="password"
          name="password"
          required
        ></Input>

        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
}
