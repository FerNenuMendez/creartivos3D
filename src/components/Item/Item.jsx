import './item.css'
import { Link } from 'react-router-dom';

//importar las imagenes, el btn "add carrito" 

const Item =({product})=>{
    const mate = product.map((producto)=>{
        return(
                <div  className="item__container" key={producto.id}>
                    <img src={producto.img1} alt="imagen del mate" className='item__container__img' />
                    <h2 className="item__container__h2">Mate {producto.nombre}</h2>
                    <h3 className="item__container__h3">Linea {producto.linea}</h3>
                    <h3 className="item__container__h3">Precio ${producto.precio}</h3>
                    <Link to={`detalle/${producto.id}`} className="item__container__h2">
                    <button className='item__container__btn'>Ver Producto</button>
                    </Link>
                </div>
        )
    });
    return (
        mate
    )
}
export default Item