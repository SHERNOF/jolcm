import { Box, Paper } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { StyledP, MyTitle } from "../styled/StyledTypography";

export default function About2() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 400,
      });
    }
  }, [animation, inView]);
  return (
    <Box ref={ref}>
      <Paper
        sx={{
          position: "absolute",
          height: "80%",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(80px)",
        }}
      >
        <motion.div animate={animation}>
          <MyTitle>JOY OF LIFE</MyTitle>
          <StyledP>
            Is a community church of imperfect people seeking to know and love
            <strong> Jesus </strong> more. We gather and serve in Craigieburn,
            Victoria, Australia. We meet each Sunday, connect during the week in
            Care Groups/Prayer Meetings and serve in the community and
            surrounding areas.
          </StyledP>

          <StyledP mt={2}>
            A group of people who are joyfully together and we’re together with
            God because of His kindness and commitment to humanity. Together as
            a family learning to embody this kindness and commitment one to
            another and beyond into the wider world. All this is only possible
            because of Jesus, the One who brings us together in life and keeps
            us together joyfully.
          </StyledP>
        </motion.div>
      </Paper>
    </Box>
  );
}
