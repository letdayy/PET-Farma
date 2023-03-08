import Nav from "../../components/Header";
import styled from 'styled-components';
import backgroundDark from "../../images/backgroundDark.png";
import { Link } from "react-router-dom";


const Main = styled.main`
    background-image: url(${backgroundDark});
    background-size: cover;
    background-position: center;
    padding-bottom: 3rem;
    height: calc(100vh - 150.19px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #154770;
`

const Section = styled.section`
    background: #7ed6cf72;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;

    label {
        padding: 2rem 0 0 2rem;
        text-transform: uppercase;
    }

    input {
        margin: 1rem 3rem 0 3rem;
        height: 1.8rem;
        border-radius: 5px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem 0 1rem 0;
`

const Button = styled.button`
    width: 60px;
    height: 40px;
    background-color: #7BE39F;
    border-radius: 6px;
    cursor: pointer;
`

const LinkButton = styled(Link)`
    margin: 0 auto;
`

export default function Login() {
  return (
    <body>
      <header>
        <Nav />
      </header>
      <Main>
        <Section>
            <label htmlFor="">Login</label>
            <input type="text" />
            <label htmlFor="">Senha</label>
            <input type="text" />

            <Content>
                <p>
                    Cadastrar-se
                </p>
                <p>
                    Esqueceu sua senha?
                </p>
            </Content>

            <LinkButton to="/add">
            <Button>Entrar</Button>
            </LinkButton>
        </Section>
      </Main>
    </body>
  );
}
