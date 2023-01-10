import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <Paper className={classes.container}>
      <Box className={classes.mv}>
        <h3>MISSION</h3>
        <p className={classes.content}>
          Is a community church of imperfect people seeking to know and love
          <strong> Jesus </strong> more. We gather and serve in Craigieburn,
          Victoria, Australia. We meet each Sunday, connect during the week in
          Care Groups/Prayer Meetings and serve in the community and surrounding
          areas.
        </p>
      </Box>
      <Box className={classes.mv}>
        <h3>VISION</h3>

        <p className={classes.content}>
          A group of people who are joyfully together and we’re together with
          God because of His kindness and commitment to humanity. Together as a
          family learning to embody this kindness and commitment one to another
          and beyond into the wider world. All this is only possible because of
          Jesus, the One who brings us together in life and keeps us together
          joyfully.
        </p>
      </Box>
    </Paper>
  );
}
