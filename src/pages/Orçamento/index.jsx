import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import { Container, CakeInfo } from "./styles";
import { CakeForm } from "../../Components/CakeForm";
import cakeInfo from "../../assets/Tropical.jpg";
import { Nav } from "../../Components/Nav";

export function Orçamento({ media }) {
  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <div>
          <h2>Orçamento</h2>
          <hr />
        </div>
        <div>
          <CakeForm hasBudget />
          {!media && (
            <CakeInfo>
              <img src={cakeInfo} alt="" />
              <p>
                Bem-vindo(a) a página de orçamentos da Delicious Cakes, eu sou
                Leidiane Borges e terei o prazer de fazer parte de um momento
                especial para você e sua família.
                <br />
                <br />
                Preencha os dados conforme solicitado e se tiver alguma
                observação a mais que gostaria de informar, adicione à caixa de
                informações adicionais, assim que enviar estarei entrando em
                contato em no máximo 48 horas.
                <br />
                <br />
                Você será redirecionado(a) para o meu WhatsApp, caso esteja em
                um computador você deverá utilizar o WhatsApp Web.
              </p>
            </CakeInfo>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
