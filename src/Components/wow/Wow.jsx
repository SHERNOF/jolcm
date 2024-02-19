import { useEffect, useReducer, useRef, useState } from "react";
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
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export default function Word() {
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
    console.log("test");
  };

  useEffect(() => {
    const fetchLatestWow = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const latestWow = await axios.get(`/jol/latestWow/`);
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: latestWow.data[0] });
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

    try {
      const { data } = await axios.post(
        `/jol/wow/${latestWow._id}/comments`,
        { comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: "WOW_COMMENT_SUCCESS",
      });
      // ctxDispatch(
      //   setSnackbar(true, "success", "Review submitted successfully")
      // );
      latestWow.comments.unshift(data.reaction);
      dispatch({ type: "WOW_REFRESH", payload: latestWow });
      setcomment("");
      setinputVisible(false);
      seticonVisible(true);
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
            <div className={classes.ponder}>
              <h5 style={{ marginLeft: "0" }}>
                Words to Ponder - by {latestWow.by}
              </h5>
            </div>

            <div className={classes.latestWow}>
              <h4
                style={{
                  minWidth: "90%",
                  lineHeight: "2",
                  textAlign: "left",
                  margin: "0",
                  fontSize: ".8em",
                }}
              >
                {latestWow.verse} <br></br> {latestWow.wow}{" "}
              </h4>
              {userInfo && iconVisible && (
                <span onClick={iconHandler}>
                  <ModeCommentOutlinedIcon sx={{ fontSize: ".9em" }} /> Comment
                </span>
              )}
              {inputVisible && (
                <div className={classes.createComment}>
                  <Paper
                    component="form"
                    onSubmit={createCommentHandler}
                    sx={{
                      p: "4px 4px",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "1rem",
                      borderRadius: "20px",
                      maxWidth: "90%",
                    }}
                  >
                    <InputBase
                      className={classes.inputComment}
                      placeholder="Comments"
                      inputProps={{ "aria-label": "Comments" }}
                      value={comment}
                      onChange={(e) => setcomment(e.target.value)}
                      sx={{ marginLeft: "1rem", fontSize: ".5em" }}
                    />
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                    <IconButton
                      className={classes.saveComment}
                      type="submit"
                      disabled={loadingCreateComment}
                    >
                      <IoIosSave
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      />
                    </IconButton>
                    {loadingCreateComment && <Loading />}
                  </Paper>
                </div>
              )}
            </div>
          </div>

          <div className={classes.column2}>
            <div className={classes.commentContainer}>
              {latestWow.comments.length === 0 ? (
                <MessageBox>Be the first to react</MessageBox>
              ) : (
                <h5 className={classes.reactions}>Reactions</h5>
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
