import styled from 'styled-components';
import LogoPET from '../../images/logoPet.png';
import { Link } from "react-router-dom";

const Body = styled.body`
    background-color: #7ED6CF;
    height: 100vh;

img {
    width: 100%;
    max-width: 825px;
}
`

const Header = styled.header`
    display: flex;
    justify-content: center;
`

const Principal = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

h1 {
    font-size: 50px;
    margin-top: 50px;
}
`

const Inputs = styled.section`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 80%;
    max-width: 652px;
    justify-content: space-between;
    margin-top: 3rem;

input {
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 0.8rem;
}
`

const Button = styled.button`
    background-color: #36FF56;
    color: #250E0E;
    font-size: 20px;
    height: 5rem;
    width: 8rem;
    border-radius: 20px;
    margin-top: 50px;
    cursor: pointer;
`


export default function Login() {
    return (
      <Body>
        <Header>
            <img src={LogoPET} alt="logo do PET" />
        </Header>
        <Principal>
            <h1>
                LOGIN
            </h1>
            <Inputs>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
            </Inputs>
            <Link to="/home">
                <Button>ENTRAR</Button>
                </Link>
        </Principal>
      </Body>
    )
}