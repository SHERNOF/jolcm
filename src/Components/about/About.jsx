import { Grid, Paper, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { StyledH3, StyledH4, StyledP } from "../styled/St";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const entrance = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

export default function About() {
  // const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView=", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 200,
      });
    }
  }, [inView]);
  return (
    <Box ref={ref}>
      <Grid
        as={motion.div}
        animate={animation}
        container
        spacing={2}
        sx={{
          height: "80vh",
          position: "absolute",
        }}
      >
        <Grid
          item
          md={6}
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              height: "80%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(80px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <StyledH4
                  style={{
                    paddingLeft: "5rem",
                  }}
                >
                  WHO WE ARE
                </StyledH4>
              </Box>

              <StyledP mt={2}>
                Joy Of Life Christian Ministries is a community church of
                imperfect people seeking to know and love Jesus more. We gather
                and serve in Craigieburn, Victoria, Australia. We meet each
                Sunday, connect during the week in Care Groups/Prayer Meetings
                and serve in the community and surrounding areas.
              </StyledP>
              <br></br>
              <StyledP>
                A church is a group of people who are, joyfully together. We’re
                together with God because of His kindness and commitment to
                humanity; together as a family learning to embody this kindness
                and commitment one to another and beyond into the wider world.
                All this is only possible because of Jesus, the One who brings
                us together in life and keeps us together joyfully.
              </StyledP>
              <br></br>

              <StyledP>
                We are guided by seven central values. They reflect both who we
                are and who we hope to be.
              </StyledP>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              height: "80%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(80px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              margin: "2rem 2rem",
            }}
          >
            <Box
              sx={{
                height: "40%",
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                fontSize: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                margin: "0 2rem",
              }}
            >
              <StyledH3 style={{ padding: "0 1rem" }}>
                MISSION : To share life in Christ Jesus with great joy to all.
              </StyledH3>
            </Box>
            <Box
              sx={{
                height: "40%",
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                fontSize: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                margin: "0 2rem",
              }}
            >
              <StyledH3 style={{ padding: "0 1rem" }}>
                VISION : To see Christ-like people living in fullness of joy.
              </StyledH3>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
