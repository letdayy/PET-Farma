// import React from "react";
// import interactions from "./interactions.json";

import Footer from "../../components/Footer"
import Nav from "../../components/Header"


// export default function Hidroxicloroquina() {
//   return (
//     <div>
//       {interactions.map((interaction) => (
//         <div key={interaction.id}>
//           <p>Nome: {interaction.nome}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


export default function Hidroxicloroquina(){
  return (
    <>
    <Nav />
    <main>
      Hello
    </main>
    <Footer />
    
    </>
  )
}



// import React, { useState } from 'react';
// // import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";
// import Nav from "../../components/Header";
// import { TitleMed, Main, Button, Subtitle, List } from "./style";
// import styled from 'styled-components';
// // import interactions from './interactions.json';

// const InputListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   width: 60%;
//   align-items: center;
// `

// const Input = styled.input`
//   background-color: #F8B3E5;
//   width: 100%;
//   max-width: 842px;
//   height: 30px;
//   margin-right: 1rem;
//   border-radius: 6px;
// `;

// const DeleteButton = styled.button`
//   margin-left: 10px;
//   padding: 5px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;


// export default function Hidroxicloroquina() {

//   const [text, setText] = useState('');
//   const [interactions, setInteractions] = useState([interactions.interactions]);

//   const  handleAddInteractions = () => {
//     const newInteraction = { texto: text };
//     const newInteractions = [...interactions, newInteraction];
//     setInteractions(newInteractions);
//     setText('');
//   };

//     const handleDeleteInteraction = (index) => {
//       const newInteractions = [...interactions];
//       newInteractions.splice(index, 1);
//       setInteractions(newInteractions);
//     };

//     const saveInteractions = () => {
//       const data = { interactions };
//       const jsonData = JSON.stringify(data);
//     };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setList([...List, text]);
//     setText('');
//   };

//   const handleDelete = (index) => {
//     const newList = [...List];
//     newList.splice(index, 1);
//     setList(newList);
//   };

  

//   return (
//     <body>

//       <header>
//         <Nav />
//       </header>

//       <Main>
//         <TitleMed>
//           <h1>Hidroxicloroquina</h1>
//         </TitleMed>

//         <Subtitle>Lista com as principais interações medicamentosas</Subtitle>

//         <InputListContainer>
//           <Form onSubmit={handleSubmit}>
//             <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//             <button type="submit">Adicionar</button>
//           </Form>
//           <ul>
//             {list.map((item, index) => (
//               <li key={item}>
//                 {item}
//                 <DeleteButton onClick={() => handleDelete(index)}>Deletar</DeleteButton>
//               </li>
//             ))}
//           </ul>
//         </InputListContainer>


//         <Footer />

//       </Main>


//       {/* 

//       <Main>
//         <TitleMed>
//           <h1>Hidroxicloroquina</h1>
//           <Link to="/add"><Button>+</Button></Link>
//         </TitleMed>

//         <Subtitle>Lista de medicamentos com interação medicamentosa</Subtitle>
//         <List>
//           <li>Alfuzosina</li>
//           <li>Amiodarona</li>
//           <li>Amissulprida</li>
//           <li>Anagrelida</li>
//           <li>Apomorfina</li>
//         </List>
//       </Main>

//       <Footer /> */}
//     </body>
//   );
// }

