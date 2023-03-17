import { Container, NavButton, SocialMedia } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import logo from "../../assets/LogoNav.svg";

export function Nav() {
  const [active, setActive] = useState();

  function handleClick(e) {
    setActive(!active);
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <NavButton>
        <ul>
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
        </ul>
      </NavButton>
      <SocialMedia>
        <a
          href="https://www.facebook.com/leidiane.borges.3?mibextid=ZbWKwL"
          target="_blank"
        >
          <AiOutlineFacebook />
        </a>
        <a
          href="https://instagram.com/delicioous_cakes?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>

        <a href="https://wa.me/+353877945126" target="_blank">
          <AiOutlineWhatsApp />
        </a>
      </SocialMedia>
    </Container>
  );
}
