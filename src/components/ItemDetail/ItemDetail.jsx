import './ItemDetail.css'
// import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import data from '../../data/catalogomates'

const ItemDetail = () => {
    const {id}=useParams();
    
    const productos = data.filter(producto => producto.id === Number(id));
    const mate = productos.map((producto)=>{
        return(
            <div className='ItemDetail'>
                <h2 className='detail__h2'>Mate:  {producto.nombre}</h2>
                <h3 className='detail__h3'>Linea: {producto.linea}</h3>
                <h3 className='detail__h3'>Precio ${producto.precio}</h3>
            </div>
        )
    })

    return(
        mate
    )
}

export default ItemDetail