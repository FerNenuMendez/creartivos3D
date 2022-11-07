import data from '../../data/catalogomates'
import './item.css'



//importar las imagenes, el btn "add carrito" 


const Item = ({add}) => {

    const mate = data.map((producto)=>{
        return(
        <div>
            <div key={producto.id} className="item__container">
                <h2 className="item__container__h2">Mate {producto.nombre}</h2>
                <h3 className="item__container__h3">Linea {producto.linea}</h3>
                <h3 className="item__container__h3">Precio ${producto.precio}</h3>
                <button onClick={add}>Al Carrito!</button>
            </div>
        </div>
    )})
    return (
        mate
    )
}

export default Item