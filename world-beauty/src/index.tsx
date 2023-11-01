import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cadastro">
            <Route path="cliente" element={<Cadastro />} />
            <Route path="produto" element={<App />} />
            <Route path="servico" element={<App />} />
          </Route>
          <Route path="listagem" element={<App />}>
            <Route path="cliente" element={<App />} />
            <Route path="produto" element={<App />} />
            <Route path="servico" element={<App />} />
          </Route>
          <Route path="atualizar" element={<App />}>
            <Route path="cliente" element={<App />} />
            <Route path="produto" element={<App />} />
            <Route path="servico" element={<App />} />
          </Route>
          <Route path="deletar" element={<App />}>
            <Route path="cliente" element={<App />} />
            <Route path="produto" element={<App />} />
            <Route path="servico" element={<App />} />
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
