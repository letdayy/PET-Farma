import styled from 'styled-components';

export const Body = styled.body`
    background-color: #c5ede9;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;

`

export const LogoImage = styled.img`
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
`

export const Principal = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TituloLogin = styled.h1`
    font-size: 50px;
    margin-top: 15%;
`

export const Inputs = styled.section`
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

export const Button = styled.button`
    background-color: #36FF56;
    color: #250E0E;
    font-size: 20px;
    height: 5rem;
    width: 8rem;
    border-radius: 20px;
    margin-top: 20%;
    cursor: pointer;
    margin-bottom: 5%;
`
