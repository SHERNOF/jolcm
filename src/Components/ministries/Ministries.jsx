import React from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import Title from "../common/title/Title";
// import Gf from "./Gf";
import Kids from "./Kids";
import Mf from "./Mf";
// import Mf from "./Mf";
import classes from "./ministries.module.css";
import Sunday from "./Sunday";
import Tbs from "./Tbs";
import Wf from "./Wf";
// import Wf from "./Wf";

export default function Ministries() {
  return (
    <Section>
      <Container>
        <div className={classes.ministries}>
          <div className={classes.ministryContainer}>
            <Title className={classes.title}>
              <h3>Ministries</h3>
            </Title>
            <div className={classes.frames}>
              <Sunday />
              <Kids />
              <Tbs />
              <div className={classes.pm}>
                <Mf />
                <Wf />
                <div className={classes.gf}>
                  <div className={classes.imgContainer}>
                    <img src="./ministry/golden1.jpeg" alt="photo0"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
