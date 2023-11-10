import React, { useState } from "react";
import Backdrop from "../../UI/backdrop/Backdrop";
import Title from "../../UI/title/Title";
import classes from "./ourTeam.module.css";
import teamData from "./team.js";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function OurTeam() {
  const info = teamData.teamInfo;

  // const [openModal, setopenModal] = useState(false);
  const openModal = useSelector((state) => state.openModal)
  const [Id, setId] = useState();

  return (
    <>
      <div className={classes.ourTeam}>
        <Title>Our Team</Title>
        <div className={classes.team}>
          <div className={classes.teamContainer}>
            {info.map((inf, index) => (
              <div key={inf.id} className={classes.teamDetails}>
                <div
                  className={`${classes.front} 
         
              `}
                  onClick={() => {
                    setId(index);
                    setopenModal(!openModal);
                  }}
                >
                  <p style={{ textAlign: "center" }}>{inf.nickname}</p>
                  <div className={classes.imgContainer}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      alt={inf.nickname}
                      src={inf.pic}
                    />
                  </div>

                  {openModal && (
                    <Backdrop
                      onClick={() => {
                        setopenModal(!openModal);
                      }}
                      openModal={openModal}
                    >
                      <div
                        className={classes.verseContainer}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <AiOutlineCloseCircle
                          style={{
                            position: "absolute",
                            right: "1rem",
                            top: "1rem",
                            color: "rgb(88, 87, 87)",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setopenModal(!openModal);
                          }}
                        />
                        <p style={{ color: "white", zIndex: "1" }}>
                          {info[Id].verseName}
                        </p>
                        <hr
                          style={{
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            display: "inline-flex",
                            width: "90%",
                          }}
                        ></hr>

                        <p>{info[Id].verse}</p>
                      </div>
                    </Backdrop>
                  )}
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
