import React from "react";
import classes from "./pastorInfo.module.css";

export default function PastorInfo({ data }) {
  console.log(data);
  return (
    <div className={classes.committeeContainer}>
      <div className={classes.title}>
        <h3>PASTORAL COMMITTEE</h3>
      </div>
      {data.map((dt) => (
        <div className={classes.pastorInfo} key={dt.id}>
          <div className={classes.pastorInfoContainer}>
            <div className={classes.pastorDetails}>
              <h5 className={classes.pastorName} style={{ fontSize: ".6em" }}>
                {dt.name}
              </h5>
              <h6 className={classes.position}>{dt.position}</h6>
            </div>
            <div className={classes.imgContainer}>
              {/* <img src="../img/Pastor Bong.jpg" alt="committee"></img> */}
              <img src={dt.pic} alt="committee"></img>
            </div>
          </div>

          <div className={classes.verseContainer}>
            <div className={classes.verseName}>
              <h6>{dt.verseName}</h6>
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
                {dt.verse}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
}
