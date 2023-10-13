import React, { useState } from "react";
import Title from "../../UI/title/Title";

import classes from "./ourTeam.module.css";
import teamData from "./team.js";

export default function OurTeam() {
  const info = teamData.teamInfo;

  const [flip, setflip] = useState(false);
  const flipPage = (e) => {
    setflip(!flip);
    console.log(info.userId)
  };

  return (
    <div className={classes.ourTeam}>
      <Title>
        <h5>Our Team</h5>
      </Title>
      <div className={classes.team}>
        <div className={classes.teamContainer}>
          {info.map((inf) => (
            <div
              className={classes.teamDetails}
              key={inf.userId}
              // onMouseEnter={flipPage}
              // onMouseLeave={flipPage}
              onClick={()=> {
                setflip(!flip)
                console.log(inf.userId)
                }}>
              

            <div
                className={`${classes.verseContainer} ${
                  flip && classes.verseFlip
                }`}
              >
                <p
                  style={{
                    color: "red",
                    fontSize: ".4em",
                    padding: "1rem 1rem",
                  }}
                >
                  {inf.verse}
                </p>
              </div>
      
              <div className={`${classes.front} ${flip && classes.frontFlip}`}>
                <p style={{ textAlign: "center" }}>{inf.nickname}</p>
                <div className={classes.imgContainer}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    alt="team"
                    src={inf.pic}
                  />
                </div>
              </div>



            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
