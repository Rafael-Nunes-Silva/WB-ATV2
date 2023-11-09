import { useEffect, useState } from "react";
import { APICliente } from "../../WB-ATV1/out/Interface/APIReact";

export default function AtualizarCliente() {
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

    useEffect(() => {
        ListarTodos();
    });

    return (
        <div>
            {listagem}
        </div>
    );
}