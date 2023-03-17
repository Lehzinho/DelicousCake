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

export const Container = styled.div`
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  hr {
    display: none;
    border: 1px solid ${({ theme }) => theme.COLORS.DECORATION};
  }
  h2 {
    font-family: "Mirza";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
  }
  main {
  }
  @media (min-width: 45rem) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 5rem;
      }
      hr {
        display: inline-block;
        border: 1px solid ${({ theme }) => theme.COLORS.DECORATION};

        width: 400px;
      }
    }

    .active {
      input {
        width: 400px;
        height: 40px;
      }
      textarea {
        width: 400px;
        height: 230px;
      }
      label {
        font-size: 1.125rem;
      }
    }
  }
`;

export const Formulario = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin: 130px auto;
  position: relative;
  animation: ${slideRight} 1s linear forwards;

  > div {
    position: relative;
    img {
      width: 460px;
      height: 500px;
    }
    &:after {
      content: "";
      width: 200px;
      height: 700px;
      border-radius: 15px;
      background-color: ${({ theme }) => theme.COLORS.DECORATION};
      position: absolute;
      top: -100px;
      right: -50px;
      z-index: -1;
    }
  }
  @media (min-width: 45rem) {
  }
`;

export const Mapa = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 130px;
  gap: 70px;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${slideLeft} 1s linear forwards;

  img {
    width: 682px;
    height: 450px;
  }
  @media (min-width: 45rem) {
  }
`;
