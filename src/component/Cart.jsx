import { Link} from "react-router-dom";
import {useContext, useEffect, useState } from "react";
import { UserCartContext } from "../App";
import "../style/Cart.css";
import CartItem from "./CartItem";
import {Product} from "./Product";

var total_cost=0.00;

function Cart(){

    const {userCart} = useContext(UserCartContext); 
    const [totalCost, setTotalCost] = useState(0.00);
    
    useEffect(() => {
        
        if (userCart) { 
            let total = 0;
            userCart.forEach(item => {
                const product = Product[item.foodId - 1];
                if (product) {
                    total += product.price;
                }
            });
            setTotalCost(total);
        }
    }, [userCart]);

    return(
        <>
            <div className="cart-page-container">

                <Link to={"/Kopi-Wong"}>
                    <button className="back-button">Back</button>
                </Link>

                <h1>Cart</h1>

                <div className="cart-item-list">
                    {userCart && userCart.length > 0 ? (
                        userCart.map((item, index) => {
                            const product = Product[item.foodId - 1];
                            if (!product) return null; // Skip invalid products
                            return (
                                <CartItem
                                    key={item.id || index} // Add key prop here
                                    id={product.id}
                                    img={product.imgUrl}
                                    name={product.name}
                                    price={product.price.toFixed(2)}
                                />
                            );
                        })
                    ) : (
                        <p>No items in the cart.</p>
                    )}
                </div>

                <p style={{textAlign:"center",color:"grey"}}>{userCart.length} Items</p>

                <div className="cart-total">
                    <h2>
                        Total
                    </h2>
                    <p>RM {totalCost.toFixed(2)}</p>
                </div>

                <Link to={"/Kopi-Wong/success"}>
                    <button className="checkout-button">PLACE ORDER</button>
                </Link>
                
            </div> 
        </>
    );

};

export default Cart;