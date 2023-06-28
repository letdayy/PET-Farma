import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Login from '../../images/login.png';
import styled from 'styled-components';


const NavContainer = styled.nav`
    display: flex;
    background-color: rgba(126, 214, 207, 0.45);
    flex-direction: column;

    /* estilo para telas maiores que 1200px */

@media (min-width: 1200px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
`



const LinkContainer = styled(Link)`
    text-decoration: none;
`
const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const NavSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  img {
    width: 60px;
    
  }

@media (min-width: 1200px){
  width: 60%;
  justify-content: space-between;
  padding-left: 10px;

  img {
    width: 80px;
  }
}
`


const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 0.5rem;

@media (min-width: 1200px) {
  width: 500px;
}
`

const LinkSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 25px;
  }

@media (min-width: 1200px) {
  width: 40%;
  display: flex;
  align-items: center;
}
`


export default function Nav() {
  return (
    <header>
      <NavContainer>
        <NavSection>
          <img src={Logo} alt="logo do site" className="logo" />

          <Input type="text" placeholder="Pesquisar" />
        </NavSection>

        <LinkSection>
          <List>
            <li>
              <LinkContainer to="/">Inicio </LinkContainer>
            </li>
            <li>
              {" "}
              <LinkContainer to="/NoPage">Contato </LinkContainer>
            </li>
            <li>
              {" "}
              <LinkContainer to="/NoPage">Sobre </LinkContainer>
            </li>
          </List>
        </LinkSection>
      </NavContainer>
    </header>
  );
}
