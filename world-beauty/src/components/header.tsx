import { Component } from "react";
import { Button, Dropdown, NavItem, Navbar } from "react-materialize";

export default class Header extends Component {
    render() {
        return (
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#">Logo</a>}
                id="mobile-nav"
                menuIcon={<h1>menu</h1>}
                options={{
                    draggable: true,
                    edge: "left",
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem>
                    <Dropdown
                        id="dropdown_cliente"
                        options={{
                            alignment: "left",
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: false,
                            hover: true,
                            inDuration: 25,
                            outDuration: 50
                        }}
                        trigger={<Button>Cliente</Button>}
                    >
                        <a href="../cadastro/cliente">Cadastro</a>
                        <a href="../listagem/cliente">Listagem</a>
                        <a href="../atualizar/cliente">Atualizar</a>
                        <a href="../deletar/cliente">Deletar</a>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <Dropdown
                        id="dropdown_produto"
                        options={{
                            alignment: "left",
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: false,
                            hover: true,
                            inDuration: 25,
                            outDuration: 50
                        }}
                        trigger={<Button>Produto</Button>}
                    >
                        <a href="../cadastro/produto">Cadastro</a>
                        <a href="../listagem/produto">Listagem</a>
                        <a href="../atualizar/produto">Atualizar</a>
                        <a href="../remover/produto">Deletar</a>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <Dropdown
                        id="dropdown_servico"
                        options={{
                            alignment: "left",
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: false,
                            hover: true,
                            inDuration: 25,
                            outDuration: 50
                        }}
                        trigger={<Button>Servico</Button>}
                    >
                        <a href="../cadastro/servico">Cadastro</a>
                        <a href="../listagem/servico">Listagem</a>
                        <a href="../atualizar/servico">Atualizar</a>
                        <a href="../remover/servico">Deletar</a>
                    </Dropdown>
                </NavItem>
            </Navbar>
        );
    }
}