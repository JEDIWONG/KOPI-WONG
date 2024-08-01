import logo from "../assets/logo.jpg";
import "../style/Header.css";
import {Link} from "react-router-dom";

function Header(){

    return(
        <>
            <div className="header-container">

                <img className="header-logo" src={logo}></img> 
                <Link className="header-help">Help</Link>
            
            </div>
        </>
    );

};

export default Header;