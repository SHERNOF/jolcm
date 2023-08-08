import React from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import Title from "../common/title/Title";
import classes from "./ourTeam.module.css";
import teamData from "./team.js";

export default function OurTeam() {
  const info = teamData.teamInfo;
  return (
    <Section>
      <Container>
        <div className={classes.ourTeam}>
          <Title>
            <h5>Our Team</h5>
          </Title>
          <div className={classes.teamContainer}>
            {info.map((inf) => (
              <div key={inf.userId} style={{ margin: "0 1rem" }}>
                <div className={classes.teamMember}>
                  <div
                    className={classes.nickname}
                    style={{ fontSize: ".65em" }}
                  >
                    {inf.nickname}
                  </div>
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgSize}
                      src={inf.pic}
                      alt={inf.nickname}
                    ></img>
                  </div>
                  <div
                    className={classes.position}
                    style={{ fontSize: ".65em" }}
                  >
                    {inf.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
