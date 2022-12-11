import { Box } from "@mui/system";
import React from "react";
import JOL from "./JOL.mp4";

export default function JolVideo() {
  return (
    <Box
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
        onPlay={console.log("test")}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      ></video>
      ;
    </Box>
  );
}
