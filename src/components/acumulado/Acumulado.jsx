
import { useContext } from 'react'
import './acumulado.css'
import { dataContext } from '../../dataContex/DataContext'
const Acumulado = () => {
    const {cart} = useContext(dataContext)
    return cart.map((product)=>{
  return    (
    <div className='productoAcumulado' key={product.id}>
    <img src={product.src} alt="" />
    <button className='volver'>volver</button>
    </div>
    
    
  )
})
}

export default Acumulado
