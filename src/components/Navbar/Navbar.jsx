import img from '../../assets/logoCreartivos.JPG'
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                    <a href='inicio'><img src={img} className='Navbar__img' alt='Logo Creartivos'/></a>
                    </div>
                    <div className="flip-box-back">
                    <a href='inicio'><img src={img} className='Navbar__img' alt='Logo Creartivos'/></a>
                    </div>
                </div>
            </div>
            <h1 className="Navbar__h1">CREARTIVOS 3D</h1>
            <ul className="Navbar__ul">
                <li className="Navbar__ul__li">
                    <a href="#" className="Navbar__ul__li">Nosotros</a>
                </li>
                <li className="Navbar__ul__li">
                <a href="#" className="Navbar__ul__li">Mates</a>
                </li>
                <li className="Navbar__ul__li">
                <a href="#" className="Navbar__ul__li">Contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar