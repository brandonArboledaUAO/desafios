import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Reprodutor from "./pages/Reprodutor.jsx";
import Navegador from "./pages/Navegador.jsx";

export default function App() {
  return (
    <HashRouter>
      <nav>
        <NavLink to="/" end>Reproductor</NavLink>
        {" | "}
        <NavLink to="/historial">Historial</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Reprodutor />} />
        <Route path="/historial" element={<Navegador />} />
      </Routes>
    </HashRouter>
  );
}