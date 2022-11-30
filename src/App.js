import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/home';
import { Gravadoras } from './pages/Gravadoras/gravadoras';
import { Artistas } from './pages/Artistas/artistas';
import { Albuns } from './pages/Albuns/albuns';
import { Cadastro } from './pages/Cadastro/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gravadoras" element={<Gravadoras />}></Route>
        <Route path="/artistas" element={<Artistas />}></Route>
        <Route path="/albuns" element={<Albuns />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
