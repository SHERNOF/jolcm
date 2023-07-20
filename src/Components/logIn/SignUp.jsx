import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../../store/constants";
import Button from "../UI/button/Button";

import Label from "../UI/label/Label";
import classes from "./signUp.module.css";

export default function SignUp() {
  const [name, setname] = useState("");
  const [nameInValid, setnameInValid] = useState(false);
  const [logInEmail, setlogInEmail] = useState("");
  const [logInEmailInValid, setlogInEmailInValid] = useState(false);
  const [logInPassword, setlogInPassword] = useState("");
  const [logInPasswordInValid, setlogInPasswordInValid] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmPasswordInValid, setconfirmPasswordInValid] = useState(false);

  const nameOnBlur = () => {
    if (name.trim().length === 0) {
      setnameInValid(true);
    }
  };
  const nameOnFocus = () => {
    setnameInValid(false);
  };
  const logInEmailOnBlur = () => {
    if (logInEmail.trim().length === 0) {
      setlogInEmailInValid(true);
    }
  };
  const logInEmailOnFocus = () => {
    setlogInEmailInValid(false);
  };
  const logInPasswordOnBlur = () => {
    if (logInPassword.trim().length === 0) {
      setlogInPasswordInValid(true);
    }
  };
  const logInPasswordOnFocus = () => {
    setlogInPasswordInValid(false);
  };

  const confirmPasswordOnBlur = () => {
    if (confirmPassword.trim().length === 0) {
      setconfirmPasswordInValid(true);
    }
  };
  const confirmPasswordOnFocus = () => {
    setconfirmPasswordInValid(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/admin";

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      if (logInEmail.trim().length !== 0 && logInPassword.trim().length !== 0) {
        dispatch({
          type: USER_SIGNUP_REQUEST,
          payload: { name, logInEmail, logInPassword },
        });
        const { data } = await axios.post("/jol/users/signup", {
          name,
          logInEmail,
          logInPassword,
        });

        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      }
    } catch (error) {
      dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
      alert("Invalid username or password");
    }
    setname("");
    setlogInEmail("");
    setlogInPassword("");
    setconfirmPassword("");
  };

  return (
    <form onSubmit={signUpHandler} className={classes.logInContent}>
      <div className={classes.signUp}>
        <Label htmlFor="name">Name</Label>
        <input
          className={classes.input}
          value={name}
          onChange={(e) => setname(e.target.value)}
          onBlur={nameOnBlur}
          onFocus={nameOnFocus}
          type="text"
          name="name"
          required
          id="name"
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !nameInValid ? "transparent" : "orange",
            transition: "all .5s",
          }}
        >
          Please enter a valid name
        </p>

        <Label htmlFor="email">Email</Label>
        <input
          className={classes.input}
          value={logInEmail}
          onChange={(e) => setlogInEmail(e.target.value)}
          onBlur={logInEmailOnBlur}
          onFocus={logInEmailOnFocus}
          type="email"
          name="email"
          required
          id="email"
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !logInEmailInValid ? "transparent" : "orange",

            transition: "all .5s",
          }}
        >
          Please enter a valid email
        </p>

        <Label htmlFor="password">Password</Label>
        <input
          className={classes.input}
          id="password"
          value={logInPassword}
          onChange={(e) => setlogInPassword(e.target.value)}
          onBlur={logInPasswordOnBlur}
          onFocus={logInPasswordOnFocus}
          type="password"
          name="password"
          required
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !logInPasswordInValid ? "transparent" : "orange",

            transition: "all .5s",
          }}
        >
          Please enter a valid password
        </p>

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <input
          id="confirmPassword"
          className={classes.input}
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          onBlur={confirmPasswordOnBlur}
          onFocus={confirmPasswordOnFocus}
          type="password"
          name="confirmPassword"
          required
        ></input>
        <p
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "90%",
            fontSize: "0.6em",
            marginTop: "0.5rem",
            color: !confirmPasswordInValid ? "transparent" : "orange",
            transition: "all .5s",
          }}
        >
          Password should match
        </p>

        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
}

/*
1. create the validations
2. create the model and router for posting the signup data at userRouter.js
  2a. const createdUser = await user.save() >>> this will save the regiestered user to createdUser

  3. setup the reducer


*/
