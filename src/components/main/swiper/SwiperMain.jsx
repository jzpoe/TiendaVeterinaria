

import Tarjetas from "../../tarjetas/Tarjetas";
import Main from "../Main";
import "./SwiperMain.css";

const SwiperMain = () => {
  return (
    <>
      <div className="container-swiper">
        <img
          className="image-container"
          src="/img/imagenes/accesorios-mascotas-concepto-naturaleza-muerta-cuencos-varios-tamanos.jpg"
          alt=""
        />
        <div className="container-parrafoVete">
          <h1 className="parrafoVete">
            TIEND<span>A</span> VETERINARI<span>A</span>{" "}
          </h1>
        </div>

        <div className="cotenidoTiendaOnline">
          <p className="TiendaOnline">
            Encuentr<span>A</span> todo lo que desees en nuestra tiend
            <span>A</span> online
          </p>
        </div>
      </div>

      <Main />
      <Tarjetas/>
    </>
  );
};

export default SwiperMain;
