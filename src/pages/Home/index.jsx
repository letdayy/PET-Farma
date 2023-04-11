import { Link } from "react-router-dom";
import SlidePrincipal from '../../images/petfarma.png';
import styled from 'styled-components';
import Nav from "../../components/Header";
import Footer from "../../components/Footer";
import backgroundWhite from "../../images/backgroundWhite.png";

const Main = styled.main`
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  padding-bottom: 3rem;
  height: 100vh;
`

const ImgSlide = styled.img`
width: 100%;
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


export default function Home() {
  return (
    <>
      <body>
      <Nav />
      <Main>
        
      
              <ImgSlide src={SlidePrincipal} alt="Slide principal"/>
    

          <Title>
            Medicamentos da Farmácia Universitária
          </Title>
          <Description>
            Possuem maior risco de interação
          </Description>

          <Itens>
            <ItemLink to="/hidroxicloroquina"><Item>Hidroxicloroquina</Item></ItemLink>
            <ItemLink to="#"><Item>Atorvastatina</Item></ItemLink>
            <ItemLink to="#"><Item>Sulfato de Neomicina</Item></ItemLink>
          </Itens>

          
      </Main>
      
      <Footer />
      </body>
    </>
  );
}
