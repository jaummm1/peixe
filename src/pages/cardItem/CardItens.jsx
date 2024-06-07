import React, { useState } from "react";
import CardItem from "./CardItem";
import "./app.css";
import { Header } from "rsuite";
import HeaderCard from "../header/Header";

const Card = ({listCard}) => {


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
