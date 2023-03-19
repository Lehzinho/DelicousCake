import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import { Container, Formulario, Mapa } from "./styles";
import { CakeForm } from "../../Components/CakeForm";
import Image from "../../assets/Murmaid.jpg";
import Map from "../../assets/Mapa.png";
import { Nav } from "../../Components/Nav";

export function Contato({ media }) {
  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <h2>Contato</h2>
        <hr />
        <Formulario>
          <CakeForm contato />
          {!media && (
            <div>
              <img src={Image} alt="" />
            </div>
          )}
        </Formulario>
        {!media && (
          <Mapa>
            <img src={Map} alt="" />
            <div>
              <h3>CONTATO</h3>
              <ul>
                <li>+353 87 794-5126</li>
                <li>lleidilica@hotmail.com</li>
                <li>Kilbeggan - Ireland</li>
              </ul>
            </div>
          </Mapa>
        )}
      </main>
      <Footer />
    </Container>
  );
}
