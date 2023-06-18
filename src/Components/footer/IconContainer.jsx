import React from "react";

export default function IconContainer(props) {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "2.5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem, 2rem",
        border: "1px solid rgb(83, 83, 85)",
        boxShadow: "0px 0px 15px #3776ff",
        cusrsor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
}
