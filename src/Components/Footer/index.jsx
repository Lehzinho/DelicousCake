import { Container, Copyright, Info, Social, Links } from "./styles";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export function Footer() {
  const [active, setActive] = useState();

  function handleClick(e) {
    setActive(!active);
  }

  return (
    <Container>
      <h1>CONTATO</h1>
      <Info>
        <info>
          <li>Leidiane Borges</li>
          <li className="active">Kilbeggan</li>
          <li className="active">Irlanda</li>
        </info>
        <info>
          <li>+353 87 794-5126</li>
          <li>lidiane@gmail.com</li>
          <Social>
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineWhatsApp />
          </Social>
        </info>
        <Links>
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
        </Links>
      </Info>
      <Copyright>
        <small> Copyright © Todos os direitos reservados</small>
        <small> Site feito por VivianeCastilho e Alexandre Toulios</small>
      </Copyright>
    </Container>
  );
}
