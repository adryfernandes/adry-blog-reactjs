import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { metrics } from "../../theme/metrics";

export const Main = styled.main`
  min-height: 80vh;
  padding: ${metrics.padding.medium};

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding: ${metrics.padding.small} ${metrics.padding.large};
    width: 75%;
    margin: auto;
  }
`;
