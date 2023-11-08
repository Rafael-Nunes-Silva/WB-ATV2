import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);

    const HandleSubmit = function() {
        APIProduto.AdicionarProduto(nome, valor);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit} className="form-cadastro">
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="nome">Nome</label>
                        <input
                            name="nome"
                            placeholder="Nome"
                            type="text"
                            onChange={(event) => { setNome(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="valor">Valor</label>
                        <input
                            name="valor"
                            placeholder="0"
                            type="number"
                            onChange={(event) => { setValor(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}