import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import Label from "../../UI/label/Label";
import classes from "./createWow.module.css";

export default function CreateWow() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [verse, setverse] = useState("");
  const [verseInValid, setverseInValid] = useState(false);
  const [wow, setwow] = useState("");
  const [wowInValid, setwowInValid] = useState(false);
  const [pastor, setpastor] = useState("");
  const [pastorInValid, setpastorInValid] = useState(false);

  const verseBlurHandler = () => {
    if (verse.trim().length === 0) {
      setverseInValid(true);
    }
  };

  const verseFocusHandler = () => {
    setverseInValid(false);
  };
  const onBlurHandler = () => {
    if (wow.trim().length === 0) {
      setwowInValid(true);
    }
  };
  const onFocusHandler = () => {
    setwowInValid(false);
  };

  const pastoronBlurHandler = () => {
    if (pastor.trim().length === 0) {
      setpastorInValid(true);
    }
  };

  const pastoronFocusHandler = () => {
    setpastorInValid(false);
  };

  const createWowHandler = () => {};

  return (
    <Container>
      <div className={classes.createWow}>
      <div className={classes.wowCreateTitle} >Create Word of the Week</div>

        <div className={classes.createWowContent}>
      <form onSubmit={createWowHandler} className={classes.logInContent}>
      <Label style={{ color: "black" }} htmlFor="wow">Verse for the Week</Label>
              <input
                id="verse"
                type="verse"
                onBlur={verseBlurHandler}
                onFocus={verseFocusHandler}
                onChange={(e) => setverse(e.target.value)}
                value={verse}
                required
              ></input>
              <p style={{color:!verseInValid ? 'transparent' : 'salmon'}}>
                Please enter a valid bible verse
              </p>
            
              <Label style={{ color: "black" }} htmlFor="wow">
                Word for the Week
              </Label>
              <input
                id="wow"
                type="wow"
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                onChange={(e) => setwow(e.target.value)}
                value={wow}
                required
              ></input>
              <p style={{color: !wowInValid ? 'transparent' : 'salmon'}}>
                Please enter a valid message
              </p>
              <Label htmlFor="pastor">Delivered By: </Label>
              <input
                id="pastor"
                type="pastor"
                name="pastor"
                required
                onBlur={pastoronBlurHandler}
                onFocus={pastoronFocusHandler}
                onChange={(e) => setpastor(e.target.value)}
                value={pastor}
              ></input>
              <p style={{color: !pastorInValid ? 'transparent' : 'salmon'}}>
                Please enter the Pastor's name
              </p>

              <Button type="submit">Sign In</Button>
            
          </form>
        </div>
      </div>
    </Container>
  );
}
