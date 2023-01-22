import React from "react";
import classes from "./churchServices.module.css";
import PastorInfo from "./PastorInfo";
import Services from "./Services";

export default function ChurchServices({ info }) {
  return (
    <div className={classes.churchServices}>
      <Services></Services>
      <PastorInfo info={info}></PastorInfo>
    </div>
  );
}
