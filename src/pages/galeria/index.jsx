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
import Foto1 from "../../assets/Haineken.jpg";
import Foto2 from "../../assets/Hallowin.jpg";
import Foto3 from "../../assets/Buterfly.jpg";
import Foto4 from "../../assets/Minie.jpg";
import Foto5 from "../../assets/Netflix.jpg";
import { Comment } from "../../Components/Comment";
import { Nav } from "../../Components/Nav";
import { ImgModal } from "../../Components/ImgModal";

export function Galeria({ media }) {
  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <GaleriaSlide>
          <h1>Galeria de Fotos</h1>
          <Fotos>
            <Feed>
              <ImgModal image={Foto} />
              <ImgModal image={Foto1} />
              <ImgModal image={Foto2} />
              <ImgModal image={Foto3} />
              <ImgModal image={Foto4} />
              <ImgModal image={Foto5} />
            </Feed>
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
