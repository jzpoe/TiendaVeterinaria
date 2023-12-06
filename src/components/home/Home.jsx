

import { useState } from "react";
import ModalOpen from "./ModalOpen";
import "./home.css";
const Home = () => {


    const [modalOpen, setModalOpen]= useState(false)
    const [selectedCardIndex, setSelectedCardIndex]= useState(null)


    const openModal = (index)=>{
        setModalOpen(true)
        setSelectedCardIndex(index)
    }

  return (
    <>
      <div className="container-titulo">
        <div className="contenido-titulo">
          <p className="titulo">Tienda Veterinaria</p>
        </div>
      </div>

      <div className="card-container">
        <div className="home-tarjetas" onClick={()=>{openModal(0)}}>
          encuentra todo sobre tu mascota
          <p className="parrafo-card">da click y compruebalo</p>
        </div>

        <div className="home-tarjetas" onClick={()=>{openModal(1)}}>
          encuentra todo sobre tu mascota
          <p className="parrafo-card">da click y compruebalo</p>

        </div>

        <div className="home-tarjetas" onClick={()=>{openModal(2)}}>
          encuentra todo sobre tu mascota
          <p className="parrafo-card">da click y compruebalo</p>

        </div>
        <ModalOpen 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        setSelectedCardIndex={selectedCardIndex}
        />
      </div>
    </>
  );
};

export default Home;
