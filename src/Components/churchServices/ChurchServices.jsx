import React from "react";
import classes from "./churchServices.module.css";

export default function ChurchServices() {
  return (
    <div className={classes.services}>
      <div className={classes.square1}></div>
      <div className={classes.square2}></div>
      <div className={classes.servicesContainer}>
        <div className={classes.title}>
          <h3>CHURCH SERVICES</h3>
        </div>

        <div className={classes.servicesInfo}>
          <div className={classes.service}>
            <div className={classes.serviceTitle}>MAIN SERVICES</div>
            <div className={classes.serviceTime}>EVERY SUNDAY @ 2PM</div>
            <div className={classes.serviceLOC}>
              45 Interlink Drive Craigieburn Victoria, Australia 3064
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.serviceTitle}>PRAYER MEETING</div>
            <div className={classes.serviceTime}>Every Saturday @ 7AM</div>
            <div className={classes.serviceLOC}>Via Zoom</div>
          </div>
          <div className={classes.service}>
            <div className={classes.serviceTitle}>KIDS SERVICES</div>
            <div className={classes.serviceTime}>Every Sunday @ 2PM</div>
            <div className={classes.serviceLOC}>
              45 Interlink Drive Craigieburn Victoria, Australia 3064
            </div>
          </div>
        </div>
      </div>

      <div className={classes.committeeContainer}>
        <div className={`${classes.title} ${classes.garea}`}>
          <h3>PASTORAL COMMITTEE</h3>
        </div>
        <div className={classes.pastorInfo}>
          <div className={classes.pastorInfoContainer}>
            <div className={classes.pastorDetails}>
              <h5 className={classes.pastorName}>MELCHOR ABRASALDO</h5>
              <h6 className={classes.position}>Head Pastor</h6>
            </div>
            <div className={classes.imgContainer}>
              <img src="../img/Pastor Bong.jpg" alt="committee"></img>
            </div>
          </div>

          <div className={classes.verse}>
            <h6>Philippians 2: 5-11</h6>
            <div>
              <p>
                In your relationships with one another, have the same mindset as
                Christ Jesus: Who, being in very nature God, did not consider
                equality with God something to be used to his own advantage;
                rather, he made himself nothing by taking the very nature of a
                servant, being made in human likeness. And being found in
                appearance as a man, he humbled himself by becoming obedient to
                death— even death on a cross! Therefore God exalted him to the
                highest place and gave him the name that is above every name,
                that at the name of Jesus every knee should bow, in heaven and
                on earth and under the earth, and every tongue acknowledge that
                Jesus Christ is Lord, to the glory of God the Father.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
