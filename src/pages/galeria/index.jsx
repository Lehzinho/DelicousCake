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
import { useRef, useState } from "react";

const comments = [
  {
    nome: "Dayanna",
    comentario:
      "Não tenho palavras para agradecer pelo carinho que você transmite através desse trabalho lindo. Mexe com a emoção daquele momento. Você nao tem ideia de quantas pessoas amaram o seu trabalho e eu nem preciso dizer foi um evento no igreja e foi incrivel, você fez parte daquele momento. Obrigada mais uma vez por tornar cada momento ainda mais especial.",
  },
  {
    nome: "Carolina Kloc",
    comentario:
      "Tô pra te mandar as fotos  desde ontem, Senhor que bolo maravilhoso e super comentado da festa, tanto quanto o capricho quanto ao sabor e leveza da foto, quando eu e a Mari pegamos o bolo a gente ficou admirada com o capricho. Eu só falava pra ela, Mari segura bem esse bolo!",
  },
  {
    nome: "Viviane",
    comentario:
      "Excelente trabalho e capricho. O bolo de quatro leites com geleia de frutas vermelhas é o meu preferido. Super recomendo!",
  },
];

export function Galeria({ media }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const position = scrollRef.current.scrollLeft;
    setScrollPosition(position);
  };

  const handleScrollLeft = () => {
    smoothScroll(scrollRef.current, scrollPosition, scrollPosition - 860, 300);
  };

  const handleScrollRight = () => {
    smoothScroll(scrollRef.current, scrollPosition, scrollPosition + 860, 300);
  };

  const smoothScroll = (element, from, to, duration) => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const increment = (to - from) * (progress / duration);
      const newPosition = Math.min(
        Math.max(from + increment, 0),
        element.scrollWidth - element.clientWidth
      );

      element.scrollTo({ left: newPosition });

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setScrollPosition(newPosition);
      }
    };

    requestAnimationFrame(animate);
  };

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
            {!media && <BsArrowLeftCircle onClick={handleScrollLeft} />}
            <Comments ref={scrollRef} onScroll={handleScroll}>
              {comments.map((e, index) => (
                <Comment key={index} nome={e.nome} comentario={e.comentario} />
              ))}
            </Comments>
            {!media && <BsArrowRightCircle onClick={handleScrollRight} />}
          </div>
        </Avaliações>
      </main>
      <Footer />
    </Container>
  );
}
