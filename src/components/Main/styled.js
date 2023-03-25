import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { metrics } from "../../theme/metrics";

export const Container = styled.main`
  height: 84vh;
  padding: ${metrics.padding.medium};

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding: ${metrics.padding.small} ${metrics.padding.large};
    width: 75%;
    margin: auto;
  }
`;
