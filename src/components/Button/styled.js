import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #3f51b5;
  border: none;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #303f9f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.3);
  }

  &:active {
    background-color: #283593;
  }
`;
