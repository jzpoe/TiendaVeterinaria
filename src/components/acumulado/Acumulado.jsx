


import { useContext } from 'react'
import './acumulado.css'
import { dataContext } from '../../dataContex/DataContext'
const Acumulado = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className='productosAcumulados'>
      {cart.map((product) => (
        <div className='productoAcumulado' key={product.id}>
          <div className='container-productoAcumulado'>
            <img src={product.src} alt='' />
            
          </div>
        </div>
        
      ))}
                <button className='volver'>volver</button>

    </div>

  );
};

export default Acumulado;
