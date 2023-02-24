import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Servicos from './pages/Servicos';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index />
        <Route path="/sobre" element={<About />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>
        <Route path="/projetos" element={<Projects />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
