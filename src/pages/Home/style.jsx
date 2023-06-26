import styled from 'styled-components';
import { Link } from "react-router-dom";
import backgroundWhite from "../../images/backgroundWhite.png";


export const Body = styled.body`
  max-width: 100vw;
  max-height: 100vh;
`

export const Main = styled.main`
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  padding-bottom: 3rem;
  height: 100%;
`

export const ImgSlide = styled.img`
width: 100%;
`


export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`

export const Itens = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const ItemLink = styled(Link)`
    text-decoration: none;
    color: #154770;
`

export const Item = styled.li`
    background-color: #6BC292;
    width: 250px;
    height: 80px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`
