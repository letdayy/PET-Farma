import LogoPET from '../../images/logoPet.png';
import { Link } from "react-router-dom";
import { Body, Header, Principal, Inputs, Button  } from './style';

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