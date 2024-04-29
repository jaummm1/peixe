import React, { useState } from 'react';
import { Form, Button, FlexboxGrid } from 'rsuite';
import './Cadastro.css'; // Certifique-se de criar o arquivo CSS para estilização
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nome, setNome] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="cadastro-container">
      <h4 className="titulo">Cadastro de Usuário</h4>
      <Form>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Nome Completo</Form.ControlLabel>
              <Form.Control
                name="nome"
                type="text"
                value={nome}
                onChange={(value) => setNome(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        {/* Adicione o campo de Data de Nascimento aqui */}

        <FlexboxGrid style={{ marginTop: '1rem' }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid style={{ marginTop: '1rem' }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Senha</Form.ControlLabel>
              <div >
                <Form.Control
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
                <Button
                  className="input-icon-div"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid justify="center">
          <Link to="/">Já tem uma conta? Faça login</Link>
        </FlexboxGrid>

        <FlexboxGrid style={{ marginTop: '1rem' }}>
          <Button appearance="primary" onClick={handleCadastro}>
            CADASTRAR
          </Button>
        </FlexboxGrid>
      </Form>
    </div>
  );
};

export default Cadastro;
