import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CenterInfo from "./pages/CenterInfo";
import FAQ from "./pages/FAQ";
import Animals from "./pages/Animals";
import AnimalCardInfo from "./pages/AnimalCardInfo";
import AdoptProcess from "./pages/AdoptProcess";
import Fosterprogram from "./pages/Fosterprogram";
import Playground from "./pages/Playground";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/centerinfo" element={<CenterInfo />} />
        <Route path="/info/faq" element={<FAQ />} />
        <Route path="/findfamily/animals" element={<Animals />} />
        <Route path="/animals/:animalNO" element={<AnimalCardInfo />} />
        <Route path="/findfamily/adoptprocess" element={<AdoptProcess />} />
        <Route path="/findfamily/fosterprogram" element={<Fosterprogram />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </>
  );
}
