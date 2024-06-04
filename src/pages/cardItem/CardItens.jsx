import React, { useState } from "react";
import CardItem from "./CardItem";
import "./app.css";
import { Header } from "rsuite";
import HeaderCard from "../header/Header";

const Card = () => {
  const [listCard, setListPeixes] = useState([
    { id: 1, especie: "Betta", nome: "Brasil", aquario: "1", codigo: "56456", link: 'https://via.placeholder.com/300' },
    { id: 2, especie: "Salmão ", nome: "Batman", aquario: "10", codigo: "58852",link: 'https://via.placeholder.com/300' },
    { id: 3, especie: "Tilápia ", nome: "Code", aquario: "6", codigo: "444",link: 'https://via.placeholder.com/300' },
    { id: 4, especie: "Bacalhau", nome: "Shark", aquario: "1", codigo: "2282",link: 'https://via.placeholder.com/300' },
    { id: 5, especie: "Atum", nome: "Rajado", aquario: "3", codigo: "8987" ,link: 'https://via.placeholder.com/300'},
    { id: 6, especie: "Dourado", nome: "Lili", aquario: "3", codigo: "35341",link: 'https://via.placeholder.com/300' },
    { id: 7, especie: "Badejo", nome: "Robson", aquario: "100", codigo: "42",link: 'https://via.placeholder.com/300' },
    { id: 8, especie: "Tambaqui", nome: "Liu", aquario: "4", codigo: "1" ,link: 'https://via.placeholder.com/300'},
    { id: 9, especie: "Peixe-palhaço", nome: "Cj", aquario: "8", codigo: "566",link: 'https://via.placeholder.com/300' },
    { id: 10, especie: "Bagre", nome: "Kratos", aquario: "9", codigo: "7753" ,link: 'https://via.placeholder.com/300'},
  ]);

  return (
    <div className="App">
      <HeaderCard/>
      <h1 >Meus Peixes</h1>
      <div className="card-container">
        <CardItem listCard={listCard} />
        {/* <CardItem
          title="Card 2"
          description="Esta é a descrição do card 2."
          imageUrl="https://via.placeholder.com/300"
        />
        <CardItem
          title="Card 3"
          description="Esta é a descrição do card 3."
          imageUrl="https://via.placeholder.com/300"
        /> */}
      </div>
    </div>
  );
};

export default Card;
