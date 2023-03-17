import styled from "styled-components";
const colorTemplate = ({ theme }) => theme.COLORS.DECORATION;

export const template = styled.div`
  @media (min-width: 45rem) {
  }
`;

export const Container = styled.div`
  > img {
    cursor: pointer;
  }
  @media (min-width: 45rem) {
  }
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(6, 6, 6, 0.51);
  top: 0;
  right: 0;
  position: fixed;
  #ImgModal {
    width: min(70vw, 700px);
    height: min(75vw, 800px);
  }

  @media (min-width: 48rem) {
  }
`;
