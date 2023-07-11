import React, { useEffect, useState } from "react";
import Button from "../UI/button/Button";
import Label from "../UI/label/Label";
import classes from "./signIn.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      }
    } catch (err) {
      alert("Invalid username or password");
    }

    setemail("");
    setpassword("");
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [navigate, userInfo, redirect]);

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

/*
I. create the sign In Component
2. define the submitHandler. This is to post the email and password to /jol/users/signin api.
3. dispathch the USERS_SIGN with the oayload of data which is from mongoDB
4. save the data to localStorage
5. use useNavigate (react-router-dom) to redirect to Admin page if login is successful
6. 


*/
