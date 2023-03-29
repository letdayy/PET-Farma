import styled from 'styled-components';

const Info = styled.ul`
  color: #073FAB;
  display: flex;
  align-items: center;
  text-align: center;

  li {
    margin: 0.3rem;
  }
`

const Informations = ['Cadastrar novas informações', 'Lista de Medicamentos', 'Deletar informações existentes']

export default function Information() {
  return (
    <Info>
        { Informations.map ( (texto) => (
                        <li>{texto}</li>
        )) }
    </Info>
    )
}