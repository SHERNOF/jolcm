import React from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <div className={classes.about}>
          <div className={classes.mv}>
            <div style={{ margin: "1rem 1rem" }}>
              <div>
                <h4>About Joy of Life</h4>
                <p className={classes.content}>
                  Is a church and a community of imperfect people seeking to
                  know and love{" "}
                  {/* <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      border: "none",
                    }}
                  > */}
                  JESUS more.
                  {/* </span>{" "} */}
                </p>
              </div>
              <div>
                <h5>Mission</h5>
                <p className={classes.content}>
                  To share life in Christ Jesus with great joy to all
                </p>
              </div>
              <div>
                <h5>Vision</h5>
                <p className={classes.content}>
                  To see Christ-like people living in fullness of joy
                </p>
              </div>
            </div>
          </div>
          <div className={classes.bible}>
            <div className={classes.bibleContainer}>
              <img
                className={classes.test}
                src="../img/bible2.png"
                alt="bible"
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
