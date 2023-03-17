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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corrupti quia laborum doloribus maxime excepturi quibusdam quae
                adipisci, reiciendis doloremque! Corrupti dolores accusamus
                laborum itaque rem officiis, reiciendis exercitationem beatae.
                Est, ipsa consequatur aliquam iusto aperiam repudiandae dicta
                quod cupiditate iste alias obcaecati deleniti numquam maiores
                magnam ullam sequi animi. Accusamus voluptatum porro atque!
                Veritatis cupiditate non ullam sapiente voluptas! Optio, maxime
                reprehenderit at ipsum tempora eius modi dolor soluta et
                mollitia laborum velit qui, neque, nobis dicta temporibus
                eligendi id eaque natus hic sequi assumenda eos aspernatur
                libero? Ipsum. Nesciunt sunt atque quasi, laudantium
              </p>
            </CakeInfo>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
