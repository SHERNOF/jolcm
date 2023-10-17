import React from "react";
import JOLNA from "./JOLNA.mp4";

export default function JolVideo() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src={JOLNA}
        muted
        autoPlay
        loop
        playsInline
        style={{
          width: "98%",
          height: "98%",
        }}
      >
        <source type="video/mp4" />
      </video>
    </div>
  );
}
