import styled from "@emotion/styled";

const Div = styled("div")`
  width: 100%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Container(props) {
  return (
    <Div style={{}}>
      <div
        style={{
          width: "80%",
          border: "1px solid red",
        }}
      >
        {props.children}
      </div>
    </Div>
  );
}
