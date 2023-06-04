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
              {/* <div className={classes.ss}>
                <div
                  className={`${classes.imgContainer} ${classes.front}`}
                ></div>
              </div> */}
              <Sunday />
              {/* <div className={classes.ks}>
                <div
                  className={`${classes.imgContainer} ${classes.front}`}
                ></div>
              </div> */}
              <Kids />
              {/* <div className={classes.tbs}>
                <div
                  className={`${classes.imgContainer} ${classes.front}`}
                ></div>
              </div> */}
              <Tbs />
              <div className={classes.pm}>
                {/* <div className={classes.mf}>
                  <div
                    className={`${classes.imgContainer} ${classes.back}`}
                  ></div>
                </div> */}
                <Mf />
                {/* <div className={classes.wf}>
                  <div
                    className={`${classes.imgContainer} ${classes.back}`}
                  ></div>
                </div> */}
                <Wf />
                <div className={classes.gf}>
                  <div className={classes.imgContainer}>
                    <img src="./ministry/golden1.jpeg" alt="photo0"></img>
                  </div>
                </div>
                {/* <Mf /> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
