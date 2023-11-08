import "./css/popupListagem.css";

export default function PopupListagem(props) {
    return (
        <div id="resultado-listagem">
            <div id="resultado-header">
                <h1>{props.title}</h1><button className="button" onClick={props.CloseCallback}>X</button>
            </div><hr />
            <div id="resultado-lista">
                {props.listagem}
            </div>
        </div>
    );
}