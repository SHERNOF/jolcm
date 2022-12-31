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
    >
      <video
        src={JOL}
        // className={classes.vid}
        // src={props.video}
        // ref={videoRef}
        // type="video/mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
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
