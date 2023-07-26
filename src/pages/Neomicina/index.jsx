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

const Neomicina = () => {
  const medicamentos = [
    "diclofenaco",
    "ibuprofeno",
    "piroxicam",
    "anucacina",
    "gentamicina",
    "cefalosporina",
    "anfotericina B",
    "ciclosporina",
    "metoxiflurano"
  ];

  // Ordenar os medicamentos em ordem alfabética
  medicamentos.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Nav />
      <ContainerPrincipal>
        <Titulo>Sulfato de Neomicina</Titulo>
        <Paragraph>
        O sulfato de neomicina é um antibiótico da classe dos aminoglicosídeos, utilizado principalmente para o tratamento de infecções bacterianas, especialmente aquelas causadas por organismos gram-negativos. Este medicamento age inibindo a síntese proteica nas bactérias, resultando na sua morte ou inibição do crescimento.
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

export default Neomicina;