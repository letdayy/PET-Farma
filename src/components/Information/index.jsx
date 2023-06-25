import { Info } from './style';

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