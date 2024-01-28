import { useEffect, useReducer, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";
import { useSelector } from "react-redux";
import { FaMessage } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";

export default function Word({ latestWow }) {
  const [comment, setcomment] = useState("");

  const [verse, setverse] = useState("");
  const [inputVisible, setinputVisible] = useState(false);
  const [iconVisible, seticonVisible] = useState(true);
  const [verseInValid, setverseInValid] = useState(false);

  const userInfo = useSelector((state) => state.userInfo);
  const [
    {
      // latestWow,
      error,
      loading,
      loadingWowRequest,
      loadingCreateComment,
    },
    dispatch,
  ] = useReducer(rootReducer, {
    error: "",
    loading: true,
    // latestWow: [],
  });
  console.log(latestWow.comments);

  const verseBlurHandler = () => {
    if (verse.trim().length === 0) {
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

  // useEffect(() => {
  //   const fetchLatestWow = async () => {
  //     dispatch({ type: "FETCH_WOW_REQUEST" });
  //     try {
  //       const result = await axios.get(`/jol/latestWow/`);
  //       dispatch({ type: "FETCH_WOW_SUCCESS", payload: result.data[0] });
  //       console.log(result);
  //     } catch (error) {
  //       dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
  //     }
  //   };
  //   fetchLatestWow();
  // }, []);

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
        { comment },
        // { comment, name: userInfo.name },
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
      latestWow.comments.push(data.reaction);
      dispatch({ type: "WOW_REFRESH", payload: latestWow });
      setcomment("");
      // setinputVisible(false);

      // window.scrollTo({
      //   behavior: "smooth",
      //   top: commentsRef.current.offsetTop,
      // });
    } catch (error) {
      // ctxDispatch(setSnackbar(true, "error", getError(error)));
      dispatch({ type: "WOW_COMMENT_FAILED" });
      console.log("cannot");
    }
  };

  return (
    <div className={classes.wow}>
      {loadingWowRequest ? (
        <Loading />
      ) : error ? (
        <MessageBox />
      ) : (
        <div className={classes.wowContainer}>
          <div className={classes.word}>
            <p style={{ fontSize: "1.1em", color: "rgb(0,0,0,.5)" }}>
              Words to Ponder by {latestWow.by} :
            </p>
          </div>

          <div className={classes.message}>
            <h6>
              {latestWow.verse} : {latestWow.wow}
            </h6>

            <div className={classes.commentContainer}>
              <div className={classes.commentsList}>
                <span style={{ marginBottom: "1rem" }}>Comments</span>

                {/* {loadingCreateComment ? (
                <Loading />
              ) : error ? (
                <MessageBox />
              ) : ( */}
                <div className={classes.comments}>
                  {latestWow.comments.map((x) => (
                    <p key={x._id}>{x.comment}</p>
                  ))}
                  {/* <h6>Sherwin</h6> */}
                </div>
                {/* )} */}
              </div>
            </div>
            <div className={classes.iconContainer}>
              {userInfo && iconVisible && (
                <FaMessage
                  onClick={iconHandler}
                  type="submit"
                  className={classes.createCommentButton}
                />
              )}
              {userInfo && inputVisible && (
                <form style={{}}>
                  <input
                    placeholder="Comment"
                    type="text"
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                  ></input>
                  <i>
                    <IoIosSave
                      type="submit"
                      className={classes.saveButton}
                      onClick={createCommentHandler}
                    />
                  </i>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
