import "./Navbar.css";
import { ReactComponent as NasaWorm } from "../../../assets/images/NASA_Worm_logo.svg";


const Navbar = () => {

    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <NasaWorm className="nasaWorm" />
            </a>
            <button className="rocket"><span className="material-symbols-outlined">rocket</span></button>
        </nav>
    )
}

export default Navbar;