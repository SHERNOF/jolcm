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
  return (
    <form onSubmit={signUpHandler} className={classes.logInContent}>
      <div className={classes.signUp}>
        <Label htmlFor="username">Last Name</Label>
        <Input
          onChange={userNameEnteredHandler}
          type="text"
          name="username"
          value={usernameEntered}
        ></Input>

        <Label htmlFor="name">Name</Label>
        <Input
          value={nameEntered}
          onChange={nameEnteredHandler}
          type="Text"
          name="name"
        ></Input>

        <Label htmlFor="email">email</Label>
        <Input
          value={emailEntered}
          onChange={emailEnteredHandler}
          type="Email"
          name="email"
        ></Input>

        <Label htmlFor="password">password</Label>
        <Input
          value={passwordEntered}
          onChange={passwordEnteredHandler}
          type="Text"
          name="password"
        ></Input>

        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
}
