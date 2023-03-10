import styled from "styled-components";

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
  position: relative;
  margin: 100px auto 0;
  border-bottom: 1px solid black;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: 100%;
  }
  &:after {
    content: "";
    width: 15vw;
    height: 50vw;
    background-color: red;
    border-radius: 15px;
    position: absolute;
    top: -3.5vw;
    right: -80px;
    z-index: -1;
  }
  @media (min-width: 45rem) {
  }
`;

export const SobreMim = styled.section`
  width: 206px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  button {
    margin-top: 20px;
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
    }
  }

  @media (min-width: 70rem) {
    width: 1100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
