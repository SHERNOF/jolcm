import React from "react";
import classes from "./pastorInfo.module.css";

export default function PastorInfo() {
  return (
    <div className={classes.committeeContainer}>
      {/* 1  */}
      <div className={classes.title}>
        <h3>PASTORAL COMMITTEE</h3>
      </div>
      {/* 2 */}
      <div className={classes.pastorInfo}>
        {/* a */}
        <div className={classes.pastorInfoContainer}>
          <div className={classes.pastorDetails}>
            <h5 className={classes.pastorName} style={{ fontSize: ".7em" }}>
              MELCHOR ABRASALDO
            </h5>
            <h6 className={classes.position}>Head Pastor</h6>
          </div>
          <div className={classes.imgContainer}>
            <img src="../img/Pastor Bong.jpg" alt="committee"></img>
          </div>
        </div>
        {/* b */}
        <div className={classes.verseContainer}>
          <div className={classes.verseName}>
            <h6>Philippians 2: 5-11</h6>
          </div>
          <div className={classes.verseDetails}>
            <p
              style={{
                fontSize: ".6em",
                textAlign: "justify",
                fontStyle: "italic",
                lineHeight: "1.6",
              }}
            >
              In your relationships with one another, have the same mindset as
              Christ Jesus: Who, being in very nature God, did not consider
              equality with God something to be used to his own advantage;
              rather, he made himself nothing by taking the very nature of a
              servant, being made in human likeness. And being found in
              appearance as a man, he humbled himself by becoming obedient to
              death— even death on a cross! Therefore God exalted him to the
              highest place and gave him the name that is above every name, that
              at the name of Jesus every knee should bow, in heaven and on earth
              and under the earth, and every tongue acknowledge that Jesus
              Christ is Lord, to the glory of God the Father.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
