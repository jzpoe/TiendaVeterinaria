

  import { useContext, useState } from "react";
  import "./main.css";
  import { dataContext } from "../../dataContex/DataContext";

  const Main = () => {
    
  
    const [selectImage, setSelectImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageDetails, setSelectedImageDetails] = useState(null);

    const handleImageClick = (index, details) => {
      setSelectImage(index);
      setSelectedImageDetails(details);
      openModal();
    };

    const { data, cart, setCart } = useContext(dataContext);

    const handleBuy = (image) => {
      setCart([...cart, image]);
      return image
    };

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    if (!data) {
      return (
        <div>
          {" "}
          <h1>CARGANDO</h1>
        </div>
      );
    }

    return (
      
      <div className="containerMain">
        <div className="imagenesArray">
        
          {data.map((image, id) => (
            <div
              key={image.id}
              className={`imagenWrapper ${selectImage === id ? "selected" : ""}`}
            >
              <img
                src={image.src}
                alt={`Imagen ${id + 1}`}
                onClick={() => handleImageClick(id, image)}
              />
              <p className="descripcion">{image.descripcion}</p>
              <div className="container_P">
                <p>{image.valor}</p>
                
              </div>
            </div>
            
          ))}
        </div>
        
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              
              {selectedImageDetails && (
                <div>
                  <img
                    src={selectedImageDetails.src}
                    alt={selectedImageDetails.descripcion}
                  />
                  <p>{selectedImageDetails.descripcion}</p>
                  <p>{selectedImageDetails.valor}</p>
                  <div className="container-btn">
                  <button className="btn-comprar" onClick={() => handleBuy(selectedImageDetails)}>comprar</button>
                  </div>
                </div>
                
              )}
            </div>
            
          </div>
        )}
      </div>
    );
  };

  export default Main;

