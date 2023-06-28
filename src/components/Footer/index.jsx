import { Link } from "react-router-dom";
import styled from 'styled-components';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Foot = styled.footer`
  background-color: #7ED6CF;
  height: 50px; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  left: 0;
  bottom: 0; 

  img {
    width: 20px;
    margin: 10px;
  }
`



export default function Footer() {
  return (
    <Foot>
      <p>
          Feito por Letícia Dayane
          </p>
          <Link to="https://github.com/letdayy" target="_blank"><img src={github} alt="github"></img></Link>
          <Link to="https://www.linkedin.com/in/letdayy/" target="_blank"><img src={linkedin} alt="linkedin"></img></Link>
    </Foot>
  );
}
