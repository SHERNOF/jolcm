import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const MyButton = styled(Button)`
  color: ${(props) => props.theme.text.primary};
`;
