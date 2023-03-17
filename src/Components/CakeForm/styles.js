import styled from "styled-components";
const colorTemplate = ({ theme }) => theme.COLORS.DECORATION;

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.section`
  @media (min-width: 45rem) {
  }
`;

export const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  margin: 0 auto;
  &.active {
    width: fit-content;
  }

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
  }
  input {
    height: 20px;
  }
  textarea {
    height: 100px;
  }
  input,
  textarea {
    font-size: 0.75rem;
    resize: none;
    line-height: 14px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.DECORATION};
  }
  button {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 0.625rem;
    padding: 6px 30px;
    &.active {
      width: 200px;
      height: 50px;
      font-size: 1.125rem;
    }
  }
  @media (min-width: 45rem) {
  }
`;
export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  legend {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 14px;
  }

  > div {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 20px;
    Input {
      padding: 5px;
      width: 15px;
      height: 15px;
    }
  }
  @media (min-width: 45rem) {
  }
`;
