import { useState } from "react";
import "../css/form.css";
import { APICliente, APICPF, APIProduto, APIRG, APIServico, APITelefone } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

function Cadastrar(nome, nomeSocial, genero, CPFNumero, CPFDataEmissao, RGs, telefones, produtos, servicos) {
    APICliente.AdicionarCliente(
        nome,
        nomeSocial,
        genero,
        APICPF.NovoCPF(CPFNumero, new Date(CPFDataEmissao)),
        RGs,
        Date.now(),
        telefones.map((tel) => {
            const matches = tel.match(/(\(\d{2}\))(\d{5})(\d{4})/);
            return APITelefone.NovoTelefone(matches[1], matches[2] + matches[3]);
        }),
        produtos,
        servicos
    );
}

export default function CadastroCliente() {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [genero, setGenero] = useState("");
    const [CPFNumero, setCPFNumero] = useState("");
    const [CPFDataEmissao, setCPFDataEmissao] = useState("");
    const [RGs, setRGs] = useState([]);
    const [telefones, setTelefones] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);

    const HandleSetRGs = function (event) {

    }
    const HandleSetTelefones = function (event) {
        const novosTelefones = [];

        const input = event.target.value.split("\n");
        const inputFormatado = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i].length < 11) {
                inputFormatado.push(`${input[i]}`);
                continue;
            }
            const matches = input[i].replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
            inputFormatado.push(`(${matches[1]}) ${matches[2]}-${matches[3]}`);

            novosTelefones.push(APITelefone.NovoTelefone(matches[1], matches[2] + matches[3]));
        }
        event.target.value = inputFormatado.join("\n");

        setTelefones(novosTelefones);
    }

    const HandleSubmit = function (event) {
        Cadastrar(
            nome,
            nomeSocial,
            genero,
            CPFNumero,
            CPFDataEmissao,
            RGs,
            telefones,
            produtos,
            servicos
        );
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
                        <label for="nomeSocial">Nome Social</label>
                        <input
                            name="nomeSocial"
                            placeholder="Nome Social"
                            type="text"
                            onChange={(event) => { setNomeSocial(event.target.value) }}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="genero">Genero</label>
                        <input
                            name="genero"
                            placeholder="Genero"
                            type="text"
                            onChange={(event) => { setGenero(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="cpfNumero">CPF - Números</label>
                        <input
                            name="cpfNumero"
                            placeholder="123.456.789-10"
                            type="text"
                            onChange={(event) => { setCPFNumero(event.target.value) }}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="cpfDataEmissao">CPF - Emissão</label>
                        <input
                            name="cpfDataEmissao"
                            placeholder="dd/mm/aaaa"
                            type="date"
                            onChange={(event) => { setCPFDataEmissao(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="rgs">RGs</label>
                        <textarea
                            name="rgs"
                            placeholder="1234567890
0987654321"
                            onChange={(event) => { setRGs(event.target.value) }}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="telefones">Telefones</label>
                        <textarea
                            name="telefones"
                            placeholder="(xx) xxxxx-xxxx
(yy) yyyyy-yyyy
(zz) zzzzz-zzzz"
                            // onChange={(event) => { setTelefones(event.target.value) }}
                            onBlur={HandleSetTelefones}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="produtos">Produtos</label>
                        <Select multiple
                            name="produtos"
                            options={APIProduto.GetProdutos().map(
                                (p) => ({ name: p.nome, value: p.valor })
                            )}
                            // options={[
                            //     { name: "1", value: 1 },
                            //     { name: "2", value: 2 },
                            //     { name: "3", value: 3 },
                            //     { name: "4", value: 4 }
                            // ]}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="servicos">Serviços</label>
                        <Select
                            name="servicos"
                            options={APIServico.GetServicos().map(
                                (s) => ({ name: s.nome, value: s.valor })
                            )}
                            // options={[
                            //     { name: "1", value: 1 },
                            //     { name: "2", value: 2 },
                            //     { name: "3", value: 3 },
                            //     { name: "4", value: 4 }
                            // ]}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit" className="form-submit" onClick={() => { }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}