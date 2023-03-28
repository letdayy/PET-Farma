import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import backgroundWhite from "../../images/backgroundWhite.png"

const TitleMed = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content: space-evenly;

  h1 {
    text-transform: uppercase;
    font-size: 25px;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: #cdf8cc;
  border-radius: 6px;
  cursor: pointer;

&:hover {
    background-color: #abcfab;
    transition: 420ms;
  }
`;

const Main = styled.main`
  margin-top: 20px;
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 3rem;
`

const Subtitle = styled.h3`
  margin: 2rem 0; 
  text-align: center;
`

const List = styled.ul`
  margin-top: 2rem;


li {
  margin-bottom: 1rem;
  margin-left: 1rem;
}

`

export default function Medication() {
  return (
    <body>
      <header>
        <Nav />
      </header>

      <Main>
        <TitleMed>
          <h1>Hidroxicloroquina</h1>
          <Link to="/add"><Button>+</Button></Link>
        </TitleMed>

        <Subtitle>Lista de medicamentos com interação medicamentosa</Subtitle>
        <List>
          <li>Alfuzosina</li>
          <li>Amiodarona</li>
          <li>Amissulprida</li>
          <li>Anagrelida</li>
          <li>Apomorfina</li>
        </List>
      </Main>

      <Footer />
    </body>
  );
}
