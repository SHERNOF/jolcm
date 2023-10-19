import React, { useEffect, useRef, useState } from "react";
import Title from "../../UI/title/Title";

import classes from "./ourTeam.module.css";
import teamData from "./team.js";

export default function OurTeam() {
  const info = teamData.teamInfo;
  const pref = useRef();
  const [count, setcount] = useState(Number);

  const countWords = () => {
    setcount(pref.innerHTML.split(" ").length);
  };

  const [flip, setflip] = useState(false);
  const flipPage = () => {
    setflip(!flip);
    console.log(info.userId);
  };

  return (
    <div className={classes.ourTeam}>
      <Title>
      Our Team
      </Title>
      <div className={classes.team}>
        <div className={classes.teamContainer}>
          {info.map((inf) => (
            <div key={inf.id} className={classes.teamDetails}>
              <div
                className={`${classes.verseContainer} ${
                  flip && classes.verseFlip
                }`}
              >
                <p
                  ref={pref}
                  style={{
                    fontSize: ".9em",
                    padding: "1rem 1rem",
                  }}
                  onLoad={countWords}
                >
                  {inf.verse}
                </p>
              </div>

              <div className={`${classes.front} ${flip && classes.frontFlip}`}>
                <p style={{ textAlign: "center" }}>{inf.nickname}</p>
                <div className={classes.imgContainer}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    alt={inf.nickname}
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

/* problem encounter 
there's a problem in the flipPage function as all the cards flipped even if only one card was clicked. It's function should be that the card that was click is the only one that will do the transition because of the key={inf.id}. However, this is not the case, all cards do the transition.

Alternate fix is not to use a javascript function but it was corrected in the css. pseudo hover was use instead of the click event

appeared great after all.

*/
