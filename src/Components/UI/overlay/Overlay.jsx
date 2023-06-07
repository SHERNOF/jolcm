import React from "react";

export default function Overlay(props) {
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
        // backgroundColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      {props.children}
    </div>
  );
}
