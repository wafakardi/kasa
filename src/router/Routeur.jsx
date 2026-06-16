import { Routes, Route } from "react-router-dom";

import Accueil from "../pages/Accueil";
import APropos from "../pages/APropos";
import Logement from "../pages/Logement";
import Erreur404 from "../pages/Erreur404";

function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/apropos" element={<APropos />} />

      <Route path="/logement/:id" element={<Logement />} />

      <Route path="*" element={<Erreur404 />} />
    </Routes>
  );
}

export default Routeur;