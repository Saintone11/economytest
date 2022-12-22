import './App.css';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartPage from './components/StartPage';
import Test from './components/Test';
import ResultPage from './components/ResultPage';

const GlobalStyle = createGlobalStyle`
  background-color : red;
`;

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<StartPage />}/>
        <Route exact path="/Test" element={<Test />}/>
        <Route path="/resultPage" element={<ResultPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
