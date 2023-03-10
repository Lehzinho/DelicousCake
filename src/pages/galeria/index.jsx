import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import {
  Comments,
  Container,
  Feed,
  GaleriaSlide,
  Avaliações,
  Fotos,
} from "./styles";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Foto from "../../assets/Marvel.jpg";
import { Comment } from "../../Components/Comment";
import { Nav } from "../../Components/Nav";

export function Galeria({ media }) {
  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <GaleriaSlide>
          <h1>Galeria de Fotos</h1>
          <Fotos>
            <BsArrowLeftCircle />
            <Feed>
              <img src={Foto} alt="" />
              <img src={Foto} alt="" />
              <img src={Foto} alt="" />
              <img src={Foto} alt="" />
              <img src={Foto} alt="" />
              <img src={Foto} alt="" />
            </Feed>
            <BsArrowRightCircle />
          </Fotos>
        </GaleriaSlide>
        <Avaliações>
          <h1>Avaliações</h1>
          <div>
            <BsArrowLeftCircle />
            <Comments>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </Comments>
            <BsArrowRightCircle />
          </div>
        </Avaliações>
      </main>
      <Footer />
    </Container>
  );
}
