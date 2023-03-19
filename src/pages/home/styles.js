import styled, { keyframes } from "styled-components";
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

export const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    width: 100vw;
    h1 {
      font-family: "Mirza", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 2.5rem;
    }
    p {
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }

  @media (min-width: 45rem) {
    main {
      height: 100%;
    }
  }
`;
export const FotoDisplay = styled.div`
  position: relative;
  img {
    width: 400px;
    height: 400px;
    margin: 15px auto;
  }
  &:after {
    content: "";
    width: 200px;
    height: 480px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.DECORATION};
    position: absolute;
    top: -25px;
    left: 250px;
    z-index: -1;
  }
`;

export const Orcamento = styled.section`
  width: 210px;
  margin: 10px auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    width: 210px;
    margin-top: 40px;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
  button {
    margin-top: 20px;
  }
  @media (min-width: 45rem) {
    animation: ${slideRight} 1s linear forwards;

    flex-direction: row;
    align-items: center;
    width: 70vw;
    height: fit-content;
    flex-wrap: wrap;
    gap: 100px;
  }
`;

export const Produtos = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  position: relative;

  p {
    text-align: center;
    font-family: "Dancing Script";
    font-size: 18px;
  }
  h1 {
    text-align: center;
  }

  @media (min-width: 45rem) {
    animation: ${slideLeft} 1s linear forwards;

    margin-top: 50px;
    img {
      width: min(900px, 75vw);
      height: min(600px, 50vw);
    }
  }
`;
export const Slides = styled.div`
  width: 100%;
  display: flex;
  overflow-x: none;
  align-items: center;
  justify-items: center;
  margin: 20px auto;

  @media (min-width: 45rem) {
  }
`;
