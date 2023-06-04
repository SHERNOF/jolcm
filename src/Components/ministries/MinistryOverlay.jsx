import React from "react";

export default function MinistryOverlay(props) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        pointer: "cursor",
      }}
    >
      {props.children}
    </div>
  );
}
