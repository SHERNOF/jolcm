import { Paper } from "@mui/material";
import React from "react";
import JOL from "./JOL.mp4";

export default function JolVideo() {
  return (
    <Paper
      sx={{
        position: "absolute",
        width: "100%",
      }}
    >
      <video
        src={JOL}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source type="video/mp4" />
      </video>
    </Paper>
  );
}
