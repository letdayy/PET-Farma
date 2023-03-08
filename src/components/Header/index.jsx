import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Login from '../../images/login.png';
import styled from 'styled-components';


const NavContainer = styled.nav`
    display: flex;
    background-color: rgba(126, 214, 207, 0.45);
    flex-direction: column;
`

const LinkContainer = styled(Link)`
    text-decoration: none;
`
const List = styled.ul`
  list-style: none;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`

const NavSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  img {
    width: 60px;
  }
`


const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 0.5rem;
`

const LinkSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 25px;
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
            <li>
              {" "}
              <LinkContainer to="">
                <img src={Login} alt="imagem de login" />{" "}
              </LinkContainer>
            </li>
          </List>
        </LinkSection>
      </NavContainer>
    </header>
  );
}
