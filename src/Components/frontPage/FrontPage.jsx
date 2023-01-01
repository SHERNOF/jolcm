import { Box } from "@mui/system";
import React from "react";

import MainLogo from "../mainLogo/MainLogo";
import FrontImage from "../frontpageImage/FrontImage";

export default function Frontpage({ isMed }) {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          maxHeight: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainLogo isMed={isMed}></MainLogo>
        <FrontImage isMed={isMed}></FrontImage>
      </Box>
    </>
  );
}
