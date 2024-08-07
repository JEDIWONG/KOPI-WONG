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

    var item;

    if(Product[id-1].type=="Drink"){

        item = (
            {
                imgUrl:Product[id-1].imgUrl,
                type:Product[id-1].type,
                name:Product[id-1].name,
                price:Product[id-1].price,
                
            }
        )

    }
    else{
        item = (
            {
                imgUrl:Product[id-1].imgUrl,
                type:Product[id-1].type,
                name:Product[id-1].name,
                price:Product[id-1].price,
                addon:Product[id-1].addon
            }
        )
    }

    function showContent(){
        
        

        if(item.type=="Drink"){

            return(
            <>  
                <div style={{display:"flex",flexDirection:"row",marginLeft:"10%n"}}>
                    <p>Not Available</p>
                    <input type="radio"></input>
                </div>
                
            </>);
            
        }
        else{
            
            return(item.addon.map(a=>(
                <SelectionAdd name={a.name} price={a.price}></SelectionAdd>
            )));

        }
    
    }
    

    return(
        <>
            <div className="food-page-container">

                <Link to={`/Kopi-Wong`}>
                    <button id="back">Back</button>
                </Link>
                

                <img src={item.imgUrl}></img>

                {console.log(item.imgUrl)}

                <div className="food-detail">
                    <h1>{item.name}</h1>
                    <h2>RM {item.price}</h2>
                    <h3>{item.type}</h3>
                </div>

                <div className="addon-title">
                    <h2>Add-On</h2>
                    <p>(Allow Multiple Selection)</p>
                </div>

                {showContent()}
                
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