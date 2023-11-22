import { useEffect, useReducer, useState } from "react";
import classes from "./wow.module.css";
import axios from "axios";
import { rootReducer } from "../../store/reducers";

export default function Word() {
  const [{ wows, error, loading }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
  });

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
        </div>
      </div>
    </div>
  );
}
