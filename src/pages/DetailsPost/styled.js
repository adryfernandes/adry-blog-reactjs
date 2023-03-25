import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

export const Container = styled.div`
  h1 {
    color: ${colors.theme.purple};
    margin: 0;
  }

  #title {
    margin-top: 1rem;
  }

  #date {
    color: ${colors.gray};
    margin-top: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: ${metrics.padding.small} 0;
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
`;
