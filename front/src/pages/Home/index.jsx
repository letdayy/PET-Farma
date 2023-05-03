import SlidePrincipal from '../../images/petfarma.png';
import Nav from "../../components/Header";
import Footer from "../../components/Footer";
import { Main, ImgSlide, Title, Description, Itens, ItemLink, Item } from "./style";


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
