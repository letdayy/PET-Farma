import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Header";
import { ContainerPrincipal, Paragrafo } from "./style";

const About = () => {
  return (
    <>
      <Nav />
      <ContainerPrincipal>
     <h1>Sobre o PET</h1>
     <Paragrafo>
        O programa de educação tutorial (PET) é desenvolvido por um grupo de estudantes, com tutoria de um docente, orientados pelo príncipio da indissociabilidade entre ensino, pesquisa e extensão.
     </Paragrafo>
     <Paragrafo>
        Esse site foi desenvolvido pela estudante de Farmácia Letícia Dayane, sob tutoria da orientadora Mariana Sato.
     </Paragrafo>
     </ContainerPrincipal>
      <Footer />
    </>
  );
};

export default About;