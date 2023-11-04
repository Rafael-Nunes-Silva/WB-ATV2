import "../css/listagem.css";
import "../css/button.css";
import { useState } from "react";
import { Empresa } from "../../app/Business/Empresa";

function MsgBox(msg) {
    return (
        <div id="msg-box">
            <p>{msg}</p>
        </div>
    );
}

export default function ListagemCliente() {
    const [showMessage, setMessage] = useState("");
    function HandleMessage(e) {
        console.log(e);
    }

    return (
        <div>
            {  }
            <div id="buttonsListagem">
                <button className="button" onClick={Empresa.Lis}>Listar Todos</button>
                <button className="button" onClick={() => {}}>Listar Top X por Consumo de Produtos (Quantidade)</button>
                <button className="button" onClick={() => {}}>Listar Top X por Consumo de Produtos (Valor)</button>
                <button className="button" onClick={() => {}}>Listar Sub X por Consumo de Produtos (Quantidade)</button>
                <button className="button" onClick={() => {}}>Listar Sub X por Consumo de Produtos (Valor)</button>
                <button className="button" onClick={() => {}}>Listar Top X por Consumo de Serviços (Quantidade)</button>
                <button className="button" onClick={() => {}}>Listar Top X por Consumo de Serviços (Valor)</button>
                <button className="button" onClick={() => {}}>Listar Sub X por Consumo de Serviços (Quantidade)</button>
                <button className="button" onClick={() => {}}>Listar Sub X por Consumo de Serviços (Valor)</button>
                <button className="button" onClick={() => {}}>Listar por Genero</button>
            </div>
        </div>
    );
}