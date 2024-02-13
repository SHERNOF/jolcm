import React from "react";
import LoginButton from "./LoginButton";

export default function LogInButtonContainer() {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: "4rem",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "20",
      }}
    >
      <div
        style={{
          width: "70vw",
          textAlign: "right",
        }}
      >
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}
