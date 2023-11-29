import { useContext, useState } from "react";
//import imagenesVete from "../../../public/img/imagenes";
import "./main.css";
import { dataContext } from "../../dataContex/DataContext";
const Main = () => {
  const [selectImage, setSelectImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectImage(index);
  };

  const { data, cart, setCart } = useContext(dataContext);
  console.log(data);

  const handleBuy = (image) => {
    console.log(image);
    setCart([...cart, image]);
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
              onClick={() => handleImageClick(id)}
            />
            <p className="descripcion">{image.descripcion}</p>
            <div className="container_P">
              <p>{image.valor}</p>
              <button onClick={() => handleBuy(image)}>comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
