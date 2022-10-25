import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { Cadastro } from "../page/Cadastro";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="*" element={<h1>ERRO 404 PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
