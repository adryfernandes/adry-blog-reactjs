import styled, { keyframes } from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.main`
  min-height: 84vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
`;

export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${colors.theme.purple} ${colors.lightGray} ${colors.lightGray}
    ${colors.lightGray};
  animation: ${spinAnimation} 1s linear infinite;
`;
