import styled from 'styled-components';
import AddInput from '../../components/AddInput';
import Nav from '../../components/Header';
import Information from '../../components/Information';


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

        <Information />

        <AddInput
        description="Nome do medicamento da FU"
        />

        <AddInput
        description="Nome da medicação com interação"
        />

        <AddInput
        description="Nível de interação"
        />

      </main>
    </body>
  );
}
