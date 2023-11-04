import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/cadastro/cliente";
import ListagemCliente from "./pages/listagem/cliente";
import AtualizarCliente from "./pages/atualizar/cliente";
import DeletarCliente from "./pages/deletar/cliente";
import Cliente from "./pages/cliente";
import Produto from "./pages/produto";
import Servico from "./pages/servico";
import CadastroProduto from "./pages/cadastro/produto";
import ListagemProduto from "./pages/listagem/produto";
import AtualizarProduto from "./pages/atualizar/produto";
import DeletarProduto from "./pages/deletar/produto";
import CadastroServico from "./pages/cadastro/servico";
import ListagemServico from "./pages/listagem/servico";
import AtualizarServico from "./pages/atualizar/servico";
import DeletarServico from "./pages/deletar/servico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cliente" element={<Cliente />}>
            <Route path="cadastro" element={<CadastroCliente />} />
            <Route path="listagem" element={<ListagemCliente />} />
            <Route path="atualizar" element={<AtualizarCliente />} />
            <Route path="deletar" element={<DeletarCliente />} />
          </Route>
          <Route path="produto" element={<Produto />}>
            <Route path="cadastro" element={<CadastroProduto />} />
            <Route path="listagem" element={<ListagemProduto />} />
            <Route path="atualizar" element={<AtualizarProduto />} />
            <Route path="deletar" element={<DeletarProduto />} />
          </Route>
          <Route path="servico" element={<Servico />}>
            <Route path="cadastro" element={<CadastroServico />} />
            <Route path="listagem" element={<ListagemServico />} />
            <Route path="atualizar" element={<AtualizarServico />} />
            <Route path="deletar" element={<DeletarServico />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
