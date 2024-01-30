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
import TextInput from "../../UI/textInput/TextInput";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';

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
        bottom: reactionsRef.current.offsetBottom,
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
          </div>

            <div className={classes.commentContainer}>
              <div className={classes.createComment}>
                
                  <Paper
                    component="form"
                    onSubmit={createCommentHandler} 
                    sx={{ 
                      p: '10px 4px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      width: 'auto'
                    }}
                  >
                    <InputBase
                      sx={{ width:'90%' }}
                      placeholder="Comments"
                      inputProps={{ 'aria-label': 'Comments' }}
                      value={comment}
                      onChange={(e) => setcomment(e.target.value)}
                    />

                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{  width:'10%' }} aria-label="directions" type="submit" >
                      <IoIosSave
                        style={{  fontSize:'1.5rem'}}
                        />
                    </IconButton>
                  </Paper>
                  {loading && <Loading />}        
              </div>

              

              <div className={classes.comments}>
                <h4  style={{marginTop:'2rem', textAlign: 'left'}} ref={reactionsRef}>Reactions</h4>
                <div>
                  {latestWow.comments.length === 0 && <MessageBox>Be the first to react</MessageBox>}
                </div>
                {latestWow.comments.map((x) => (
                  <div key={x._id} className={classes.commentsList}>
                    <div >{x.comment}</div> 
                    <div >{x.name}</div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
