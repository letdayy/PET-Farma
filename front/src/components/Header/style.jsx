import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    background-color: rgba(126, 214, 207, 0.45);
    flex-direction: column;
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
`


export const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 0.5rem;
`

export const LinkSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 25px;
  }
`
