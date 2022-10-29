import img from '../../../assets/logo.png'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={img} alt="Logo" className="logo" />
      <p className="logo__contador">1</p>
    </div>
  )
}

export default CartWidget