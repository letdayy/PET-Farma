import styled from "styled-components";
import backgroundWhite from "../../images/backgroundWhite.png"

export const TitleMed = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content: space-evenly;

  h1 {
    text-transform: uppercase;
    font-size: 25px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: #cdf8cc;
  border-radius: 6px;
  cursor: pointer;

&:hover {
    background-color: #abcfab;
    transition: 420ms;
  }
`;

export const Main = styled.main`
  padding-top: 20px;
  background-image: url(${backgroundWhite});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding-bottom: 3rem;
`

export const Subtitle = styled.h3`
  margin: 2rem 0; 
  text-align: center;
`

export const List = styled.ul`
  margin-top: 2rem;


li {
  margin-bottom: 1rem;
  margin-left: 1rem;
}

`