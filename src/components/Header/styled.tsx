import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

export const Container = styled.header`
  background-color: ${colors.theme.blueGray};
  padding: ${metrics.padding.medium} ${metrics.padding.large};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  h1 {
    color: ${colors.theme.pink};
    margin: 0;
  }
`;

const fade = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.80);
  }
  70% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1);
  }
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: end;
  align-items: stretch;
  width: 20%;

  input {
    border-radius: 5px 0 0 5px;
    height: 1.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    color: ${colors.theme.blueGray};
  }

  .click {
    animation: ${fade} 1s ease-in-out;
  }
`;

export const Button = styled.div`
  width: 1.5rem;
  border-radius: 0 5px 5px 0;
  padding: 0 1rem;
  background-color: ${colors.theme.pink};
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkPink};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.theme.white};
  width: 100%;
  height: 100%;
`;
