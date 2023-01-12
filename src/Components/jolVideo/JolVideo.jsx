import React from "react";
import JOLNA from "./JOLNA.mp4";

export default function JolVideo({ embedId }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
      }}
    >
      <video
        src={JOLNA}
        muted
        autoPlay
        loop
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source type="video/mp4" />
      </video>
    </div>
  );
}
