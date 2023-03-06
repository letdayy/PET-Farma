import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import SlidePrincipal from '../../images/petfarma.png';
import Login from '../../images/login.png';
import styled from 'styled-components';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';


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
const ImgSlide = styled.img`
width: 100vw;
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

::placeholder {
  padding: 10px;
}

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


const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
`

const Description = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`

const Itens = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const ItemLink = styled(Link)`
    text-decoration: none;
    color: #154770;
`

const Item = styled.li`
    background-color: #6BC292;
    width: 250px;
    height: 80px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`

const Footer = styled.footer`
  background-color: #7ED6CF;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    margin: 10px;
  }
`

export default function Home() {
  return (
    <>
      <NavContainer>
        <NavSection>
        <img src={Logo} alt="logo do site" className="logo"/>

        <Input type="text" placeholder="Pesquisar" />

        </NavSection>

        <LinkSection>
        <List>
          <li>
            <LinkContainer to="">Inicio </LinkContainer></li>
            <li> <LinkContainer to="">Contato </LinkContainer></li>
            <li> <LinkContainer to="">Sobre </LinkContainer></li>
            <li> <LinkContainer to=""><img src={Login} alt="imagem de login"/> </LinkContainer>
          </li>
        </List>
        </LinkSection>
      </NavContainer>

      <body>
        <ImgSlide src={SlidePrincipal} alt="Slide principal"/>
    

          <Title>
            Medicamentos da Farmácia Universitária
          </Title>
          <Description>
            Possuem maior risco de interação
          </Description>

          <Itens>
            <ItemLink to="#"><Item>Hidroxicloroquina</Item></ItemLink>
            <ItemLink to="#"><Item>Atorvastatina</Item></ItemLink>
            <ItemLink to="#"><Item>Sulfato de Neomicina</Item></ItemLink>
          </Itens>


        <Footer>
          <p>
          Feito por Letícia Dayane
          </p>
          <Link to="https://github.com/letdayy" target="_blank"><img src={github}></img></Link>
          <Link to="https://www.linkedin.com/in/letdayy/" target="_blank"><img src={linkedin}></img></Link>
        </Footer>
      </body>
    </>
  );
}
