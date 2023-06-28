import Logo from '../../images/logo.png';
import styled from 'styled-components';
import { NavContainer, NavSection, Input, LinkSection, LinkContainer, List } from "./style";


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
