import { useState } from "react";
import { Container, Modal } from "./styles";

export function ImgModal({ image }) {
  const [modal, setModal] = useState(false);
  return (
    <Container onClick={() => setModal(!modal)}>
      {modal && (
        <Modal>
          <img id="ImgModal" src={image} alt="" />
        </Modal>
      )}
      <img src={image} alt="" />
    </Container>
  );
}
