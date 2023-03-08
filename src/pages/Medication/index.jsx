import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import backgroundWhite from "../../images/backgroundWhite.png"

const TitleMed = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem;

  h1 {
    text-transform: uppercase;
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
  padding: 2rem;
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding-bottom: 3rem;
`

const Subtitle = styled.h3`
  margin: 1rem;
`

const List = styled.ul`
  margin-top: 2rem;


li {
  margin-bottom: 1rem;
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
          <Link to="/login"><Button>+</Button></Link>
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
