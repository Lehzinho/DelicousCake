import styled from "styled-components";

export const Container = styled.nav`
  grid-area: "nav";
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  img {
    width: 70px;
    height: 70px;
    margin: 10px 20px 0;
  }
  button {
    background: transparent;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.3s;
    }
    &.active::after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
    &:focus,
    &:hover,
    &.active {
      outline: none;
      color: ${({ theme }) => theme.COLORS.DECORATION};
    }
  }
`;
export const Menu = styled.ul`
  width: 102px;
  height: fit-content;
  top: 50px;
  right: 40px;
  background-color: wheat;
  position: absolute;
  transition: 10s ease;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #f6aaad;
  background: #f7e9e9;
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
  }
  a:visited {
    color: black;
  }
  a.active {
    color: #f6aaad;
  }
`;
