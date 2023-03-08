import styled from 'styled-components';
import AddInput from '../../components/AddSection';
import Nav from '../../components/Header';

const Informations = styled.ul`
  color: #073FAB;
  display: flex;
  text-align: center;

  li {
    padding: 1rem;
  }
`

const Title = styled.h3`
  margin: 2rem;
`


export default function Add() {
  return (
    <body>
      <header>
        <Nav />
      </header>
      
      <main>
        <Title>
            Seja bem vindo(a)!
        </Title>

        <Informations>
            <li>Cadastrar novas informações</li>
            <li>Lista de Medicamentos</li>
            <li>Editar informações existentes</li>
        </Informations>

        <AddInput />

      </main>
    </body>
  );
}
