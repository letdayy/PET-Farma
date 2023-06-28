import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import { Link } from 'react-router-dom';
import { Foot } from './style';



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
