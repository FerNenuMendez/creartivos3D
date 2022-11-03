import data from '../../data/catalogomates'
import item from './item.css'

const Item = () => {
    
    console.log(data)
    const mate = data.map((producto)=>{
        return(
        <div key={producto.id} className="item__container">
            <h2 className="item__container__h2">Mate {producto.nombre}</h2>
            <h3 className="item__container__h3">Linea {producto.linea}</h3>
            <h3 className="item__container__h3">Precio ${producto.precio}</h3>
            <button className="item__container__btn">Agregar al Carrito</button>
        </div>
    )})
    return (
        mate
    )
}

export default Item