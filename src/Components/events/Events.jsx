import { Card } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import classes from "./events.module.css";
import { event } from "../../data.js";

const eventContents = event;
console.log(eventContents);

export default function Events() {
  return (
    <Card className={classes.eventsContainer}>
      <Title>
        <h3>Events</h3>
      </Title>
      <div className={classes.eachEvent}>
        <Card className={classes.eachEventContainer}>
          {eventContents.map((eventContent) => (
            <ul key={eventContent.eventNumber}>
              <li>
                <div className={classes.imageContainer}>
                  <img
                    className={classes.eventImage}
                    src={eventContent.pictures[0]}
                    alt="events"
                  ></img>
                  <div className={classes.overlay}></div>
                  <div className={classes.eventTitle}>
                    <h5 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                      {eventContent.eventTitle}
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </Card>
      </div>
    </Card>
  );
}
