import './ItemDetail.css'
import { useParams } from "react-router-dom"
import { useState, useContext } from 'react'
import data from '../../data/catalogomates'
import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../context/cartProvider'




const ItemDetail = () => {
    const {id}=useParams();

    const [count, setCount]= useState(0)
    
    const {cart, addToCart}=useContext(cartContext)

    const productos = data.filter(producto => producto.id === Number(id));
    const mate = productos.reduce((item)=>{
        return item
    })
    console.log(cart)
    return(
        <div className='ItemDetail'>
            <div className='ItemDetail__card'>
                <h2 className='detail__h2'>{mate.nombre}</h2>
                <h3 className='detail__h3'>Linea: {mate.linea}</h3>
                <h3 className='detail__h3'>Precio ${mate.precio}</h3>
                <ItemCount  count={count} setCount={setCount}/>
                <button onClick={()=>addToCart(mate,count)}> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemDetail