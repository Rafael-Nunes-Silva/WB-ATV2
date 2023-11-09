import "../css/button.css";
import { useState } from "react";
import { APICliente } from "../../WB-ATV1/out/Interface/APIReact";
import PopupListagem from "../../components/popupListagem";

export default function ListagemCliente() {
    const [listagem, setListagem] = useState([]);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const ListarTodos = function () {
        setListagem(APICliente.GetClientes().map((value) =>
            <>
                <p>{value.nome}</p><hr/>
            </>
        ));
        setMostrarResultado(true);
    }

    return (
        <div>
            {
                mostrarResultado &&
                    <PopupListagem
                        title="Listar Todos"
                        CloseCallback={() => setMostrarResultado(false)}
                        listagem={listagem}
                    />
            }
            <div className="buttons-listagem">
                <button className="button" onClick={ListarTodos}>Listar Todos</button>
                <button className="button" onClick={() => { }}>
                    Listar Top
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Quantidade)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Top
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Valor)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Sub
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Quantidade)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Sub
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Valor)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Top
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Quantidade)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Top
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Valor)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Sub
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Quantidade)
                </button>
                <button className="button" onClick={() => { }}>
                    Listar Sub
                    <input placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Valor)
                </button>
                <button className="button" onClick={() => { }}>Listar por Genero</button>
            </div>
        </div>
    );
}