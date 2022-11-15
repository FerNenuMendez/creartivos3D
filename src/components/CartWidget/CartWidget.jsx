<<<<<<< HEAD
import './CartWidget.css'
import { BiCartAlt } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="carrito">
      <BiCartAlt className="logo"/>
      <p id='contador' className="logo__contador">0</p>
=======

import { BiCartAlt } from "react-icons/bi";
import './CartWidget.css'
// const num=document.getElementById('contador')

const CartWidget = ({contador}) => {
  // if (contador===0){
  //    num.setAttribute('class','logo__contador__escondido')
  // } else if(contador>0){
  //    num.setAttribute('class','logo__contador')
  // }
  
  return (
    <div className="carrito">
      <BiCartAlt className="logo"/>
      <p id='contador' className="logo__contador">{contador}</p>
>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
    </div>
  )
}

export default CartWidget