import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Login from '../../images/login.png';
import './style.css';

export default function Home() {
  return (
    <>
      <nav>
        <img src={Logo} className="logo"/>

        <input type="text" />

        <ul>
          <li>
            <Link to="">Inicio </Link>
            <Link to="">Contato </Link>
            <Link to="">Sobre </Link>
            <Link to=""><img src={Login} /> </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
