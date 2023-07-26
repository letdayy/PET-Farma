import SlidePrincipal from '../../images/petfarma.png';
import Nav from "../../components/Header";
import Footer from "../../components/Footer";
import backgroundWhite from "../../images/backgroundWhite.png";
import { Body, Main, Container, ImgSlide, Title, Description, Itens, ItemLink, Item } from "./style";


export default function Home() {
  return (
    <>
      <Body>
      <Nav />
      <Main>
        
      
              <ImgSlide src={SlidePrincipal} alt="Slide principal"/>
    

<Container>


          <Title>
            Medicamentos da Farmácia Universitária
          </Title>
          <Description>
            Possuem maior risco de interação
          </Description>

          <Itens>
            <ItemLink to="/hidroxicloroquina"><Item>Hidroxicloroquina</Item></ItemLink>
            <ItemLink to="/atorvastatina"><Item>Atorvastatina</Item></ItemLink>
            <ItemLink to="#"><Item>Sulfato de Neomicina</Item></ItemLink>
          </Itens>

          </Container>
      </Main>
      
      <Footer />
      </Body>
    </>
  );
}
