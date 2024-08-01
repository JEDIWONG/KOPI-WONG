import { Link, useParams } from "react-router-dom";
import { Product } from "./Product";
import '../style/FoodPage.css';
import SelectionAdd from "./SelectionAdd";
import { useState } from "react";

function FoodPage(){

    const {id} = useParams();

    const [amount,setAmount] = useState(0);

    function decreaseAmount(){
        if(amount>0){
            setAmount(amount-1);
        }
    }

    function increaseAmount(){
        setAmount(amount+1);
    }

    const item = (
        {
            imgUrl:Product[id-1].imgUrl,
            type:Product[id-1].type,
            name:Product[id-1].name,
            price:Product[id-1].price
        }
    )

    return(
        <>
            <div className="food-page-container">

                <Link to={`/`}>
                    <button id="back">Back</button>
                </Link>
                

                <img src={item.imgUrl}></img>

                <div className="food-detail">
                    <h1>{item.name}</h1>
                    <h2>RM {item.price}</h2>
                    <h3>{item.type}</h3>
                </div>

                <div className="addon-title">
                    <h2>Add-On</h2>
                    <p>(Allow Multiple Selection)</p>
                </div>

                
                <SelectionAdd name="Egg" price="5.00"></SelectionAdd>
                <SelectionAdd name="Chili" price="1.00"></SelectionAdd>
                <SelectionAdd name="Ant" price="15.00"></SelectionAdd>
                <SelectionAdd name="Bat" price="305.00"></SelectionAdd>

                
                <h2 className="addon-title">Remark</h2>
                <input type="text" className="textbox" placeholder="Enter Remark Here"></input>

                <div className="button-order-container">
                    <h>
                        ORDER
                    </h>

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
        </>
    );
};

export default FoodPage;