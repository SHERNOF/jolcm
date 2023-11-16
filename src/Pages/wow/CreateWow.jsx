import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import Label from "../../UI/label/Label";
import classes from "./createWow.module.css";

export default function CreateWow() {
  const { search } = useLocation();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setemail] = useState("");
  const [emailInValid, setemailInValid] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordInValid, setpasswordInValid] = useState(false);
  const [background, setbackground] = useState(false);

  const onBlurHandler = () => {
    if (email.trim().length === 0) {
      setemailInValid(true);
      setbackground(false);
    }
  };

  const onFocusHandler = () => {
    setemailInValid(false);
    setbackground(true);
  };

  const passwordonBlurHandler = () => {
    if (password.trim().length === 0) {
      setpasswordInValid(true);
      setbackground(false);
    }
  };

  const passwordonFocusHandler = () => {
    setemailInValid(false);
    setbackground(true);
  };
  const createWowHandler = () => {};

  return (
    <Container>
      <div className={classes.createWow}>
        <div className={classes.createWowContent}>
          <form onSubmit={createWowHandler} className={classes.logInContent}>
            <div className={classes.signIn}>
              <Label style={{ color: "black" }} htmlFor="email">
                Email
              </Label>
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
        </div>
      </div>
    </Container>
  );
}
