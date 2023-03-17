import styled, { keyframes } from "styled-components";
const svgColor = ({ theme }) => theme.COLORS.DECORATION;

const slideRight = keyframes`
  0% {
    left: 100%;    

  }
  50% {
    left: 50%;
  }
  100% {
    left: 0;

  }
`;

const slideLeft = keyframes`
  0% {
    right: 100%;    

  }
  50% {
    right: 50%;
  }
  100% {
    right: 0;

  }
`;

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  main {
    h1 {
      text-align: center;
      font-family: "Mirza", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 2.5rem;
    }
  }

  @media (min-width: 43rem) {
    main {
      h1 {
        margin-top: 50px;
        margin-bottom: 80px;
        white-space: nowrap;
        font-size: 5rem;
      }
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const GaleriaSlide = styled.section`
  width: fit-content;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${slideRight} 1s linear forwards;

  button {
    margin-top: 20px;
  }
  @media (min-width: 45rem) {
  }
`;

export const Avaliações = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px auto 16px;
  position: relative;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    > svg {
      color: ${svgColor};
    }
  }

  @media (min-width: 45rem) {
    animation: ${slideLeft} 1s linear forwards;
  }
`;

export const Fotos = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  background-color: transparent;

  svg {
    color: ${svgColor};
  }
  @media (min-width: 48rem) {
    &:after {
      content: "";
      width: 200px;
      height: 720px;
      background-color: ${({ theme }) => theme.COLORS.DECORATION};
      border-radius: 15px;
      position: absolute;
      left: -40px;
      top: -50px;
      z-index: -1;
    }
  }
`;

export const Feed = styled.div`
  background-color: transparent;
  padding: 0 10px;

  width: 220px;
  display: flex;
  justify-items: center;
  gap: 20px;
  overflow: auto;
  div {
    img {
      width: 200px;
      height: 250px;
      border-radius: 20px;
    }
  }
  @media (min-width: 43rem) {
    width: 410px;
    height: 420px;
    div {
      img {
        width: 400px;
        height: 400px;

        aspect-ratio: 1;
      }
    }
  }
  @media (min-width: 48rem) {
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(3, auto);

    div {
      img {
        width: 190px;
        height: 190px;
        aspect-ratio: 1;
      }
    }
    div:nth-child(4) {
      grid-column: 1/ 3;
      grid-row: span 2;
      img {
        width: 400px;
        height: 410px;
      }
    }
  }
`;
export const Comments = styled.div`
  height: 200px;
  padding: 0 10px;
  width: 170px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 20px;

  @media (min-width: 43rem) {
    width: 560px;
    padding: 0 20px;
    gap: 40px;
    margin-bottom: 130px;
    height: 350px;
  }
  @media (min-width: 61rem) {
    width: 860px;
    height: 350px;
  }
`;
