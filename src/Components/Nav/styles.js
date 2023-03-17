import styled from "styled-components";
const colorTemplate = ({ theme }) => theme.COLORS.DECORATION;

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  font-size: 2rem;
  margin-top: min(5vw, 70px);
  margin-right: 130px;
  gap: 10px;
  a {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
  }

  @media (min-width: 45rem) {
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  grid-area: "nav";
  img {
    width: min(15vw, 300px);
    aspect-ratio: 1;
    margin-left: 30px;
  }
  @media (min-width: 45rem) {
  }
`;

export const NavButton = styled.nav`
  ul {
    a {
      position: relative;
      transition: 2s;

      &::before {
        content: "";
        width: 0;
        height: 2px;
        background-color: black;
        position: absolute;
        bottom: -5px;
        transition: 2s;
      }
      &.active::before {
        width: 100%;
      }
    }
    li {
      color: ${({ theme }) => theme.COLORS.FONT_COLOR};
      font-family: "Noto Sans", sans-serif;
      font-size: clamp(0.5rem, 1.5vw, 1.25rem);
    }
    margin-top: min(5vw, 70px);
    display: flex;
    gap: min(4vw, 40px);
  }
  @media (min-width: 45rem) {
  }
`;
