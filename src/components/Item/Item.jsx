import './item.css'
import data from '../../data/catalogomates'
<<<<<<< HEAD

//importar las imagenes, el btn "add carrito" 

const Item = () => {

=======
import './item.css'



//importar las imagenes, el btn "add carrito" 


const Item = ({add}) => {

>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
    const mate = data.map((producto)=>{
        return(
        <div>
            <div key={producto.id} className="item__container">
                <h2 className="item__container__h2">Mate {producto.nombre}</h2>
                <h3 className="item__container__h3">Linea {producto.linea}</h3>
                <h3 className="item__container__h3">Precio ${producto.precio}</h3>
<<<<<<< HEAD
                <button>Al Carrito!</button>
=======
                <button onClick={add}>Al Carrito!</button>
>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
            </div>
        </div>
    )})
    return (
        mate
    )
}

export default Item