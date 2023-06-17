import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import { NotFound } from './Pages/NotFound';
import { Upload } from './Pages/Upload';
import { Nav } from './Layout/Nav';

// Importa tus componentes personalizados
/* import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'; */  

function App() {

  return (
    <div className='app'>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/upload" element={<Upload/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;