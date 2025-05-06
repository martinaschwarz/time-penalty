import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ white }) => (white ? "white" : "#28282c")};
  color: ${({ white }) => (white ? "#28282c" : "white")};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ white }) => (white ? "lightgrey" : "#343434")};
  }
`;
