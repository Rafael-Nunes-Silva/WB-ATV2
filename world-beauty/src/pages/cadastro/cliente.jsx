import "../css/form.css";

export default function CadastroCliente() {
    return (
        <div>
            <form id="form-cadastro">
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="nome">Nome</label>
                        <input name="nome" placeholder="Nome" type="text" />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="nomeSocial">Nome Social</label>
                        <input name="nomeSocial" placeholder="Nome Social" type="text" />
                    </div>
                    <div className="form-vertical-div">
                        <label for="genero">Genero</label>
                        <input name="genero" placeholder="Genero" type="text" />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="cpf">CPF</label>
                        <input name="cpf" placeholder="123.456.789-10" type="text" />
                    </div>
                    <div className="form-vertical-div">
                        <label for="dataCadastro">Data Cadastro</label>
                        <input name="dataCadastro" placeholder="dd/mm/aaaa" type="text" />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="rgs">RGs</label>
                        <textarea name="rgs" placeholder="1234567890
0987654321" />
                    </div>
                    <div className="form-vertical-div">
                        <label for="telefones">Telefones</label>
                        <textarea name="telefones" placeholder="(xx) xxxxx-xxxx
(yy) yyyyy-yyyy
(zz) zzzzz-zzzz" />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="produtos">Produtos</label>
                        <textarea name="produtos" placeholder="Produtos" />
                    </div>
                    <div className="form-vertical-div">
                        <label for="servicos">Serviços</label>
                        <textarea name="servicos" placeholder="Serviços" />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}