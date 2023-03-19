import styled from "styled-components";
const colorTemplate = ({ theme }) => theme.COLORS.DECORATION;

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.div`
  height: fit-content;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colorTemplate};
  border-radius: 20px;
  h5 {
    margin-top: 10px;
    font-size: 0.625rem;
    font-weight: 400;
  }
  p {
    margin: 10px 0;
    width: 80%;
    height: fit-content;
    padding: 25px 10px;
    font-size: 0.5rem;
    background-color: ${colorTemplate};
    border-radius: 20px;
  }
  div {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
  svg {
    color: #ad734b;
  }
  @media (min-width: 43rem) {
    p {
      font-size: 1.5rem;
      padding: 20px;
    }
    h5 {
      font-size: 2rem;
    }
  }
`;
