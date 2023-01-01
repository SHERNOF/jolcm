import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledH1 = styled(Typography)`
  /* font-size: 6rem; */

  @media (min-width: 900px) {
    font-size: clamp(0.75, 50%, 1.5);
  }
`;

export const StyledH3 = styled(StyledH1)`
  /* font-size: 1.7rem; */

  /* text-shadow: #bbb 0 0 1px, #fff 0 -1px 1px, #fff 0 -1px 1px,
    rgba(0, 0, 0, 0.8) 2px 5px 10px; */
  @media (min-width: 900px) {
    font-size: clamp(0.75, 50%, 1.5);
  }
`;

export const MyTitle = styled(StyledH1)`
  /* font-size: 3.5rem; */
  text-align: center;
`;

export const StyledH2 = styled(StyledH1)`
  font-size: 2rem;
`;

export const StyledH4 = styled(StyledH1)`
  color: hsla(0, 0%, 0%, 0.9);

  font-size: 1.4rem;
`;
export const StyledH5 = styled(StyledH1)`
  color: hsla(0, 0%, 0%, 0.9);

  font-size: 1rem;
`;

export const StyledP = styled(StyledH1)`
  text-align: justify;
  padding: 0 5rem;
  font-size: 1.25rem;
`;
