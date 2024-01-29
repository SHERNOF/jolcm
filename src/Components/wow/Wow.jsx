import { useEffect, useReducer, useRef, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";
import { useSelector } from "react-redux";
import { FaMessage } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";
import { Button } from "@mui/material";

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
    console.log('test')
    try {
      const { data } = await axios.post(
        `/jol/wow/${latestWow._id}/comments`,
        // { comment },
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
      // setinputVisible(false);

      window.scrollTo({
        behavior: "smooth",
        top: reactionsRef.current.offsetTop,
      });
    } catch (error) {
      // ctxDispatch(setSnackbar(true, "error", getError(error)));
      dispatch({ type: "WOW_COMMENT_FAILED" });
      console.log("cannot");
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
                {/* <span style={{ marginBottom: "1rem" }}>Comments</span> */}

                <div className={classes.iconContainer}>
              {/* {userInfo && iconVisible && (
                <FaMessage
                  onClick={iconHandler}
                  type="submit"
                  className={classes.createCommentButton}
                />
              )} */}
            
              {userInfo && 
              // inputVisible && 
              (
                <form onSubmit={createCommentHandler}>
                    <div  style={{
                  width:'100%',
                  height:'5rem',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  // border:'1px solid green',
                  borderRadius:'5px'
                }}>
                  <input
                    placeholder="Comment"
                    type="text"
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                    style={{width:'90%', height:'4rem', borderRadius:'5px'}}
                  ></input>

  
                  <div style={{width:'10%', height:'4rem', display:'flex', justifyContent:'flex-start', alignItems:'center', }}>
                  <button   type="submit" disabled={loading} style={{
                    border:'none',
                    background:'none',
                    }}>  
                  <IoIosSave
                     className={classes.saveButton}
                      type="submit" 
                    />
                  </button>
                  </div>
                  {loading && <Loading />}
                  </div>
                </form>
              )}
              </div>
              

                <div className={classes.comments}>
                  <h4  style={{marginTop:'2rem', textAlign: 'left'}} ref={reactionsRef}>Reactions</h4>
                  <div>
                    {latestWow.comments.length === 0 && <MessageBox>Be the first to react</MessageBox>}
                  </div>
                  {latestWow.comments.map((x) => (
                    <div key={x._id}>
                      <p>{x.comment}</p>
                      <h6>{x.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            </div>
          </div>
   
      )}
    </div>
  );
}
