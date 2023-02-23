import React, { useState } from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./login.module.css";

export default function LogIn({ displayLogin }) {
  const [enteredUserName, setenteredUserName] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const userNameEnteredHandler = (event) => {
    setenteredUserName(event.target.value);
    console.log(enteredUserName);
  };
  const nameEnteredHandler = (event) => {
    setname(event.target.value);
  };

  const emailEnteredHandler = (event) => {
    setemail(event.target.value);
  };
  const passwordEnteredHandler = (event) => {
    setpassword(event.target.value);
  };
  const signUpHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, name, email, password);
  };

  const signUp = (
    <Card className={classes.signUp}>
      <Label htmlFor="username">Last Name</Label>
      <Input
        onChange={userNameEnteredHandler}
        type="Text"
        name="username"
      ></Input>

      <Label htmlFor="name">Name</Label>
      <Input onChange={nameEnteredHandler} type="Text" name="name"></Input>

      <Label htmlFor="email">email</Label>
      <Input onChange={emailEnteredHandler} type="Email" name="email"></Input>

      <Label htmlFor="password">password</Label>
      <Input
        onChange={passwordEnteredHandler}
        type="Text"
        name="password"
      ></Input>

      <Button type="submit">Sign Up</Button>
    </Card>
  );
  const signIn = (
    <Card className={classes.signIn}>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" email="email"></Input>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="Text" name="password"></Input>

      <Button type="submit">Sign In</Button>
    </Card>
  );

  return (
    <>
      <div
        className={`${classes.logInContainer} ${
          displayLogin && classes.appear
        }`}
      >
        <form onSubmit={signUpHandler} className={classes.logInContent}>
          {signUp}
        </form>
      </div>
    </>
  );
}
