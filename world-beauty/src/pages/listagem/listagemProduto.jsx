import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";
import PopupListagem from "../../components/popupListagem";

export default function ListagemProduto() {
    const [listagem, setListagem] = useState([]);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const ListarTodos = function () {
        setListagem(APIProduto.GetProdutos().map((value) =>
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
            </div>
        </div>
    );
}