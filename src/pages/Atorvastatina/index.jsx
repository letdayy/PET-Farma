import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import {
    ContainerPrincipal,
    Titulo,
    Description,
    Listagem,
    Paragraph
  } from "../MedicationStyle/style";

const Atorvastatina = () => {
  const medicamentos = [
    "fluoxetina",
    "omeprazol",
    "midazolam",
    "estradiol",
    "clopidogrel",
    "claritromicina",
    "cetoconazol",
    "etravirina",
    "raltegravir"
  ];

  // Ordenar os medicamentos em ordem alfabética
  medicamentos.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Nav />
      <ContainerPrincipal>
        <Titulo>Atorvastatina</Titulo>
        <Paragraph>
        A atorvastatina é um medicamento amplamente utilizado para o tratamento de níveis elevados de colesterol no sangue e prevenção de doenças cardiovasculares. Ela pertence à classe das estatinas, que são fármacos que ajudam a reduzir a produção de colesterol pelo fígado, além de aumentar a capacidade do fígado de remover o colesterol LDL (lipoproteína de baixa densidade) da corrente sanguínea.
        </Paragraph>
        <Description>
          Lista com as principais interações medicamentosas encontradas em
          artigos
        </Description>

        <Listagem>
          {medicamentos.map((medicamento, index) => (
            <li key={index}>{medicamento}</li>
          ))}
        </Listagem>
      </ContainerPrincipal>
      <Footer />
    </>
  );
};

export default Atorvastatina;