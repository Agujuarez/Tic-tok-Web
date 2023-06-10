import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

// Importa tus componentes personalizados
/* import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'; */

function Home () {
  return (
    <div>Home</div>
  )
}
  
function About () {
  return <div>About</div>
}

function NotFound () {
  return <div>Not Found</div>
}

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
