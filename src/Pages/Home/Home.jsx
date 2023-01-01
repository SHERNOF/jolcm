import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import Frontpage from "../../Components/frontPage/FrontPage";
import About from "../../Components/services/Services";
import About2 from "../../Components/about/About2";

import Services2 from "../../Components/services/Services2";

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Frontpage></Frontpage>
      {/* <About2></About2> */}
      {/* <Services2></Services2> */}
      {/* <About></About> */}
    </Box>
  );
}
