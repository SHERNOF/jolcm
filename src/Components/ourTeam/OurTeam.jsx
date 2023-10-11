import React, { useState } from "react";
import Title from "../../UI/title/Title";

import classes from "./ourTeam.module.css";
import teamData from "./team.js";

export default function OurTeam() {
  const info = teamData.teamInfo;
  const [verse, setverse] = useState(false);
  const verseAppear = () => {
    setverse(!verse);
  };
  return (
    <div className={classes.ourTeam}>
      <Title>
        <h5>Our Team</h5>
      </Title>
      <div className={classes.teamLineUp}></div>
    </div>
  );
}
