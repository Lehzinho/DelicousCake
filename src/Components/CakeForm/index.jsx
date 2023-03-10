import { useState } from "react";
import { Button } from "../Button";
import DropdownMenu from "../DropdownMenu";
import { Container, Form, Fieldset } from "./styles";

export function CakeForm({ hasBudget = false, contato }) {
  const recheios = [
    "Ninho com Morangos",
    "Ninho com Abacaxi",
    "Prestígio",
    "Dois Amores (brigadeiros branco e de chocolate)",
    "Oreo",
    "4 leites com geleia de frutas vermelhas",
  ];

  const [massa, setMassa] = useState("");
  const [andares, setAndares] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [recheio1, setRecheio1] = useState("");
  const [recheio2, setRecheio2] = useState("");
  const [tamanho, setTamanho] = useState("");

  const handleMassaChange = (event) => {
    setMassa(event.target.value);
  };

  const handleAndaresChange = (event) => {
    setAndares(event.target.value);
  };

  const handleCoberturaChange = (event) => {
    setCobertura(event.target.value);
  };

  const handleRecheio1Change = (event) => {
    setRecheio1(event);
  };

  const handleRecheio2Change = (event) => {
    setRecheio2(event);
  };

  const handleTamanhoChange = (event) => {
    setTamanho(event.target.value);
  };

  return (
    <Container className={contato ? "active" : ""}>
      <Form className={contato ? "active" : ""}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" />
        <label htmlFor="information">Additional Information:</label>
        {hasBudget && (
          <div>
            <Fieldset>
              <legend>MASSA:</legend>

              <div>
                <input
                  type="radio"
                  id="baunilha"
                  name="massa"
                  defaultValue="baunilha"
                  checked={massa === "baunilha"}
                  onChange={handleMassaChange}
                />
                <label htmlFor="baunilha">Baunilha</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="chocolate"
                  name="massa"
                  defaultValue="chocolate"
                  checked={massa === "chocolate"}
                  onChange={handleMassaChange}
                />
                <label htmlFor="chocolate">Chocolate</label>
              </div>
            </Fieldset>
            <Fieldset>
              <legend>ANDARES:</legend>

              <div>
                <input
                  type="radio"
                  id="andarUm"
                  name="andares"
                  defaultValue="andarUm"
                  checked={andares === "andarUm"}
                  onChange={handleAndaresChange}
                />
                <label htmlFor="andarUm">1 Andar</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="andarDois"
                  name="andares"
                  defaultValue="andarDois"
                  checked={andares === "andarDois"}
                  onChange={handleAndaresChange}
                />
                <label htmlFor="andarDois">2 andares</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="andarTrez"
                  name="andares"
                  defaultValue="andarTrez"
                  checked={andares === "andarTrez"}
                  onChange={handleAndaresChange}
                />
                <label htmlFor="andarTrez">3 andares</label>
              </div>
            </Fieldset>
            <Fieldset>
              <legend>COBERTURA:</legend>

              <div>
                <input
                  type="radio"
                  id="chantininho"
                  name="cobertura"
                  defaultValue="chantininho"
                  checked={cobertura === "chantininho"}
                  onChange={handleCoberturaChange}
                />
                <label htmlFor="chantininho">Chantininho</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="buttercream"
                  name="cobertura"
                  defaultValue="buttercream"
                  checked={cobertura === "buttercream"}
                  onChange={handleCoberturaChange}
                />
                <label htmlFor="buttercream">Buttercream</label>
              </div>
            </Fieldset>
            <Fieldset>
              <legend>RECHEIOS: (Até 2 sabores)</legend>
              <DropdownMenu
                options={recheios}
                handleRecheioChange={handleRecheio1Change}
              />
              <DropdownMenu
                options={recheios}
                handleRecheioChange={handleRecheio2Change}
              />
            </Fieldset>
            <Fieldset>
              <legend>TAMANHO:</legend>

              <div>
                <input
                  type="radio"
                  id="PP"
                  name="tamanho"
                  defaultValue="PP"
                  checked={tamanho === "PP"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="PP">PP - 15cm (13 fatias)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="P"
                  name="tamanho"
                  defaultValue="P"
                  checked={tamanho === "P"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="P">P - 17 cm (20 fatias)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="G"
                  name="tamanho"
                  defaultValue="G"
                  checked={tamanho === "G"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="G">G - 20 cm (28 fatias)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="GG"
                  name="tamanho"
                  defaultValue="GG"
                  checked={tamanho === "GG"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="GG">GG - 22 cm (34 fatias)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Master_1"
                  name="tamanho"
                  defaultValue="Master_1"
                  checked={tamanho === "Master_1"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="Master_1">Master 1 - 25cm (42 fatias)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Master_2"
                  name="tamanho"
                  defaultValue="Master_2"
                  checked={tamanho === "Master_2"}
                  onChange={handleTamanhoChange}
                />
                <label htmlFor="Master_2">Master 2 - 27cm (50 fatias)</label>
              </div>
            </Fieldset>
          </div>
        )}
        <textarea name="information" />
        <Button className={contato ? "active" : ""} title="SEND" />
      </Form>
    </Container>
  );
}
