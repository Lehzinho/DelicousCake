import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Button({ link, title, ...rest }) {
  return (
    <NavLink to={link}>
      <Container {...rest}>{title}</Container>
    </NavLink>
  );
}
