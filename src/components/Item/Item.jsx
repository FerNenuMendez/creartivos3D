import './item.css'
import { Link } from 'react-router-dom';

//importar las imagenes, el btn "add carrito" 

const Item =({product})=>{
    const mate = product.map((producto)=>{
        return(
            <div key={producto.id}>
                <div  className="item__container">
                    <Link to={`detalle/${producto.id}`} className="item__container__h2">
                    <h2 className="item__container__h2">Mate {producto.nombre}</h2>
                    </Link>
                    <h3 className="item__container__h3">Linea {producto.linea}</h3>
                    <h3 className="item__container__h3">Precio ${producto.precio}</h3>
                    <button>Al Carrito!</button>
                </div>
            </div>
        )
    });
    return (
        mate
    )
}
export default Item