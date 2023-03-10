import styled from "styled-components";

export const CakeInfo = styled.div`
  width: fit-content;
  p {
    width: min(30vw, 400px);
  }
  img {
    width: min(30vw, 400px);
  }
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
  align-items: center;

  width: 100%;
  height: 100vh;
  hr {
    margin: 0 auto 50px;
    width: 200px;
  }

  h2 {
    font-family: "Mirza";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
  }
  main {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: calc(10vw * 1.5);
    margin-bottom: 50px;
    p {
      margin-top: 60px;
    }
  }
  @media (min-width: 45rem) {
    h2 {
      display: inline;
      font-size: 5rem;
    }
    hr {
      margin: -20px auto 50px;
      width: 400px;
    }
  }
`;
