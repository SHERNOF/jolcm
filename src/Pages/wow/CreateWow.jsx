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
import { getError } from "../../utils";

export default function CreateWow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);
  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [verse, setverse] = useState("");
  const [verseInValid, setverseInValid] = useState(false);
  const [wow, setwow] = useState("");
  const [wowInValid, setwowInValid] = useState(false);
  const [by, setby] = useState("");
  const [byInValid, setbyInValid] = useState(false);
  const [dateShared, setdateShared] = useState("");
  const [dateSharedInValid, setdateSharedInValid] = useState(false);

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

  const dateSharedonBlurHandler = () => {
    if (dateShared.trim().length === 0) {
      setdateSharedInValid(true);
    }
  };

  const dateSharedonFocusHandler = () => {
    setdateSharedInValid(false);
  };

  const createWowHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        verse.trim().length !== 0 &&
        wow.trim().length !== 0 &&
        by.trim().length !== 0 &&
        dateShared.trim().length !== 0
      ) {
        dispatch({
          type: WOW_POST_REQUEST,

          payload: {
            verse,
            wow,
            by,
            dateShared,
          },
        });
        const { data } = await axios.post(
          "/jol/wow",
          {
            verse,
            wow,
            by,
            dateShared,
          },

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: WOW_POST_SUCCESS, payload: data });
        localStorage.setItem("wow", JSON.stringify(data));
        navigate(redirect || "/");
        console.log(data);
      }
    } catch (error) {
      // dispatch({ type: WOW_POST_FAILED, payload: error.message });
      dispatch({ type: WOW_POST_FAILED, payload: getError(error) });
      alert(error);
    }
    setverse("");
    setwow("");
    setby("");
    setdateShared("");
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
            <input
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
            ></input>
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

            <Label htmlFor="dateShared">Date Shared: </Label>
            <input
              id="dateShared"
              type="date"
              name="dateShared"
              required
              onBlur={dateSharedonBlurHandler}
              onFocus={dateSharedonFocusHandler}
              onChange={(e) => setdateShared(e.target.value)}
              value={dateShared}
            ></input>
            <p style={{ color: !dateSharedInValid ? "transparent" : "salmon" }}>
              Please enter the date the message was shared
            </p>

            <Button type="submit">Create</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
