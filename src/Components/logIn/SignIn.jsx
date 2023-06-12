import React, { useState } from "react";
import Button from "../UI/button/Button";
import Label from "../UI/label/Label";
import classes from "./signIn.module.css";

export default function SignIn() {
  const [email, setemail] = useState("");
  const [emailInValid, setemailInValid] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordInValid, setpasswordInValid] = useState(false);

  const onBlurHandler = () => {
    if (email.trim().length === 0) {
      setemailInValid(true);
    }
  };

  const passwordonBlurHandler = () => {
    if (password.trim().length === 0) {
      setpasswordInValid(true);
    }
  };

  const onFocusHandler = () => {
    setemailInValid(false);
  };
  const passwordonFocusHandler = () => {
    setpasswordInValid(false);
  };
  const signInHandler = (e) => {
    e.preventDefault();
    if (email.trim().length !== 0 && password.trim().length !== 0) {
    }
    const logInData = {
      email,
      password,
    };
    setemail("");
    setpassword("");
  };

  return (
    <form onSubmit={signInHandler} className={classes.logInContent}>
      <div className={classes.signIn}>
        <Label htmlFor="email">Email</Label>
        <input
          className={classes.input}
          id="email"
          type="email"
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onChange={(e) => setemail(e.target.value)}
          value={email}
          required
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !emailInValid ? "transparent" : "orange",
            transition: "all .5s",
          }}
        >
          Please enter a valid email
        </p>
        <Label htmlFor="password">Password</Label>
        <input
          className={classes.input}
          id="password"
          type="password"
          name="password"
          required
          onBlur={passwordonBlurHandler}
          onFocus={passwordonFocusHandler}
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !passwordInValid ? "transparent" : "orange",
            transition: "all .5s",
          }}
        >
          Please enter a valid password
        </p>

        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
}
