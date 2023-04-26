import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

export const Container = styled.div`
  background-color: ${colors.error.background};
  padding: ${metrics.padding.small};
  border-radius: 5px;
  display: flex;
  color: ${colors.error.color};
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  #icon-wrapper {
    width: 2.5rem;
    display: flex;
    margin-top: 0.2rem;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  #title {
    font-weight: 600;
    margin-bottom: 0.2rem;
    margin-top: -2px;
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 1.5rem;
  width: 2rem;

  &:hover {
    background-color: rgba(80, 80, 80, 0.1);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1rem;
  color: ${colors.error.icon};
`;
