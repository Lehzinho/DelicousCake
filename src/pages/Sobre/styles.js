import styled, { keyframes } from "styled-components";
import FotoPerfil2 from "../../assets/PerfilPick.jpg";

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
    p {
      font-family: Roboto, sans-serif;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0em;
      text-align: left;
    }
    img {
      margin: 20px 0;
    }
  }

  @media (min-width: 45rem) {
    main {
      h1 {
        position: relative;
        animation: ${slideRight} 1s linear forwards;

        font-size: 5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
export const ComoTudoComeçou = styled.div`
  padding-bottom: 100px;
  width: 60vw;
  height: 600px;
  position: relative;
  margin: 100px auto 0;
  animation: ${slideRight} 1s linear forwards;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DECORATION};
  background-image: url(${FotoPerfil2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  &:after {
    content: "";
    width: min(15vw, 200px);
    height: min(55vw, 650px);
    background-color: ${({ theme }) => theme.COLORS.DECORATION};
    border-radius: 15px;
    position: absolute;
    top: max(-5vw, -75px);
    right: -80px;
    z-index: -1;
  }
  @media (min-width: 45rem) {
    width: min(60vw, 800px);
    height: min(45vw, 500px);
  }
`;

export const SobreMim = styled.section`
  width: 250px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  animation: ${slideLeft} 1s linear forwards;

  button {
    margin-top: 20px;
  }
  > img {
    width: 250px;
    height: 250px;
    border-radius: 15px;
    object-fit: cover;
  }

  @media (min-width: 45rem) {
    flex-direction: column;
    margin-bottom: 100px;

    div {
      width: 550px;
      display: flex;
      flex-direction: column;
      p {
        line-height: 20px;
      }
    }

    > img {
      width: 450px;
      height: 450px;
      border-radius: 15px;
      object-fit: cover;
    }
  }

  @media (min-width: 70rem) {
    width: 1100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
