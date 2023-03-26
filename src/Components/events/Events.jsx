import { Card } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import classes from "./events.module.css";
import { event } from "../../data.js";

const eventContents = event;
console.log(eventContents);

export default function Events() {
  return (
    <div className={classes.eventsContainer}>
      <Title>
        <h3>Events</h3>
      </Title>

      <div className={classes.container}>
        {eventContents.map((eventContent) => (
          <div
            className={classes.imageContainer}
            key={eventContent.eventNumber}
          >
            <img
              className={classes.eventImages}
              src={eventContent.pictures[0]}
              alt="test"
            />
            <div className={classes.eventTitle}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                {eventContent.eventTitle}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
