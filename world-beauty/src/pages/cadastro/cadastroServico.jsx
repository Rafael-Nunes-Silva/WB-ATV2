import { useState } from "react";
import { APIServico } from "../../WB-ATV1/out/Interface/APIReact";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);
    const [servExiste, setServExiste] = useState(false);

    const HandleSubmit = function () {
        APIServico.AdicionarProduto(nome, valor);
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
                    {
                        !servExiste &&
                        <button type="submit" className="form-submit">Cadastrar</button>
                    }
                </div>
            </form>
        </div>
    );
}