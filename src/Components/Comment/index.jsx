import { Container } from "./styles";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export function Comment({ nome, comentario }) {
  return (
    <Container>
      <FaRegSmileBeam />
      <h5>{nome}</h5>
      <p>{comentario}</p>
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </Container>
  );
}
