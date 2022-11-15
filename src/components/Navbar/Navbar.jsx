<<<<<<< HEAD
import './Navbar.css'
import img1 from '../../assets/logoCreartivos.JPG'
=======
import img1 from '../../assets/logoCreartivos.JPG'
import './Navbar.css'
>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ({contador}) => {
    return (
        <nav className="Navbar">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
<<<<<<< HEAD
                    <img src={img1} className='Navbar__img' alt='Logo Creartivos'/>
                    </div>
                    <div className="flip-box-back">
                    <img src={img1} className='Navbar__img' alt='Logo Creartivos'/>
=======
                    <a href='inicio'><img src={img1} className='Navbar__img' alt='Logo Creartivos'/></a>
                    </div>
                    <div className="flip-box-back">
                    <a href='inicio'><img src={img1} className='Navbar__img' alt='Logo Creartivos'/></a>
>>>>>>> 38e3c936234c83e4af3c4ee96d2999240e92fab1
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
            <CartWidget contador={contador}/>
        </nav>
    )
}

export default Navbar