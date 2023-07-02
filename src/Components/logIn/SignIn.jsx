import { Link } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import Button from "../UI/button/Button";
import Label from "../UI/label/Label";
import classes from "./signIn.module.css";
import { rootReducer } from "../../store/reducers";
import logger from "use-reducer-logger";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      if (email.trim().length !== 0 && password.trim().length !== 0) {
        const { data } = await axios.post("/jol/users/signin", {
          email,
          password,
        });
        dispatch({ type: "USERS_SIGNIN", payload: data });
        localStorage.setItem("users", JSON.stringify(data));
        navigate(redirect || "/");
        console.log(data);
      }
    } catch (err) {
      // <p>Invalid username or password</p>;
      alert("Invalid username or password");
    }

    setemail("");
    setpassword("");
  };

  return (
    <form onSubmit={signInHandler} className={classes.logInContent}>
      <Link to={`/jol/`}></Link>
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

        <Button type="submit">
          {/* <Link to={`/jol/${users.data[0]._id}`}>Sign In</Link> */}TEST
        </Button>
      </div>
    </form>
  );
}
