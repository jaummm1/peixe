// src/components/Login.js

import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Peixes.css";
import { useNavigate } from "react-router-dom";
import HeaderCadastro from "./Header";

const Peixes = ({listCard}) => {
  const history = useNavigate();
  const [especie, setEspecie] = useState("");
  const [nome, setNome] = useState("");
  const [aquario, setAquario] = useState("");
  const [codigo, setCodigo] = useState("");
  const [imagem, setImagem] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSave = () => {
    const obj = {
      id: 10000,
      especie: especie,
      nome: nome,
      aquario: aquario,
      codigo: codigo,
      link: imagem ? imagem : "https://i0.wp.com/carbonozero.net/wp-content/uploads/2022/06/lula-gigante-mitologia.jpg?fit=1920%2C1080&ssl=1",
    };
    listCard.push(obj);
    swal({
      title: "SUCESSO!",
      text: "Peixe Cadastrado com Sucesso!",
      icon: "success",
    });
    history("/home");
  };

  return (
    <Form>
      <HeaderCadastro />
      <div className="login-container">
        <h4 className="titulo" style={{ marginLeft: "18rem" }}>
          CADASTRO DE PEIXES
        </h4>
      
        <FlexboxGrid justify="start" style={{ marginTop: "2rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Nome</Form.ControlLabel>
              <Form.Control
                name="nome"
                type="nome"
                placeholder="Digite o Nome do seu Peixinho"
                value={nome}
                width={"100%"}
                onChange={(value) => setNome(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Espécie</Form.ControlLabel>
              <Form.Control
                name="especie"
                type="especie"
                placeholder="Digite a Espécie"
                value={especie}
                width={"100%"}
                onChange={(value) => setEspecie(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Aquário</Form.ControlLabel>
              <Form.Control
                name="aquario"
                type="aquario"
                placeholder="Digite o Aquário"
                value={aquario}
                width={"100%"}
                onChange={(value) => setAquario(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Código</Form.ControlLabel>
              <Form.Control
                name="codigo"
                type="codigo"
                placeholder="Digite o Código do Peixe"
                value={codigo}
                width={"100%"}
                onChange={(value) => setCodigo(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Imagem</Form.ControlLabel>
              <Form.Control
                name="imagem"
                type="imagem"
                placeholder="Digite URL da Imagem"
                value={imagem}
                width={"100%"}
                onChange={(value) => setImagem(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <Button appearance="primary" color="blue" onClick={handleSave}>
            CADASTRAR
          </Button>
        </FlexboxGrid>
      </div>
    </Form>
  );
};

export default Peixes;
