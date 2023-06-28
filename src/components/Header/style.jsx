import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    background-color: rgba(126, 214, 207, 0.45);
    flex-direction: column;

    /* estilo para telas maiores que 1200px */

    @media (min-width: 1200px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
`
export const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const NavSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  img {
    width: 60px;
  }

  @media (min-width: 1200px){
  width: 60%;
  justify-content: space-between;
  padding-left: 10px;

  img {
    width: 80px;
  }
}
`


export const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 0.5rem;

  @media (min-width: 1200px) {
  width: 500px;
}
`

export const LinkSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 25px;
  }

  @media (min-width: 1200px) {
  width: 40%;
  display: flex;
  align-items: center;
}
`