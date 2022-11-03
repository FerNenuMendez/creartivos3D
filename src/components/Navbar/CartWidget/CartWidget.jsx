import img from '../../../assets/logo.png'
import './CartWidget.css'
import {useState} from 'react'

const CartWidget = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="carrito">
      <img src={img} alt="Carrito de Compras" className="logo" />
      <p className="logo__contador">{contador}</p>
    </div>
  )
}

export default CartWidget