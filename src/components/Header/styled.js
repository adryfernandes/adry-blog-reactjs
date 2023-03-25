import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

export const Container = styled.header`
  background-color: ${colors.theme.blueGray};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: ${metrics.padding.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding: ${metrics.padding.medium};
    width: ${metrics.widthPage};
  }

  h1 {
    color: ${colors.theme.pink};
    margin: 0;
    margin-bottom: 1.5rem;

    @media (min-width: ${breakpoints.md}) {
      margin: 0;
    }
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
  align-items: stretch;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    width: 30%;
    justify-content: end;
  }

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
