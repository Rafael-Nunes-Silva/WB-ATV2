import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Cliente() {
    return (
        <div>
            <Navbar
                elements={[
                    <a className="nav-button" href="../cliente/cadastro">Cadastro</a>,
                    <a className="nav-button"  href="../cliente/listagem">Listagem</a>,
                    <a className="nav-button"  href="../cliente/atualizar">Atualizar</a>,
                    <a className="nav-button"  href="../cliente/deletar">Deletar</a>
                ]}
            />
            <Outlet />
        </div>
    );
}