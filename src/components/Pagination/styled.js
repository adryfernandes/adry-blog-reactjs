import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../theme/colors";

export const Icon = styled(FontAwesomeIcon)`
  width: 1rem;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const PageNumber = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  margin: 0 0.2rem;
  cursor: pointer;
  color: ${({ active }) => (active ? colors.theme.white : "#000")};
  background-color: ${({ active }) =>
    active ? colors.theme.purple : "transparent"};

  &:hover {
    background-color: ${({ active }) =>
      active ? colors.theme.purple : colors.theme.white};
  }
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.8rem;
  color: ${({ disabled }) => (disabled ? "#c5c5c5" : "#000")};

  &:hover {
    color: ${({ disabled }) => (disabled ? "#c5c5c5" : "#3f51b5")};
  }
`;
