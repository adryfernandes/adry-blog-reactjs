import styled from "styled-components";
import AvatarEditor from "react-avatar-editor";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  #content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
  }

  #button-content {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const Editor = styled(AvatarEditor)``;
