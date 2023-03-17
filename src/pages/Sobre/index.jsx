import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import { Container, SobreMim, ComoTudoComeçou } from "./styles";
import FotoPerfil from "../../assets/PerfilPose.jpg";
import { Nav } from "../../Components/Nav";

export function Sobre({ media }) {
  return (
    <Container>
      {media ? <MobileNav /> : <Nav />}
      <main>
        <h1>Como Tudo Começou</h1>
        {!media && (
          <ComoTudoComeçou>
            {/* <img src={FotoPerfil2} alt="" /> */}
          </ComoTudoComeçou>
        )}
        <SobreMim>
          <img src={FotoPerfil} alt="" />
          <div>
            <p>
              Eu sou Leidiane Borges. Eu sou mãe de dois filhos e morando aqui
              na Irlanda há mais de 15 anos. Desde criança, eu sempre fui
              apaixonada por bolos. Me lembro que na adolescência até presenteei
              minha mãe com uma batedeira mas quem fazia bolo era eu mesmo sendo
              aqueles com a massa pronta, o bolo sempre foi umas das minhas
              comidas favoritas principalmente bolo de aniversário. Os anos
              passaram, eu me mudei para Irlanda e me tornei mãe e foi na
              ocasião do primeiro aniversário da minha filha que eu tive a
              vontade de fazer um bolo de festa para ela. Na época, aqui era
              muito difícil encontrar profissionais e insumos na área de
              confeitaria.
            </p>
            <p>
              A partir daí, eu comecei a fazer bolos para celebrar aniversários
              dos meus amigos e fui me encantando cada vez mais pelo universo da
              confeitaria. Logo outras pessoas começaram a fazer encomendas e
              isso se tornou uma atividade de renda extra. Um pouco antes da
              pandemia eu fiz um curso presencial e desde então venho me
              capacitando mais e já não faço bolo apenas como uma fonte de renda
              extra. Agora sou uma profissional e fazer bolo é o meu negócio.
            </p>
            <p>
              Uma das maiores satisfações que tenho como profissional é ver a
              felicidade nos olhos dos meus clientes quando recebem suas
              encomendas. Por isso, eu sempre me dedico em todos os detalhes
              para oferecer o melhor para eles. Seja na escolha de materiais de
              qualidade, seja nas variedades de técnicas de confeitaria, ou
              diversidade de recheios e modelos disponíveis. O meu objetivo é
              sempre fazer o melhor bolo para estar presente nos melhores
              momentos na vida de cada cliente.
            </p>
          </div>
        </SobreMim>
      </main>
      <Footer />
    </Container>
  );
}
