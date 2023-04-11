import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import { TitleMed, Main, Button, Subtitle, List } from "./style";



export default function Hidroxicloroquina() {
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
