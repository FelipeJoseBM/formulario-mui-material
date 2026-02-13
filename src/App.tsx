import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forms from './pages/Forms';
import Mensagem from './pages/Mensagem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/mensagem" element={<Mensagem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
