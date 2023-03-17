import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 360px;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  @media (min-width: 45rem) {
    width: 800px;
    height: 700px;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;

  width: ${(props) => props.count * 50}%;
  left: ${(props) => -props.activeIndex * 100}%;

  transition: left 2s ease-in-out;
  @media (min-width: 45rem) {
    width: ${(props) => props.count * 33.4}%;
    left: ${(props) => -props.activeIndex * 100}%;
  }
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: fit-content;
  img {
    width: 360px;
    height: 300px;
  }

  @media (min-width: 45rem) {
    img {
      width: 800px;
      height: 700px;
    }
  }
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 5;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "black" : "gray")};
  margin: 0 5px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
