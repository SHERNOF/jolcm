import React, { useState } from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./login.module.css";

export default function LogIn({ displayLogin }) {
  const [aignUpButton, setaignUpButton] = useState(false);
  const signUp = (
    <Card className={classes.signUp}>
      {/* <div className={classes.optionContainer}>
        <option>Test</option>
      </div> */}
      <Label htmlFor="name">Name</Label>
      <Input type="Text" name="name"></Input>

      <Label htmlFor="lastName">Last Name</Label>
      <Input type="Text" lastName="lastName"></Input>

      <Label htmlFor="email">email</Label>
      <Input type="Email" name="email"></Input>

      <Label htmlFor="password">password</Label>
      <Input type="Text" name="password"></Input>

      <Button type="submit">Sign Up</Button>
    </Card>
  );
  const signIn = (
    <Card className={classes.signIn}>
      {/* <div className={classes.optionContainer}>test</div> */}
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
        <form className={classes.logInContent}>{signUp}</form>
      </div>
    </>
  );
}
