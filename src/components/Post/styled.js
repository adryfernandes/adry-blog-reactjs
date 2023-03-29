import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

export const Container = styled.section`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: ${metrics.padding.small} 0;
`;

export const Content = styled.div`
  cursor: pointer;
  padding: ${metrics.padding.small};

  &:hover {
    background-color: rgba(57, 56, 56, 0.1);
  }

  h2 {
    color: ${colors.theme.purple};
    margin: 0;
  }

  h2::first-letter,
  h4::first-letter {
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: justify;

    @media (min-width: ${breakpoints.md}) {
      margin-top: 0;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }

  #date {
    color: ${colors.gray};
    margin-top: 0.8rem;

    @media (min-width: ${breakpoints.md}) {
      flex-direction: row;
    }
  }
`;

export const Matters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }

  span {
    margin-right: 1rem;
    color: ${colors.theme.pink};
  }
`;
