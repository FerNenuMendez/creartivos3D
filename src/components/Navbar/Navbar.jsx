
import './Navbar.css'
import img1 from '../../assets/logoCreartivos.JPG'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
        <Link to="/">   
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
        </Link>
            <h1 className="Navbar__h1">CREARTIVOS 3D</h1>
            <ul className="Navbar__ul">
                <li className="Navbar__ul__li">
                    <Link to="/categoria/Superheroes" className="Navbar__ul__li">Superheroes</Link> 
                </li>
                <li className="Navbar__ul__li" >
                <Link to="/categoria/StarWars" className="Navbar__ul__li">Star Wars</Link>
                </li>
                <li className="Navbar__ul__li">
                <Link to="/categoria/Disney" className="Navbar__ul__li">Disney</Link>
                </li>
                <li className="Navbar__ul__li">
                <Link to="/categoria/Personajes" className="Navbar__ul__li">Personajes</Link>
                </li>
                <li className="Navbar__ul__li">
                <Link to="/categoria/Fantasia" className="Navbar__ul__li">Fantasia</Link>
                </li>
            </ul>
            <Link to="/Cart"><CartWidget /></Link>
        </nav>
    )
}

export default Navbar