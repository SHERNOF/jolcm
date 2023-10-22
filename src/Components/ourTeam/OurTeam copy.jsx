import { set } from "mongoose";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "../../UI/backdrop/Backdrop";
import Title from "../../UI/title/Title";

import classes from "./ourTeam.module.css";
import teamData from "./team.js";

export default function OurTeam() {
  const setBackdrop = useSelector((state) => state.setBackdrop);
  console.log(setBackdrop);
  const info = teamData.teamInfo;
  const pref = useRef();
  const [count, setcount] = useState(Number);
  const [showBackdrop, setshowBackdrop] = useState(false);

  const countWords = () => {
    setcount(pref.innerHTML.split(" ").length);
  };

  const [flip, setflip] = useState(false);
  const flipPage = () => {
    setflip(!flip);
  };

  const backdropHandler = () => {
    setshowBackdrop(!showBackdrop);
    console.log("test");
  };

  return (
    <>
      <div className={classes.ourTeam} onClick={backdropHandler}>
        <Title>Our Team</Title>
        <div className={classes.team}>
          <div className={classes.teamContainer}>
            {info.map((inf) => (
              <div key={inf.id} className={classes.teamDetails}>
                {showBackdrop && (
                  <Backdrop onClick={backdropHandler}>
                    <div
                      className={`${classes.verseContainer} 
                  ${flip && classes.verseFlip}
                  
                `}
                    >
                      <p style={{ color: "white" }}>
                        {inf.verseName}
                        <hr></hr>
                        {inf.verse}
                      </p>
                    </div>
                  </Backdrop>
                )}

                <div
                  className={`${classes.front} 
                  ${flip && classes.frontFlip}
              `}
                >
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
    </>
  );
}

/* problem encounter 
there's a problem in the flipPage function as all the cards flipped even if only one card was clicked. It's function should be that the card that was click is the only one that will do the transition because of the key={inf.id}. However, this is not the case, all cards do the transition.

Alternate fix is not to use a javascript function but it was corrected in the css. pseudo hover was use instead of the click event

appeared great after all.

*/
