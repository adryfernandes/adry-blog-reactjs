import styled from "styled-components";
import ReactQuill from "react-quill";

export const DropzoneContainer = styled.div`
  border: 2px dashed ${(props) => (props.isDragActive ? "blue" : "gray")};
  padding: 20px;
  margin: 20px;
`;
