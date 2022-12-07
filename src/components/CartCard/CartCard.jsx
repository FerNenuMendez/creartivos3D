import './CartCard.css'
import { useContext } from "react"
import { cartContext } from '../../context/cartProvider'

const CartCard = () => {
    const {cart}=useContext(cartContext)
    
    const mate=cart.map((item)=>{
      const producto=item.product
      const cantidad=item.quantity
      const precio = producto.precio*cantidad
    return(
      <section className='section__cart' key={producto.id} id={producto.id}>
        <div className="cart">
          <div className="item__container1">
            <img src={producto.img1} alt="mate imagen" className="cart__card__img"/>
            <h2 className="item__container__h2">{producto.nombre}</h2>
            <h3 className="item__container__h3">Linea {producto.linea}</h3>
            <h3 className="item__container__h3">Precio unitario : ${producto.precio}</h3>
            <h3 className="item__container__h3">{cantidad} u.</h3>
            <h3 className="item__container__h3">Precio total : ${precio}</h3>
          </div>
        </div>
      </section>
    )
    })

    return(
      mate
    )
}

export default CartCard