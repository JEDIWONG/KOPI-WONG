import { Button } from "@mui/material";
import "../style/Success.css";
import { Link } from "react-router-dom";
import icon from "../assets/successIcon.svg";

function Success(){

    return(
        <>  
            <div className="page-container">

                <img src={icon}></img>
                <h1>Order Confirmed</h1>
                <Link  to={"/Kopi-wong"}>
                    <Button className="button-back" variant="contained">Back</Button>
                </Link>

            </div>
            
        </>
    );

};

export default Success;