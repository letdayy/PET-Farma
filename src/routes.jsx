import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';


import { createGlobalStyle } from 'styled-components'
import Hidroxicloroquina from './pages/Hidroxicloroquina';
import About from './pages/About';
import Atorvastatina from './pages/Atorvastatina';
import Neomicina from './pages/Neomicina';
// import Login from './pages/Login';
// import Hidroxicloroquina from './pages/Hidroxicloroquina';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
    font-family: 'Inter', sans-serif;
  }
`


export default function AppRouter() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/hidroxicloroquina' element={<Hidroxicloroquina />} /> */}
                {/* <Route path='/home' element={<Home />} /> */}
                <Route path='/hidroxicloroquina' element={<Hidroxicloroquina />} />
                <Route path='/atorvastatina' element={<Atorvastatina />} />
                <Route path='/neomicina' element={<Neomicina />} />
            </Routes>
        </Router>
    );
}