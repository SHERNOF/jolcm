import React from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <div className={classes.about}>
          <p>
            Joy Of Life Christian Ministries is a community church of imperfect
            people seeking to know and love{" "}
            <strong style={{ color: "#3776ff" }}>JESUS </strong>
            more.
            <hr></hr>
            Come and join as we gather and serve every Sunday in Craigieburn,
            Victoria, Australia.
          </p>
        </div>
      </Container>
    </Section>
  );
}
