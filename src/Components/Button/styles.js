import styled from "styled-components";

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.button`
  width: fit-content;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
  font-family: "Roboto", sans-serif;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 45rem) {
  }
`;
