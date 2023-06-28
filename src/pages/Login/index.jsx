import LogoPET from '../../images/logoPet.png';
import { Link } from "react-router-dom";
import { Body, LogoImage, TituloLogin, Header, Principal, Inputs, Button  } from './style';

export default function Login() {
    return (
      <Body>
        <Header>
            <LogoImage src={LogoPET} alt="logo do PET" />
        </Header>
        <Principal>
            <TituloLogin>
                LOGIN
            </TituloLogin>
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