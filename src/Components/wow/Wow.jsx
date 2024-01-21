import { useEffect, useReducer, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";
import { useSelector } from "react-redux";
import { FaMessage } from "react-icons/fa6";
import Container from "../../UI/container/Container";
import { IoIosSave } from "react-icons/io";

export default function Word() {
  const [comment, setcomment] = useState("");

  const [verse, setverse] = useState("");
  const [inputVisible, setinputVisible] = useState(false);
  const [iconVisible, seticonVisible] = useState(true);
  const [verseInValid, setverseInValid] = useState(false);
  const [latest, setlatest] = useState({});
  // const [wowId, setwowId] = useState({});
  const userInfo = useSelector((state) => state.userInfo);
  const [{ wow, latestWow, error, loading, loadingCreateComment }, dispatch] =
    useReducer(rootReducer, {
      messages: {},
      error: "",
      loading: true,
      wow: [],
    });
  // console.log(userInfo);
  // console.log(comment);

  const verseBlurHandler = () => {
    if (verse.trim().length === 0) {
      setverseInValid(true);
    }
  };

  const verseFocusHandler = () => {
    setverseInValid(false);
  };

  useEffect(() => {
    const fetchWows = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const latestWow = await axios.get("/jol/latestWow");
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: latestWow.data });
        setlatest(latestWow.data[0]);
        // setwowId(latestWow.data[0]._id);
        console.log(latestWow);
      } catch (error) {
        dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
      }
    };
    fetchWows();
  }, []);

  const iconHandler = () => {
    setinputVisible(true);
    seticonVisible(false);
    // console.log(wowId)
  };

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
        `/jol/wow/${latest._id}/comments`,
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
      wow.comments.unshift(data.comment);
      dispatch({ type: "WOW_REFRESH", payload: latest });
      console.log(wow);
      // window.scrollTo({
      //   behavior: "smooth",
      //   top: commentsRef.current.offsetTop,
      // });
    } catch (error) {
      // ctxDispatch(setSnackbar(true, "error", getError(error)));
      dispatch({ type: "WOW_COMMENT_FAILED" });
    }
  };
  return (
    <div className={classes.wow}>
      <div className={classes.wowContainer}>
        <div className={classes.word}>
          <p style={{ fontSize: "1.1em", color: "rgb(0,0,0,.5)" }}>
            Words to Ponder by {latest.by} :
          </p>
        </div>

        <div className={classes.message}>
          <h6>
            {latest.verse} : {latest.wow}
          </h6>
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

        <div className={classes.commentContainer}>
          <div className={classes.commentsList}>
            <span style={{ marginBottom: "1rem" }}>Comments</span>

            <div className={classes.comments}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                repudiandae veritatis repellat.
              </p>
              <h6>Sherwin</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
