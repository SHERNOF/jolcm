import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MyBoxAbout2 } from "../styled/MyBox";
import {
  MyTitle,
  StyledH4,
  StyledH5,
  StyledH3,
} from "../styled/StyledTypography";

export default function Services2() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: -400,
      });
    }
  }, [animation, inView]);
  return (
    <MyBoxAbout2>
      <Paper
        ref={ref}
        sx={{
          position: "absolute",
          height: "80%",
          width: "90%",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(80px)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <motion.div animate={animation}>
          <Box
            sx={{
              width: "100%",
              height: "20%",
              textAlign: "left",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
            }}
          >
            <MyTitle>SERVICES</MyTitle>
          </Box>
          <Box
            sx={{
              height: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "3rem",
              }}
            >
              <StyledH3>Main Service</StyledH3>
              <StyledH4>Sunday - 2PM</StyledH4>
              <StyledH5>
                45 Interlink Drive Craigieburn Victoria, Australia 3064
              </StyledH5>
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "3rem",
              }}
            >
              <StyledH3>Kids</StyledH3>
              <StyledH4>Sunday - 2PM</StyledH4>
              <StyledH5>
                45 Interlink Drive Craigieburn Victoria, Australia 3064
              </StyledH5>
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "3rem",
              }}
            >
              <StyledH3>Prayer Meeting</StyledH3>
              <StyledH4>Sunday - 2PM</StyledH4>
              <StyledH5>
                45 Interlink Drive Craigieburn Victoria, Australia 3064
              </StyledH5>
            </Box>
          </Box>
        </motion.div>
      </Paper>
    </MyBoxAbout2>
  );
}
