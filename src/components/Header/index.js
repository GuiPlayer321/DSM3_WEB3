import { Link } from "react-router-dom";
import './style.css'

export default function Header(){
    return (
        <header>
            <h2>FATEC</h2>

            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/loja'>Loja</Link>
                <Link to='/informacoes/contato'>Contato</Link>
            </div>
        </header>
    )
}