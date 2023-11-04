import "./css/navbar.css";

export default function Navbar(props) {
    return (
        <div class="navbar">
            <div class="nav-container">
                <div class="nav-buttons">
                    {props.elements}
                </div>
            </div>
        </div>
    );
}