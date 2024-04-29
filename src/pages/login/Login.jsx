// src/components/Login.js

import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // console.log("Email:", email);
    // console.log("Password:", password);

    history('/home');
  };

  return (
    <div className="login-container">
      <h4 style={{marginLeft:"23rem"}}>Login</h4>
      <Form>
        <FlexboxGrid>
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
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Senha</Form.ControlLabel>
              <div className="input-with-icon">
                <Form.Control
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
                <Button
                  className="input-icon-divs"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center">
          <Link to="/cadastro">Cadastrar Usuário</Link>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <Button appearance="primary" onClick={handleLogin}>
            ENTRAR
          </Button>
        </FlexboxGrid>
      </Form>
    </div>
  );
};

export default Login;
