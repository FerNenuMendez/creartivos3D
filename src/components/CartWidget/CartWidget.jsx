import './CartWidget.css'
import { BiCartAlt } from "react-icons/bi";
import { cartContext } from '../../context/cartProvider'
import { useContext } from 'react';

const CartWidget = () => {
  const {cart}=useContext(cartContext)
  return (
    <div className="carrito">
      <BiCartAlt className="logo"/>
      <p id='contador' className="logo__contador">{cart.length}</p>
    </div>
  )
}

export default CartWidget