import React from "react";

export default function IconContainer(props) {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "4rem",
        height: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem, 2rem",
        border: "2px solid rgb(83, 83, 85)",
        boxShadow: "0px 0px 2px white",
      }}
    >
      {props.children}
    </div>
  );
}
