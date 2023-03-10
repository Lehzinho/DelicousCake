import styled from "styled-components";

export const DropdownButton = styled.div`
  width: 185px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #ff807c;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 14px;
  border-radius: 4px;
  color: #000;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  width: 185px;
  position: absolute;
  top: 25px; /* updated */
  left: 0; /* added */
  border: 1px solid #ff807c;
  border-radius: 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  li {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 14px;
    border-radius: 4px;
  }
`;

export const DropdownListItem = styled.li`
  background: #fff;
  color: #000;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;
