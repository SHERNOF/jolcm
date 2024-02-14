import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";
import { useSelector } from "react-redux";
import { IoIosSave } from "react-icons/io";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "../../UI/button/Button";

export default function Word() {
  let reactionsRef = useRef();
  const [comment, setcomment] = useState("");

  const [verse, setverse] = useState("");
  const [inputVisible, setinputVisible] = useState(false);
  const [iconVisible, seticonVisible] = useState(true);
  const [verseInValid, setverseInValid] = useState(false);

  const userInfo = useSelector((state) => state.userInfo);
  const [
    { latestWow, error, loading, loadingWowRequest, loadingCreateComment },
    dispatch,
  ] = useReducer(rootReducer, {
    error: "",
    loading: true,
    latestWow: [],
  });

  const verseBlurHandler = () => {
    if (verse.trim().length === 128) {
      setverseInValid(true);
    }
  };

  const verseFocusHandler = () => {
    setverseInValid(false);
  };

  const iconHandler = () => {
    setinputVisible(true);
    seticonVisible(false);
  };

  useEffect(() => {
    const fetchLatestWow = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const latestWow = await axios.get(`/jol/latestWow/`);
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: latestWow.data[0] });
        console.log(latestWow);
      } catch (error) {
        dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
      }
    };
    fetchLatestWow();
  }, []);

  const createCommentHandler = async (e) => {
    e.preventDefault();
    // if (!comment || !rating) {
    //   ctxDispatch(
    //     setSnackbar(true, "error", "Please enter comment and rating")
    //   );
    //   return;
    // }

    console.log("test");
    try {
      const { data } = await axios.post(
        `/jol/wow/${latestWow._id}/comments`,
        // { comment },
        { comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      alert("nice");
      dispatch({
        type: "WOW_COMMENT_SUCCESS",
      });
      // ctxDispatch(
      //   setSnackbar(true, "success", "Review submitted successfully")
      // );
      latestWow.comments.unshift(data.reaction);
      dispatch({ type: "WOW_REFRESH", payload: latestWow });
      setcomment("");
    } catch (error) {
      // ctxDispatch(setSnackbar(true, "error", getError(error)));
      dispatch({ type: "WOW_COMMENT_FAILED" });
      alert(error);
    }
  };

  return (
    <div className={classes.wow}>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox />
      ) : (
        <div className={classes.wowContainer}>
          <div className={classes.column1}>
            <div
              style={{
                width: "100%",
                // border:'1px solid blue',
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <h6 style={{ color: "rgb(0,0,0,.5)" }}>
                Words to Ponder - by {latestWow.by}
              </h6>
            </div>

            <div
              style={{
                width: "100%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border:'1px solid green',
              }}
            >
              <h6
                style={{ maxWidth: "90%", lineHeight: "2", textAlign: "left" }}
              >
                {latestWow.verse} <br></br> {latestWow.wow}
              </h6>
            </div>
            {userInfo && (
              <div className={classes.createComment}>
                <Paper
                  component="form"
                  onSubmit={createCommentHandler}
                  sx={{
                    p: "4px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InputBase
                    className={classes.inputComment}
                    placeholder="Comments"
                    inputProps={{ "aria-label": "Comments" }}
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  {/* <IconButton
                    className={classes.saveComment}
                    type="submit"
                  >
                    <IoIosSave  style={{ fontSize: "1.5rem", cursor:'pointer'  }} />
                  </IconButton> */}
                  <Button type="submit" style={{ cursor: "pointer" }}>
                    Submit
                  </Button>
                </Paper>
                {loading && <Loading />}
              </div>
            )}
          </div>

          <div className={classes.column2}>
            <div className={classes.commentContainer}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: ".8em",
                  padding: "1rem 1rem",
                }}
              >
                Reactions
              </div>
              {latestWow.comments.length === 0 && (
                <MessageBox>Be the first to react</MessageBox>
              )}

              {latestWow.comments.map((x) => (
                <div className={classes.comments} key={x._id}>
                  <div className={classes.comments1}>
                    <div className={classes.iContainer}>{x.name.charAt(0)}</div>
                  </div>

                  <div className={classes.comments2}>
                    <span style={{ color: "rgba(128,128,128,.8)" }}>
                      {x.name}
                    </span>

                    <span style={{ color: "rgba(0,0,0,.9)" }}>{x.comment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
