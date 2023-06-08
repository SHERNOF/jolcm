import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import classes from "./signIn.module.css";

export default function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [enteredEmail, setenteredEmail] = useState(false);
  const [enteredPassword, setenteredpassword] = useState(false);

  const signInHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      console.log("testing");
      setenteredEmail(true);
    } else if (email.trim().length !== 0) {
      setenteredEmail(false);
    } else {
      const signInData = {
        email,
      };
      console.log(signInData);
      setemail("");
    }

    //   if (email.trim().length === 0 || password.trim().length === 0) {
    //     setenteredEmail(true);
    //     setenteredpassword(true);
    //   } else {
    //     const signInData = {
    //       email,
    //       password,
    //     };
    //     console.log(signInData);
    //     setemail("");
    //     setpassword("");
    //   }
    // };
    // const passwordFocusHandler = () => {
    //   console.log("focus");
    //   setenteredEmail(false);
  };
  return (
    <form onSubmit={signInHandler} className={classes.logInContent}>
      <div className={classes.signIn}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          email="email"
          required
          onChange={(e) => setemail(e.target.value)}
          value={email}
          style={{
            backGround: enteredEmail ? "red" : "green",
            zIndex: "1",
          }}
        ></Input>
        {enteredEmail && (
          <p
            style={{
              textAlign: "left",
              display: "inline-block",
              width: "90%",
              fontSize: ".6em",
              marginTop: ".5rem",
              color: "orange",
            }}
          >
            Please enter a valid email
          </p>
        )}
        <Label htmlFor="password">Password</Label>
        <Input
          // onFocus={passwordFocusHandler}
          id="password"
          type="Text"
          name="password"
          required
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        ></Input>
        {enteredPassword && (
          <p
            style={{
              textAlign: "left",
              display: "inline-block",
              width: "90%",
              fontSize: ".6em",
              marginTop: ".5rem",
              color: "orange",
            }}
          >
            Please enter a valid email
          </p>
        )}

        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
}
