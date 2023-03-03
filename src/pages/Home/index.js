import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import SlidePrincipal from '../../images/petfarma.png';
import Login from '../../images/login.png';
import './style.css';

export default function Home() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo do site" className="logo"/>

        <input type="text" />

        <ul>
          <li>
            <Link to="">Inicio </Link>
            <Link to="">Contato </Link>
            <Link to="">Sobre </Link>
            <Link to=""><img src={Login} alt="imagem de login"/> </Link>
          </li>
        </ul>
      </nav>

      <body>
        <section className="imgSection">
        <img src={SlidePrincipal} alt="Slide principal"/>
        </section>

        <section className="medicationSection">
          <h1>
            Medicamentos da Farmácia Universitária
          </h1>
          <div className="medicationContent">
          <p>
            Possuem maior risco de interação
          </p>
          <ul>
            <li><Link to="">Hidroxicloroquina</Link></li>
            <li><Link to="">Atorvastatina</Link></li>
            <li><Link to="">Sulfato de Neomicina</Link></li>
          </ul>

          </div>
            
        </section>

        <footer>
          <p>
          Feito por Letícia Dayane
          </p>
        </footer>
      </body>
    </>
  );
}
