import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { alpha } from "@mui/material";

export const MyBox = styled(Box)`
  min-height: 80vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.darker.primary},
    ${(props) => props.theme.palette.primary.dark}
  );
`;

export const MyBoxServices = styled(MyBox)``;

export const MyBoxAbout2 = styled(MyBox)`
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.palette.primary.dark},
    ${(props) => props.theme.darker.primary}
  );
  /* background: ${(props) => props.theme.palette.primary.dark}; */
  min-height: 50vh;
`;
