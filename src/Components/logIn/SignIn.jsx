import React from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./signIn.module.css";

export default function SignIn() {
  const signInHandler = () => {};
  return (
    <form onSubmit={signInHandler} className={classes.logInContent}>
      <div className={classes.signIn}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" email="email"></Input>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="Text" name="password"></Input>

        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
}
