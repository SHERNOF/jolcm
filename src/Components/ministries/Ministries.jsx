import React from "react";
import Title from "../../UI/title/Title";

import Kids from "./Kids";
import Mf from "./Mf";
import classes from "./ministries.module.css";
import Sunday from "./Sunday";
import Tbs from "./Tbs";
import Wf from "./Wf";

export default function Ministries() {
  return (
    <div className={classes.ministries}>
      <Title className={classes.title}>
        <h5>Ministries</h5>
      </Title>
      <div className={classes.ministryContainer}>
        <div className={classes.frames}>
          <Sunday />
          <Kids />
          <Tbs />
          <div className={classes.pm}>
            <Mf />
            <Wf />
            <div className={classes.gf}>
              <div className={classes.imgContainer}>
                <img src="./ministry/golden1.jpeg" alt="photo0"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
