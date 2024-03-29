import { Container, Dots } from "./styles";

export function DotGroup() {
  return (
    <Container>
      <Dots></Dots>
      <Dots></Dots>
      <Dots
        style={{ backgroundColor: ({ theme }) => theme.COLORS.DECORATION }}
      ></Dots>
      <Dots></Dots>
      <Dots></Dots>
      <Dots></Dots>
    </Container>
  );
}
