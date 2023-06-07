import React from "react";

export default function FooterContainer(props) {
  return (
    <div
      style={{
        height: "75%",
        width: "100%",
        border: "1px solid rgb(83, 83, 85)",
      }}
    >
      {props.children}
    </div>
  );
}
