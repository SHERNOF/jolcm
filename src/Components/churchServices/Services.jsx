import React from "react";
import classes from "./services.module.css";

export default function Services() {
  return (
    <>
      <div className={classes.square1}></div>
      <div className={classes.square2}></div>
      <div className={classes.serviceContainer}>
        <div className={classes.title}>
          <h3>Services</h3>
        </div>
        <div className={classes.services}>
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
      </div>
    </>
  );
}
