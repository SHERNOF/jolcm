import React from "react";

export default function P(props) {
  return (
    <p
      style={{
        textAlign: "left",
        display: "inline-block",
        width: "90%",
        fontSize: "1em",
        marginTop: "0.5rem",
        color: "white",
        transition: "all .5s",
      }}
    >
      {props.children}
    </p>
  );
}
