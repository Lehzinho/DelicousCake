import { Container } from "./styles";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export function Comment() {
  return (
    <Container>
      <FaRegSmileBeam />
      <h5>JULIANA C MARQUES</h5>
      <p>
        “O bolo de Prestígio com castanhas ganhou meu coração. É simplesmente
        maravilhoso. Recomendo”
      </p>
      <div>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    </Container>
  );
}
