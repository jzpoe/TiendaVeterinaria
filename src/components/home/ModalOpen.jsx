import { useContext, useState } from 'react';
import './modalOpen.css';
import { dataContext } from '../../dataContex/DataContext';



const ModalOpen = ({ isOpen, onClose, selectedCardIndex }) => {

    const[selectedImg, setSelectedImg]=useState(null)
    const {modal}=useContext(dataContext)

    const handleclick=(index)=>{
        setSelectedImg(index)
    }

    const handleModal =()=>{
        
    }

  return (
    <div className={`modal ${isOpen ? "openModal-display" : ""}`}>
      <div className="modal-container">
        
        {modal.map((card, id )=>(

            <div key={card.id}
            className={`descriptor ${selectedImg === id ? "selected" : ""}`}
            >
                
           <p>{card.title}</p> 
           <button onClick={()=>{onClose(), handleclick(id)}} className="modal-close">
          x
        </button>
           </div>
        ))}
       
      </div>
    </div>
  );
}

export default ModalOpen;

