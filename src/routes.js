import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';


import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
  }
`


export default function AppRouter() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
}