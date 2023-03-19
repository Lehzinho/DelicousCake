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
        <span>
          <li>Leidiane Borges</li>
          <li className="active">Kilbeggan</li>
          <li className="active">Irlanda</li>
        </span>
        <span>
          <li>+353 87 794-5126</li>
          <li>lleidilica@hotmail.com</li>
          <Social>
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
          </Social>
        </span>
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
        {/* <small> Site feito por VivianeCastilho e Alexandre Toulios</small> */}
      </Copyright>
    </Container>
  );
}
