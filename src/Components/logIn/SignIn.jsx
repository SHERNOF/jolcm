import React, { useEffect, useState } from "react";
import Button from "../../UI/button/Button";
import Label from "../../UI/label/Label";
import classes from "./signIn.module.css";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../../store/constants";

export default function SignIn() {
  const { search } = useLocation();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/admin";

  const [email, setemail] = useState("");
  const [emailInValid, setemailInValid] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordInValid, setpasswordInValid] = useState(false);
  const [background, setbackground] = useState(false);
  console.log(background);

  const onBlurHandler = () => {
    if (email.trim().length === 0) {
      setemailInValid(true);
    }
    setbackground(false);
  };

  const passwordonBlurHandler = () => {
    if (password.trim().length === 0) {
      setpasswordInValid(true);
    }
  };

  const onFocusHandler = () => {
    setemailInValid(false);
    setbackground(true);
    console.log("focused");
  };
  const passwordonFocusHandler = () => {
    setpasswordInValid(false);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      if (email.trim().length !== 0 && password.trim().length !== 0) {
        dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
        const { data } = await Axios.post("/jol/users/signin", {
          email,
          password,
        });

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      }
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
      alert("Invalid username or password");
    }
    setemail("");
    setpassword("");
  };

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
          className={`${classes.input} ${background && classes.focused}`}
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
          className={`${classes.input} ${background && classes.focused}`}
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

/*
I. create the sign In Component
2. define the submitHandler. This is to post the email and password to /jol/users/signin api.
2a. dispathch the USERS_SIGNIN_REQUEST with the payload of email and password posted to /jol/users/signin api and checked if present in mongo DB
2b. dispatch the USERS_SIGNIN_SUCCESS after the request. This dispatch will save the data found from mongoDB to local storage 
2c. use useNavigate (react-router-dom) to redirect to Admin page if login is successful
2d. USER_SIGNIN_FAIL, if there's wrong password or error in connection 
3. installed redux-thunk for async request
4. implemented the const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose. This is to see the redux and state movemnet for debuggng purposes


Issue Encountered
- SignIn is succesful. it can get the userInfo and can be save to local storage. However the Admin page immediately unmounted in a very first scroll of the mouse.
- it was later found out that the cause of the issue is the CHANGE_HL and CHANGE_HD state. this is the state that defines the logo and background color of the header.

Solution
- I ended up adding an if statement in eventHandler(). if !userInfo then don't execute the eventHandler(). the SIGNIN functionality persist then
- Another solution is to transfer the eventhandler() in the <Home /> as I only needed the changing of colors of Header in the <Home />


*/
