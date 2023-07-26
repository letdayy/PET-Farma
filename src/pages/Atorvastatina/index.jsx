import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import {
    ContainerPrincipal,
    Titulo,
    Description,
    Listagem,
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