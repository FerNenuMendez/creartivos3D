import './CartWidget.css'
import { BiCartAlt } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="carrito">
      <BiCartAlt className="logo"/>
      <p id='contador' className="logo__contador">0</p>
    </div>
  )
}

export default CartWidget