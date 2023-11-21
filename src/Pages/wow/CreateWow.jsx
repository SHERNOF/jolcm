import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import Label from "../../UI/label/Label";
import classes from "./createWow.module.css";
import {
  WOW_POST_REQUEST,
  WOW_POST_SUCCESS,
  WOW_POST_FAILED,
} from "../../store/constants";
import axios from "axios";

export default function CreateWow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [verse, setverse] = useState("");
  const [verseInValid, setverseInValid] = useState(false);
  const [wow, setwow] = useState("");
  const [wowInValid, setwowInValid] = useState(false);
  const [by, setby] = useState("");
  const [byInValid, setbyInValid] = useState(false);
  console.log(verse);
  console.log(by);
  console.log(wow);

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

  const byonBlurHandler = () => {
    if (by.trim().length === 0) {
      setbyInValid(true);
    }
  };

  const byonFocusHandler = () => {
    setbyInValid(false);
  };

  const createWowHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        verse.trim().length !== 0 &&
        wow.trim().length !== 0 &&
        by.trim().length !== 0
      ) {
        dispatch({
          type: WOW_POST_REQUEST,
          payload: {
            verse,
            wow,
            by,
          },
        });
        const { data } = await axios.post("/jol/wow", {
          verse,
          wow,
          by,
        });
        dispatch({ type: WOW_POST_SUCCESS, payload: data });
        localStorage.setItem("wow", JSON.stringify(data));
        navigate(redirect || "/");
        console.log(data);
      }
    } catch (error) {
      dispatch({ type: WOW_POST_FAILED, payload: error.message });
      alert("Please enter information for each field");
    }
    setverse("");
    setwow("");
    setby("");
    console.log("test");
  };

  return (
    <Container>
      <div className={classes.createWow}>
        <div className={classes.wowCreateTitle}>Create Word of the Week</div>
        <div className={classes.createWowContent}>
          <form onSubmit={createWowHandler} className={classes.logInContent}>
            <Label style={{ color: "black" }} htmlFor="wow">
              Verse for the Week
            </Label>
            <input
              id="verse"
              type="verse"
              onBlur={verseBlurHandler}
              onFocus={verseFocusHandler}
              onChange={(e) => setverse(e.target.value)}
              value={verse}
              required
            ></input>
            <p style={{ color: !verseInValid ? "transparent" : "salmon" }}>
              Please enter a valid bible verse
            </p>

            <Label style={{ color: "black" }} htmlFor="wow">
              Word for the Week
            </Label>
            <textarea
              id="wow"
              type="wow"
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              onChange={(e) => setwow(e.target.value)}
              value={wow}
              required
              style={{
                height: "10rem",
              }}
            ></textarea>
            <p style={{ color: !wowInValid ? "transparent" : "salmon" }}>
              Please enter a valid message
            </p>
            <Label htmlFor="by">Delivered By: </Label>
            <input
              id="by"
              type="by"
              name="by"
              required
              onBlur={byonBlurHandler}
              onFocus={byonFocusHandler}
              onChange={(e) => setby(e.target.value)}
              value={by}
            ></input>
            <p style={{ color: !byInValid ? "transparent" : "salmon" }}>
              Please enter the Pastor's name
            </p>

            <Button type="submit">Create</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
