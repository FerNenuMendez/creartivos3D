import './Navbar.css'
import img1 from '../../assets/logoCreartivos.JPG'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                    <img src={img1} className='Navbar__img' alt='Logo Creartivos'/>
                    </div>
                    <div className="flip-box-back">
                    <img src={img1} className='Navbar__img' alt='Logo Creartivos'/>
                    </div>
                </div>
            </div>
            <h1 className="Navbar__h1">CREARTIVOS 3D</h1>
            <ul className="Navbar__ul">
                <li className="Navbar__ul__li">
                    Superheroes
                </li>
                <li className="Navbar__ul__li">
                Star Wars
                </li>
                <li className="Navbar__ul__li">
                Disney
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar