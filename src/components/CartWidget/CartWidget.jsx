
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
    </div>
  )
}

export default CartWidget