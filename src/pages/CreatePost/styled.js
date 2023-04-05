import styled from "styled-components";

export const DropzoneContainer = styled.div`
  border: 2px dashed ${(props) => (props.isDragActive ? "blue" : "gray")};
  padding: 20px;
  margin: 20px;
`;
