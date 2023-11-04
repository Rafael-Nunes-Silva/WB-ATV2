import Navbar from "../components/navbar";

export default function Produto() {
    return (
        <Navbar
            elements={[
                <a className="nav-button" href="../produto/cadastro">Cadastro</a>,
                <a className="nav-button"  href="../produto/listagem">Listagem</a>,
                <a className="nav-button"  href="../produto/atualizar">Atualizar</a>,
                <a className="nav-button"  href="../produto/deletar">Deletar</a>
            ]}
        />
    );
}