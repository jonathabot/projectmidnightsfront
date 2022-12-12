import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/home';
import { Gravadoras } from './pages/Gravadoras/gravadoras';
import { Artistas } from './pages/Artistas/artistas';
import { Albums } from './pages/Albums/albums';
import { CadastroGravadoras } from './pages/CadastroGravadoras/CadastroGravadoras';
import { CadastroArtistas } from './pages/CadastroArtistas/CadastroArtistas';
import { CadastroAlbums } from './pages/CadastroAlbums/CadastroAlbums';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gravadoras" element={<Gravadoras />}></Route>
        <Route path="/artistas" element={<Artistas />}></Route>
        <Route path="/albums" element={<Albums />}></Route>
        <Route
          path="/cadastrogravadoras"
          element={<CadastroGravadoras />}
        ></Route>
        <Route path="/cadastroartistas" element={<CadastroArtistas />}></Route>
        <Route path="/cadastroalbums" element={<CadastroAlbums />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
