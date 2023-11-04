import Navbar from "../components/navbar";

export default function Servico() {
    return (
        <Navbar
            elements={[
                <a className="nav-button" href="../servico/cadastro">Cadastro</a>,
                <a className="nav-button"  href="../servico/listagem">Listagem</a>,
                <a className="nav-button"  href="../servico/atualizar">Atualizar</a>,
                <a className="nav-button"  href="../servico/deletar">Deletar</a>
            ]}
        />
    );
}