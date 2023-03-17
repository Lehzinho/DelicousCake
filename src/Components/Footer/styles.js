import styled from "styled-components";

export const Links = styled.ul`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.footer`
  grid-area: "footer";
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.FOOTER_COLOR};
  font-family: "Merriweather";
  font-size: 0.5rem;
  padding: 5px;

  > h1 {
    font-style: normal;
    font-weight: 700;
    line-height: 13px;
    font-size: 0.625rem;
    margin-top: 5px;
    margin-left: 30px;
  }
  @media (min-width: 45rem) {
    h1 {
      margin-top: 15px;
      font-size: 1.25rem;
    }
  }
`;

export const Info = styled.ul`
  text-align: center;
  li {
    margin-top: 3px;
    &.active {
      display: none;
    }
  }
  > div {
    margin: 5px auto;
    font-size: 1.5rem;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 45rem) {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 20px 200px;
    align-items: center;
    li {
      font-size: 1rem;
    }
    li {
      margin-top: 3px;
      &.active {
        display: block;
      }
    }
    > div {
      font-size: 2.85rem;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  small {
    margin-top: 2px;
  }
  @media (min-width: 45rem) {
    flex-direction: row;
    small {
      font-size: 0.75rem;
    }
  }
`;
export const Social = styled.div`
  margin: 0 auto;
  padding: 15px 0 0;
  font-size: 1.5rem;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  a {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
  }
  @media (min-width: 45rem) {
    font-size: 2rem;
  }
`;
