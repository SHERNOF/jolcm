import Container from "../common/container/Container";
import Section from "../common/section/Section";
import classes from "./mv.module.css";

export default function Mv() {
  return (
    <Section>
      <Container>
        <div className={classes.mv}>
          <div className={classes.m}>
            <h3>Mission</h3>
            <h6>To share life in Christ Jesus with great joy to all.</h6>
          </div>
          <div className={classes.v}>
            <h3>Vision</h3>
            <h6>To see Christ-like people living in fullness of joy.</h6>
          </div>
        </div>
      </Container>
    </Section>
  );
}
