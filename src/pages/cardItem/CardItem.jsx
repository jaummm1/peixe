import React, { useState } from "react";
import "./CardItem.css";
import { Button, FlexboxGrid, Modal } from "rsuite";

const CardItem = ({ listCard }) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
  
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {listCard.map((e) => (
        <div className="card-list">
          <div
            className="card"
            key={e.codigo}
            onClick={() => {
              handleOpen(e);
            }}
          >
            <img src={e.link} alt={e.nome}  className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Nome: {e.nome}</h3>
              <p className="card-description">Espécie: {e.especie}</p>
              <p className="card-description">Aquário: {e.aquario}</p>
              <p className="card-description">Código: {e.codigo}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal open={open} onClose={handleClose} size={"sm"}>
        <Modal.Header>
        
        </Modal.Header>
        <Modal.Body>

            <div className="card-content">
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={12}>
            <img style={{width: "60%"}} src={selectedCard?.link} alt={selectedCard?.nome} className="card-image" />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={12}>
              <h3 className="card-description">Nome: {selectedCard?.nome}</h3>
              <p className="card-description">Espécie: {selectedCard?.especie}</p>
              <p className="card-description">Aquário: {selectedCard?.aquario}</p>
              <p className="card-description">Código: {selectedCard?.codigo}</p>
              </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>

        
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default CardItem;
