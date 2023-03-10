import { Container, Menu } from "./styles";
import Logo from "../../assets/LogoNav.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function MobileNav() {
  const [active, setActive] = useState();

  function handleClick(e) {
    setActive(!active);
  }
  return (
    <Container>
      <img src={Logo} alt="" />
      <div>
        <button
          className={active ? "active" : ""}
          onClick={() => setActive(!active)}
        ></button>
        {active && (
          <Menu>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "none")}
              onClick={handleClick}
            >
              <li>Início</li>
            </NavLink>
            <NavLink
              to="/galeria"
              className={(navData) => (navData.isActive ? "active" : "none")}
              onClick={handleClick}
            >
              <li>Galeria</li>
            </NavLink>
            <NavLink
              to="/sobre"
              className={(navData) => (navData.isActive ? "active" : "none")}
              onClick={handleClick}
            >
              <li>Sobre</li>
            </NavLink>
            <NavLink
              to="/orçamento"
              className={(navData) => (navData.isActive ? "active" : "none")}
              onClick={handleClick}
            >
              <li>Orçamento</li>
            </NavLink>
            <NavLink
              to="/contato"
              className={(navData) => (navData.isActive ? "active" : "none")}
              onClick={handleClick}
            >
              <li>Contato</li>
            </NavLink>
          </Menu>
        )}
      </div>
    </Container>
  );
}
