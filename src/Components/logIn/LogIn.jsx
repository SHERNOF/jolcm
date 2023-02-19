import React from "react";
import classes from "./login.module.css";

export default function LogIn({ displayLogin }) {
  return (
    <>
      <div
        className={`${classes.logInContainer} ${
          displayLogin && classes.appear
        }`}
      >
        <form className={classes.logInContent}>
          <div className={classes.logInForm}>
            {/* <div className={classes.email}> */}
            <label htmlFor="email">Email</label>
            <input type="Email" email="email"></input>
            {/* </div> */}
            {/* <div className={classes.password}> */}
            <label htmlFor="password">Password</label>
            <input type="Text" name="password"></input>
            {/* </div> */}
            <div className={classes.ssinSsup}>
              <button type="submit">Sign In</button>
              <button type="submit">Sign Up</button>
            </div>
            {/* 
          <div className={classes.signInForm}>
            <div className={classes.name}>
              <label htmlFor="name">Name</label>
              <input type='Text' name="name"></input>
            </div>
            <div className={classes.lastName}>
              <label htmlFor="lastName">Last Name</label>
              <input type='Text' lastName="lastName"></input>
            </div>
            <div className={classes.email}>
              <label htmlFor="email">email</label>
              <input type='Email' name="email"></input>
            </div>
            <div className={classes.password}>
              <label htmlFor="password">password</label>
              <input type='Text' name="password"></input>
            </div>
            <div className={classes.ssinSsup}>
              <button type="submit">Sign Up</button>
            </div>
          </div> */}
          </div>
        </form>
      </div>
    </>
  );
}
