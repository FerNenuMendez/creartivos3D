import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
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
        </nav>
    )
}

export default Navbar