import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Button({ handleClick, link, title, ...rest }) {
  return (
    <NavLink to={link}>
      <Container
        onClick={() => {
          window.open(handleClick, "_blank");
        }}
        {...rest}
      >
        {title}
      </Container>
    </NavLink>
  );
}
