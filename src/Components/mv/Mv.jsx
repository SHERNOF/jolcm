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
            <p>To share life in Christ Jesus with great joy to all.</p>
          </div>
          <div className={classes.v}>
            <h3>Mission</h3>
            <p>To see Christ-like people living in fullness of joy.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
