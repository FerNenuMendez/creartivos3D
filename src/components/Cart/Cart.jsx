import "./Cart.css"
import CartCard from "../CartCard/CartCard"
import CartAside from "../CartAside/CartAside"
import { useContext } from "react"
import { cartContext } from '../../context/cartProvider'
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart, cleanCart}=useContext(cartContext)
  

  const carrito=()=>{
    if (cart.length===0){
      return(
        <div className="cartContainer">
          <h2 className="cart__h2">Usted no tiene productos en el carrito</h2>
          <Link to={`/`} className="cart__btnHome__link">
            <button className="cart__btnHome">Ir a Comprar</button>
          </Link>
        </div>
        
      )

    } else {
      return(
      <div className="cartCart">
        <div className="cartContainer">
          <button className="cartContainer__btn" onClick={cleanCart}>Vaciar carrito</button>
          <CartCard/>
        </div>
        <CartAside/>
      </div>
    )
    }
  }
  return(
    carrito()
  )
}

export default Cart