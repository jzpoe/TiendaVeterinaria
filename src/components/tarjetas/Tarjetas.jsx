import "./tarjetas.css";
const Tarjetas = () => {
  return (
    <div className="container-tarjetas">
      <div className="tarjetas">
        <div className="contenido-tarjeta">
          <p className="parrafo-tarjetas">
            <h1>NUTRICION</h1>
            La nutrición para nuestras mascotas es clave para mantener su salud
            y vitalidad. Proporcionarles una dieta equilibrada y adaptada a sus
            necesidades específicas asegura que obtengan los nutrientes
            esenciales para un desarrollo óptimo.
          </p>
        </div>
        <img
          className="imagen-container-tarjeta"
          src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/06/12/150612173542_mascota_promo_624x351_thinkstock.jpg"
          alt=""
        />
      </div>

      <div className="tarjetas1">
        <img
          className="imagen-container-tarjeta1"
          src="https://www.canalmascotas.com/wp-content/uploads/files/article/l/la-mascota-ideal_u7zf9.jpg"
          alt=""
        />

        <div className="contenido-tarjeta">
          <p className="parrafo-tarjetas1">
            <h1>BIENESTAR</h1>
            El bienestar de nuestras mascotas está directamente vinculado a su
            alimentación y cuidado general. Brindarles un entorno seguro, cariño
            y una dieta adecuada contribuye a su felicidad y calidad de vida.
          </p>
        </div>
      </div>
      
      <div className="tarjetas2">
        <div className="contenido-tarjetas2">
            <p className="parrafo-tarjetas2">
          <h1>ACONDICIONAMIETO</h1>
            El acondicionamiento físico de las mascotas se logra a través de una
            combinación de ejercicio regular y una dieta saludable. Ambos
            aspectos son fundamentales para mantener su peso ideal y promover la
            salud muscular y ósea.
          </p>
          <img
            className="imagen-container-tarjeta2"
            src="https://sonorastar.com/wp-content/uploads/2020/02/puppy-kitten.jpg"
            alt=""
          />
        </div>

      </div>
      <div className="tarjetas3">
      <img
          className="imagen-container-tarjeta3"
          src="https://img.freepik.com/fotos-premium/varias-razas-perros-posando-sobre-fondo-blanco_879656-653.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698278400&semt=ais"
          alt=""
        />

        <div className="contenido-tarjeta3">
          
          <p className="parrafo-tarjetas3">
          <h1>OPORTUNIDAD</h1>
            La alimentación de nuestras mascotas es una oportunidad para
            fortalecer el vínculo con ellas. Elegir alimentos de calidad y
            compartir momentos de alimentación refuerza la conexión entre
            humanos y animales.
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Tarjetas;
