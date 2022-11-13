
import { BiCartAlt } from "react-icons/bi";
import './CartWidget.css'


const CartWidget = ({contador}) => {
  return (
    <div className="carrito">
      <BiCartAlt className="logo"/>
      <p id='contador' className="logo__contador">{contador}</p>
    </div>
  )
}

export default CartWidget