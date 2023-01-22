import React, { useState } from "react";
import classes from "./pastorInfo.module.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Icon } from "@mui/material";

export default function PastorInfo({ info }) {
  const [current, setCurrent] = useState(0);
  const length = info.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(info) || info.length <= 0) {
    return null;
  }

  return (
    <div className={classes.committeeContaner}>
      <div className={classes.title}>
        <h3>Pastoral Committee</h3>
      </div>

      <div className={classes.committee}>
        <div className={classes.iconContainer}>
          <div className={classes.rightArrow} onClick={nextSlide}>
            <Icon
              style={{ color: "grey" }}
              component={ArrowCircleRightIcon}
            ></Icon>
          </div>
          <div className={classes.leftArrow} onClick={prevSlide}>
            <Icon
              style={{ color: "grey" }}
              component={ArrowCircleLeftIcon}
            ></Icon>
          </div>
        </div>
        {info.map((dt, index) => (
          <div
            className={`${classes.subContainer}   ${
              index === current && classes.active
            } `}
            key={index}
          >
            {index === current && (
              <>
                <div className={classes.pastorInfoContainer}>
                  <div className={classes.pastorDetails}>
                    <h5 className={classes.pastorName}>{dt.name}</h5>
                    <h6 className={classes.position}>{dt.position}</h6>
                  </div>
                  <div
                    className={classes.imgContainer}
                    style={{ background: "" }}
                  >
                    <img src={dt.pic} alt="committee"></img>
                  </div>
                </div>
                <div className={classes.verseContainer}>
                  <p>{dt.verse}</p>
                  <h5>{dt.verseName}</h5>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
