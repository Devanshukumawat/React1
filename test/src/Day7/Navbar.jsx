import NavbarCss from "./navbar.module.css"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
            <div className={NavbarCss.main} >
                <ul className={NavbarCss.list}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/card">Card</Link></li>
                    <li><Link to="/data">Data</Link></li>
                </ul>
            </div>
        </>
     );
}

export default Navbar;