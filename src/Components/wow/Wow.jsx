import { useEffect, useReducer, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";
import { useSelector } from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";

export default function Word() {
  const [verse, setverse] = useState("");
  const [verseInValid, setverseInValid] = useState(false);
  const  userInfo = useSelector((state)=> state.userInfo)
  const [{ wows, error, loading }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
  });

  const verseBlurHandler = () => {
    if (verse.trim().length === 0) {
      setverseInValid(true);
    }
  };

  const verseFocusHandler = () => {
    setverseInValid(false);
  };

  const [last, setlast] = useState({});
  useEffect(() => {
    const fetchWows = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const wows = await axios.get("/jol/wows");
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: wows.data });
        setlast(wows.data[wows.data.length - 1]);
      } catch (error) {
        dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
      }
    };
    fetchWows();
  }, []);
  const createCommentHandler = () =>{}
  return (
    <div className={classes.wow}>
      <div className={classes.wowContainer}>
        <div className={classes.word}>
          <h5 style={{ fontSize: "1.1em" }}>Words to Ponder by {last.by} :</h5>
        </div>
        <div className={classes.message}>
          <h5 style={{ fontSize: "1.2em", fontStyle: "italic" }}>
            {last.verse} : {last.wow}
          </h5>
            {/* <div
             style={{display:'flex', alignItems:'flex-start', justifyContent:'flex-start', flexDirection:'column', border:'1px solid red',  }}
             >
              <form onSubmit={createCommentHandler} className={classes.logInContent} > 
              <div style={{width:'20rem', border:'1px solid blue', }}>
                  <input
                  id="verse"
                  type="verse"
                  onBlur={verseBlurHandler}
                  onFocus={verseFocusHandler}
                  onChange={(e) => setverse(e.target.value)}
                  value={verse}
                  required
                  placeholder="Comment"
                  style={{height:'3rem', width:'100%',  position:'relative' }}/>
                  </div>

                  {/* <p style={{ color: !verseInValid ? "transparent" : "salmon" }}>Please enter a valid bible verse</p> */}
                  <div style={{border:'1px solid red', position:'absolute', zIndex:'1'}}><AiTwotoneEdit type='submit'/></div>
                  
              </form>
            </div> */}
           
   


        </div>
          
        
      </div>
    </div>
  );
}
