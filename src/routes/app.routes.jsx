import { Route, Routes } from "react-router-dom";
import useMedia from "../hooks/useMedia";
import { Contato } from "../pages/Contato";
import { Galeria } from "../pages/galeria";
import { Home } from "../pages/home";
import { Orçamento } from "../pages/Orçamento";
import { Sobre } from "../pages/Sobre";

export function AppRoutes() {
  const mobile = useMedia("(max-width: 45rem)");

  return (
    <Routes>
      <Route path="/" element={<Home media={mobile} />} />
      <Route path="/contato" element={<Contato media={mobile} />} />
      <Route path="/galeria" element={<Galeria media={mobile} />} />
      <Route path="/orçamento" element={<Orçamento media={mobile} />} />
      <Route path="/sobre" element={<Sobre media={mobile} />} />
    </Routes>
  );
}
