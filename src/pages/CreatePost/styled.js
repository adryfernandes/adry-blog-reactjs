import styled from "styled-components";
import { colors } from "../../theme/colors";
import { Grid } from "@mui/material";

export const DropzoneContainer = styled.div`
  border: 2px dashed ${(props) => (props.isDragActive ? "blue" : "gray")};
  padding: 20px;
  margin: 20px;
`;

export const Form = styled(Grid)`
  div {
    /* margin-top: 1rem; */
  }

  .form-area {
    margin-top: 1.5rem;
  }

  #content-area {
    label {
      color: ${colors.gray};
    }
  }
`;

export const ContainerButton = styled(Grid)`
  display: flex;
  justify-content: end;
  padding-top: 2rem;
`;
