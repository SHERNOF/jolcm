import React from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import classes from "./ourTeam.module.css";

export default function OurTeam() {
  return (
    <Section>
      <Container>
        <div className={classes.ourTeam}>OurTeam</div>
      </Container>
    </Section>
  );
}
