import { Link, Navlink } from 'react-router-dom'
import img1 from '../../assets/logoCreartivos.JPG'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


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
                    <Link to="/categoria/Superheroes" className="Navbar__ul__li">Superheores</Link>
                    
                </li>
                <li className="Navbar__ul__li">
                    <Link to="/categoria/StarsWars" className="Navbar__ul__li">Stars Wars</Link>
                    
                </li>
                <li className="Navbar__ul__li">
                    <Link to="/categoria/Disney" className="Navbar__ul__li">Disney</Link>
                    
                </li>
            </ul>
            <Link to="/Cart"><CartWidget/></Link>
        </nav>
    )
}

export default Navbar