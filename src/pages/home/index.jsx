import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import { Container, Orcamento, Produtos, Slides, FotoDisplay } from "./styles";
import Display from "../../assets/Wedding.jpg";
import { Carousel } from "../../Components/Carousel";
import slide from "../../assets/Hallowin.jpg";
import slide1 from "../../assets/Marvel.jpg";
import slide2 from "../../assets/Netflix.jpg";
import { Nav } from "../../Components/Nav";
import { useRef } from "react";

export function Home({ media }) {
  const slides = [
    {
      id: 1,
      src: slide,
      alt: "Slide 1",
      caption: "Caption for slide 1",
    },
    {
      id: 2,
      src: slide1,
      alt: "Slide 2",
      caption: "Caption for slide 2",
    },
    {
      id: 3,
      src: slide2,
      alt: "Slide 3",
      caption: "Caption for slide 3",
    },
  ];

  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <Orcamento>
          <div>
            <h1>Bolos Decorados</h1>
            <p>
              Trabalhamos com decoração de bolos em chantilly, buttercream
              conforme a sua escolha, para fazer seu momento inesquecível.
            </p>
            <Button link="/orçamento" title="Faça um orçamento" />
          </div>
          {!media && ( // Check the width here and conditionally render the image
            <FotoDisplay>
              <img src={Display} alt="Foto Display" />
            </FotoDisplay>
          )}
        </Orcamento>
        <Produtos>
          <h1>Nossos Produtos</h1>
          <p>"A felikcidade mora em um padaçco de bolo!"</p>
          <Slides>
            <Carousel slides={slides} autoPlay={false} interval={3000} />
          </Slides>
        </Produtos>
      </main>
      <Footer />
    </Container>
  );
}
