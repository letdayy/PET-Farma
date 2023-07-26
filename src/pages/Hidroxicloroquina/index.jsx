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

const Hidroxicloroquina = () => {
  const medicamentos = [
    "acamprosato",
    "adenosina",
    "AINES",
    "teste",
    "albuterol",
    "aminodarona",
    "amitriptilina",
    "anlodipino",
    "apixabana",
    "atenolol",
    "azitromicina",
    "betabloqueadores",
    "cálcio 600 D",
    "captopril",
    "carbamazepina",
    "carvedilol",
    "ciprofloxacino",
    "citalopram",
    "clonidina",
    "dabigatrana",
    "digoxina",
    "dissulfiram",
    "duloxetina",
    "enalapril",
    "fenitoína",
    "fenobarbital",
    "hidralazina",
    "hidroxizina",
    "labetalol",
    "Leflunomida",
    "lopinavir/ritonavir",
    "lorsatana",
    "metformina",
    "metildopa",
    "metotrexato",
    "metropolol",
    "milrinona",
    "nifedipino",
    "nitroprusseto",
    "nortriptilina",
    "propanolol",
    "remdesivi",
    "rifampicina",
    "salmeterol",
    "timolol",
    "tramadol",
    "verapamil"
  ];

  // Ordenar os medicamentos em ordem alfabética
  medicamentos.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Nav />
      <ContainerPrincipal>
        <Titulo>Hidroxicloroquina</Titulo>
        <Paragraph>A hidroxicloroquina é um medicamento que foi inicialmente desenvolvido para tratar doenças como malária, lúpus eritematoso sistêmico e artrite reumatoide. Também é conhecida como HCQ (do inglês Hydroxychloroquine). A hidroxicloroquina é uma versão modificada da cloroquina, com efeitos colaterais geralmente menos graves.</Paragraph>
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

export default Hidroxicloroquina;