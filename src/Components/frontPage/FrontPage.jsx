import { Box } from "@mui/system";
import React from "react";

import MainLogo from "../mainLogo/MainLogo";
import FrontImage from "../frontpageImage/FrontImage";

export default function Frontpage() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainLogo></MainLogo>
        <FrontImage></FrontImage>
      </Box>
    </>
  );
}
