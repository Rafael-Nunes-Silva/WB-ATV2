import { useState } from "react";
import { APIServico } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function DeletarServico() {
    const [nomeServSelecionado, setNomeServSelecionado] = useState("");

    const HandleSubmit = function (event) {
        APIServico.Deletar(nomeServSelecionado);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit} className="form-cadastro">
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="servico">Serviço</label>
                        <Select
                            name="servico"
                            options={APIServico.GetServicos().map(
                                (s) => ({ name: s.nome, value: s.valor })
                            )}
                            onChange={(event) => {
                                const selecionado = event.target.options[event.target.selectedIndex];
                                setNomeServSelecionado(selecionado.innerText);
                            }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit" className="form-submit">Deletar</button>
                </div>
            </form>
        </div>
    );
}