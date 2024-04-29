import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Cadastro from './pages/cadastroUsuario/CadastroUsuario';

const App = () => {
  return (
   
     <Router>
      <Routes> {/* Use Routes em vez de Switch */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/home" element={()=>{}} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
