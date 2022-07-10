import "./FirstNavBar.css";
import {ReactComponent as NasaWorm} from "../../../../assets/images/NASA_Worm_logo.svg";

const FirstNavBar = () => {


    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <NasaWorm className="nasaWorm"/>
            </a>

            <button className="rocket"><span className="material-symbols-outlined">rocket</span></button>
            <div className="nav-menu">
                <ul className="nav-menu-list">
                    <li className="nav-menu-listItem"><a href="/home" className="nav-menu-anchor">home</a></li>
                    <li className="nav-menu-listItem"><a href="/about" className="nav-menu-anchor">about</a></li>
                    <li className="nav-menu-listItem"><a href="/contact" className="nav-menu-anchor">contact</a>
                    </li>
                    <li className="nav-menu-listItem"><a href="/links" className="nav-menu-anchor">links</a></li>
                    <li className="nav-menu-listItem"><a href="/resources" className="nav-menu-anchor">resources</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default FirstNavBar;