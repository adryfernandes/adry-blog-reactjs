import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { colors } from "../../theme/colors";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    min-height: 84vh;
  }

  svg {
    width: 80%;
    height: 80%;
    margin-bottom: 0.8rem;

    @media (min-width: ${breakpoints.md}) {
      width: 30%;
      height: 30%;
    }
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 0;
    font-size: 3rem;
    color: ${colors.gray};
  }
`;
