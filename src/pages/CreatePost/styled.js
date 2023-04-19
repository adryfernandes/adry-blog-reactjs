import styled from "styled-components";
import { colors } from "../../theme/colors";

export const DropzoneContainer = styled.div`
  border: 2px dashed ${(props) => (props.isDragActive ? "blue" : "gray")};
  padding: 20px;
  margin: 20px;
`;

export const Form = styled.form`
  .form-line {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  label {
    color: ${colors.gray};
    font-weight: 500;
  }

  input,
  textarea {
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    padding: 12px;
  }

  .form-line-button {
    display: flex;
    justify-content: end;
  }
`;
