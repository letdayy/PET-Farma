import styled from "styled-components";
import backgroundWhite from "../../images/backgroundWhite.png"

export const ContainerPrincipal = styled.main`
  min-height: 100vh;
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const Titulo = styled.h1`
  text-transform: uppercase;
  margin: 40px 0;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Description = styled.p`
  margin: 20px 0;
  font-weight: bold;
`

export const Listagem = styled.ul`
  text-transform: capitalize;
  

  li {
    margin: 0.5rem 0;
  }
`

export const Paragraph = styled.p`
text-align: justify;
`