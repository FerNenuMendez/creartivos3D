import './ItemDetail.css'
import { useParams } from "react-router-dom"
import { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../context/cartProvider'
import { Link } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore'




const ItemDetail = () => {
    const {id}=useParams();
    const [count, setCount]= useState(1)
    const [mate, setMate]= useState({})
    const {addToCart}=useContext(cartContext)
    
    const getProduct=()=>{
        const db = getFirestore()
        const query = doc( db, 'Mates', id)
        getDoc(query)
        .then((response)=>{
            return setMate({id:response.id, ...response.data()})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(()=>{
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return(
        <div className='ItemDetail'>
            <div className='ItemDetail__card'>
                <img src={mate.img1} alt="imagen del mate" className='ItemDetail__card__img'/>
                <h2 className='detail__h2'>{mate.nombre}</h2>
                <h3 className='detail__h3'>Linea: {mate.linea}</h3>
                <h3 className='detail__h3'>Precio ${mate.precio}</h3>
                <h3 className='detail__h3'>Stock: {mate.stock} unidades</h3>
                <h4>Todos nuestros productos estan hechos de PLA que es un plastico inodoro, permanente, claro y brillante, altamente resistente ante la humedad y la grasa.
                    Similar al polietileno en cuanto a desarrollar barreras para sabores y olores, suficientemente extensible y elástico y su nivel de inflamabilidad es muy bajo lo que lo hace estable a la luz UV.
                    Puede copolimerizarse con otros materiales y su proceso de fabricación puede variarse a fin de adoptar características mecánicas.
                    <br/>El PLA es un plástico derivado del maíz, no tóxico y biodegradable, ademas de estar aditivado con biopolímeros de última generación que le aumentan la fluidez y mejoran la resistencia de la pieza.
                </h4>
                <div className='detail__botonera'>
                    <ItemCount  count={count} setCount={setCount}/>
                    <button onClick={()=> addToCart(mate,count)} className='detail__btn'> Agregar al Carrito </button>
                    <Link to="/">
                        <button className='detail__btn'>Volver</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}

export default ItemDetail