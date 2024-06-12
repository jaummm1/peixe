import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./app.css";
import { Header } from "rsuite";
import HeaderCard from "../header/Header";
import axios from "axios";

const Card = ({listCard,setListPeixes}) => {

useEffect(()=>{

  get()

},[])

async function get() {
  var idUsuario = sessionStorage.getItem('idUsuario');
  if (!idUsuario) {
    console.error('ID de usuário não encontrado no sessionStorage');
    return;
  }
  
  try {
    const apiUrl = `https://api-peixes-cxxg.vercel.app/api/users/peixes/${idUsuario}`;
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
      }
    });
    setListPeixes(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}


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
