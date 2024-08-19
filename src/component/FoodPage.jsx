import { Link, useParams } from "react-router-dom";
import { Product } from "./Product";
import '../style/FoodPage.css';
import SelectionAdd from "./SelectionAdd";
import { useState, useContext } from "react";
import { UserCartContext } from "../App";

function FoodPage() {
    const { id } = useParams();
    const { userCart, setUserCart } = useContext(UserCartContext);

    const [amount, setAmount] = useState(get_current_amount());
    const product = Product[id - 1];

    function get_current_amount(){
        var amt=0;

        if(userCart!=0){
            userCart.map(p=>{
                if(p.foodId==id){
                    amt++;
                }
            })
        }

        return amt;
    }

    function decreaseAmount() {
        if (amount > 0) {
            setAmount(amount - 1);
            setUserCart(prevCart => prevCart.slice(0, -1)); // Avoid direct mutations
        }
    }

    function increaseAmount() {
        setAmount(amount + 1);
        setUserCart(prevCart => [...prevCart, { id: product.id, foodId: id }]);
    }

    function showContent() {
        if (product.type === "Drink") {
            return (
                <div style={{ display: "flex", flexDirection: "row", marginLeft: "10%", backgroundColor: "rgb(255, 255, 255)", boxShadow: "0px 1px 3px rgb(148, 147, 147)", width: "80%", paddingLeft: "5%" }}>
                    <p>Not Available</p>
                    <input type="radio" defaultChecked={true} style={{ marginLeft: "60%" }}></input>
                </div>
            );
        } else {
            return product.addon.map(a => (
                <SelectionAdd key={a.name} name={a.name} price={a.price} />
            ));
        }
    }

    return (
        <div className="food-page-container">
            <Link to={`/Kopi-Wong/`}>
                <button id="back">Back</button>
            </Link>

            <img src={product.imgUrl} alt={product.name} />

            <div className="food-detail">
                <h1>{product.name}</h1>
                <h2>RM {product.price}</h2>
                <h3>{product.type}</h3>
            </div>

            <div className="addon-title">
                <h2>Add-On</h2>
                <p>(Allow Multiple Selection)</p>
            </div>

            {showContent()}

            <h2 className="addon-title">Remark</h2>
            <input type="text" className="textbox" placeholder="Enter Remark Here"></input>

            <div className="button-order-container">
                <h>ORDER</h>

                <button className="button-amount" onClick={increaseAmount}>
                    +
                </button>

                <p className="amount-label">
                    {amount}
                </p>

                <button className="button-amount" onClick={decreaseAmount}>
                    -
                </button>
            </div>
        </div>
    )
}

export default FoodPage;
