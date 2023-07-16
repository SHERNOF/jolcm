import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from "../../store/constants";
import Button from "../UI/button/Button";
import Label from "../UI/label/Label";
import classes from "./signin.module.css";

export default function Signin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const dispatch = useDispatch();
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
        const { data } = await Axios.post("/jol/users/signin", {
          email,
          password,
        });
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      }
    } catch (err) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: err.message });
      alert("Invalid username or password");
    }
    // setemail("");
    // setpassword("");
  };
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
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

        <Button type="submit">SIGN IN</Button>
      </div>
      <div className="mb-3">
        New customer?{" "}
        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
      </div>
    </form>
  );
}
