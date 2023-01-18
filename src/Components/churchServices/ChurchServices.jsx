import React from "react";
import classes from "./churchServices.module.css";
import PastorInfo from "./PastorInfo";
import Services from "./Services";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Icon } from "@mui/material";

export default function ChurchServices({ data }) {
  console.log(data);
  return (
    <div className={classes.churchServices}>
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
      <div className={classes.committeeContaner}>
        <div className={classes.title}>
          <h3>Pastoral Committee</h3>
        </div>
        <div className={classes.committee}>
          <div className={classes.iconContainer}>
            <div className={classes.rightArrow}>
              <Icon
                style={{ color: "red" }}
                component={ArrowCircleRightIcon}
              ></Icon>
            </div>
            <div className={classes.leftArrow}>
              <Icon
                style={{ color: "red" }}
                component={ArrowCircleLeftIcon}
              ></Icon>
            </div>
          </div>
          <div className={classes.subContainer}>
            <div className={classes.pastorInfoContainer}>
              <div className={classes.pastorDetails}>
                <h5 className={classes.pastorName}>Melchor Abrasaldo</h5>
                <h6 className={classes.position}>Senior Pastor</h6>
              </div>
              <div className={classes.imgContainer}>
                <img src="../img/Pastor Bong.jpg" alt="committee"></img>
              </div>
            </div>
            <div className={classes.verseContainer}>
              <div className={classes.verseName}>
                <h6>John 3:16</h6>
              </div>
              <p className={classes.verseDetails}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                culpa fugit architecto vitae minima laborum commodi animi
                impedit corporis cum nam, placeat blanditiis suscipit accusamus?
                Omnis impedit repudiandae asperiores enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
