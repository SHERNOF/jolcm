import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import JOL from "./JOL.mp4";
import classes from "./jolvideo.module.css";

export default function JolVideo() {
  // const videoRef = useRef(undefined);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
      }}
      // dangerouslySetInnerHTML={{
      //   __html: (

      //   ),
      // }}
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
    </Box>
  );
}
