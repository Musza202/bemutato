import './App.css';
import Esemenyek from './components/Esemenyek';
import Fooldalaz from './components/Fooldal';
import PragaGaleria from './components/Galeria';
import PragaGasztronomia from './components/Gasztronomia';
import Kapcsolat from './components/Kapcsolat';
import Latvany from './components/Latvanyosagok';
import Tippek from './components/Tippek';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Főoldal</Link>
          <Link to="/esemenyek">Események</Link>
          <Link to="/galeria">Galéria</Link>
          <Link to="/gasztro">Gasztronómia</Link>
          <Link to="/latvany">Látvány</Link>
          <Link to="/tippek">Tippek</Link>
          <Link to="/kapcsolat">Kapcsolat</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Fooldalaz/>}></Route>
          <Route path="/esemenyek" element={<Esemenyek/>}></Route>
          <Route path="/galeria" element={<PragaGaleria/>}></Route>
          <Route path="/gasztro" element={<PragaGasztronomia/>}></Route>
          <Route path="/latvany" element={<Latvany/>}></Route>
          <Route path="/tippek" element={<Tippek/>}></Route>
          <Route path="/kapcsolat" element={<Kapcsolat/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
