import { Link } from "react-router-dom";
import "../style/CartItem.css";

function CartItem(props){

    return(
        <>
            <div >
                <Link className="item-card" to={`/Kopi-Wong/food/${props.id}`}>
                    <img src={props.img}></img>
                    <div className="item-details">
                        <h2>{props.name}</h2>
                        <p>Egg + RM 5.00</p>
                        <p></p>
                        <p className="price">Total : RM {props.price}</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default CartItem;