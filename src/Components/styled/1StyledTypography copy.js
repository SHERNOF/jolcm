import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledH1 = styled(Typography)`
  /* color: ${(props) => props.theme.text.primary}; */
  font-size: 3rem;
`;

export const MyTitle = styled(StyledH1)`
  /* font-size: 3.5rem; */
  text-align: center;
  /* color: ${(props) => props.theme.title.primary}; */
`;

export const StyledH2 = styled(StyledH1)`
  font-size: 3rem;
  /* color: ${(props) => props.theme.text.primary}; */
  font-size: 2rem;
`;
export const StyledH3 = styled(StyledH1)`
  font-size: 1.7rem;
  /* color: ${(props) => props.theme.text.primary}; */
  text-shadow: #bbb 0 0 1px, #fff 0 -1px 1px, #fff 0 -1px 1px,
    rgba(0, 0, 0, 0.8) 2px 5px 10px;
`;

export const StyledH4 = styled(StyledH1)`
  color: hsla(0, 0%, 0%, 0.9);
  /* color: ${(props) => props.theme.text.primary}; */
  font-size: 1.4rem;
  /* text-shadow: #bbb 0 0 1px, #fff 0 -1px 1px, #fff 0 -2px 1px,
    rgba(0, 0, 0, 0.8) 0 5px 3px; */
`;
export const StyledH5 = styled(StyledH1)`
  color: hsla(0, 0%, 0%, 0.9);
  /* color: ${(props) => props.theme.text.primary}; */
  font-size: 1rem;
  /* text-shadow: #bbb 0 0 1px, #fff 0 -1px 1px, #fff 0 -2px 1px,
    rgba(0, 0, 0, 0.8) 0 5px 3px; */
`;

export const StyledP = styled(StyledH1)`
  /* color: hsla(0, 0%, 0%, 0.9); */
  /* color: ${(props) => props.theme.text.primary}; */
  /* text-shadow: #fff 0 -1px 1px, rgba(0, 0, 0, 0.8) 0 2px 5px; */
  text-align: justify;
  padding: 0 5rem;
  font-size: 1.25rem;
`;
