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
    <>
    <div className={classes.wow}>
      <div className={classes.wowContainer}>

        <div className={classes.word}>
          <p style={{ fontSize: "1.1em", color: 'rgb(0,0,0,.5)' }}>Words to Ponder by {last.by} :</p>
        </div>

        <div className={classes.message}>
          <h6 style={{ fontSize: "1em", fontStyle: "italic", width:'100%', 
          // border:'1px solid green',
          textAlign:'left',
          color: 'rgb(0,0,0,.5)',
          }}>
            {/* {last.verse} : {last.wow}  */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi qui nam itaque reiciendis vel? Delectus aliquid voluptatem minima inventore nesciunt quos sit dolorum animi dicta, itaque adipisci quas. Laboriosam, recusandae maxime. Iusto consequatur blanditiis assumenda necessitatibus voluptatem doloribus repudiandae consequuntur et, distinctio doloremque, sed vitae voluptate asperiores voluptatibus natus.

          </h6>
          <div style={{ width:'100%', 
          textAlign:'left', 
        // border:'1px solid blue',
        }}>
          <AiTwotoneEdit   type='submit' style={{color: 'rgb(0,0,0,.5)', }}/> <span >Comment</span>
          </div>
        </div>

        <div className={classes.commentContainer}>

          {/* <div className={classes.createComment}> */}
            {/* <AiTwotoneEdit type='submit'/> */}
          {/* </div> */}

          <div className={classes.commentsList}>
                <div className={classes.comments}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae veritatis repellat.</p>
                  <h6>Sherwin</h6>
                </div>

                <div className={classes.comments}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat expedita perferendis, distinctio dolor, praesentium ipsam in quo vitae, ducimus quis tempora nobis doloremque quae.</p>
                  <h6>Neil</h6>
                </div>

                <div className={classes.comments}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae veritatis repellat.</p>
                  <h6>Angie</h6>
                </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}
