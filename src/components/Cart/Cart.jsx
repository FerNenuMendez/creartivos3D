import "./Cart.css"
import { useContext } from "react"
import { cartContext } from '../../context/cartProvider'

const Cart = () => {
  const {cart}=useContext(cartContext)
  console.log(cart)
  
  const mate=cart.map((item)=>{
      console.log(item.product)
      const itemF = item.product
      console.log(itemF)
      
  })

  return(
    mate
  )
}

export default Cart