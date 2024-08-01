import { Link } from "react-router-dom";
import "../style/Cart.css";
import CartItem from "./CartItem";
import {Product} from "./Product";

function Cart(){

    return(
        <>
            <div className="cart-page-container">

                <Link to={"/"}>
                    <button className="back-button">Back</button>
                </Link>

                <h1>Cart</h1>

                <div className="cart-item-list">
                    <CartItem id={Product[0].id} img={Product[0].imgUrl} name={Product[0].name} price={Product[0].price} amount="1"></CartItem>
                    <CartItem id={Product[0].id} img={Product[0].imgUrl} name={Product[0].name} price={Product[0].price} amount="1"></CartItem>
                </div>

                <p style={{textAlign:"center",color:"grey"}}>2 Items</p>

                <div className="cart-total">
                    <h2>
                        Total
                    </h2>
                    <p>RM 24.00</p>
                </div>

                <Link>
                    <button className="checkout-button">CHECKOUT</button>
                </Link>
            </div> 
        </>
    );

};

export default Cart;