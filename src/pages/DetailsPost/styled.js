import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  h1 {
    color: ${colors.theme.purple};
    margin: 0;
  }

  h1::first-letter,
  h3::first-letter {
    text-transform: uppercase;
  }

  #title {
    margin-top: 1rem;
  }

  #date {
    color: ${colors.gray};
    margin-bottom: 3rem;
  }

  h3 {
    margin: 0;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: justify;

    @media (min-width: ${breakpoints.md}) {
      margin-top: 0;
    }
  }

  span {
    margin-right: 1rem;
    color: ${colors.theme.pink};
  }
`;
