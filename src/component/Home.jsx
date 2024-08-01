import "../style/Home.css";
import FoodCard from "./FoodCard";
import { Product } from "./Product";
import { Link } from "react-router-dom";

function Home(){

    return(
        <>
            <div className="home-container">
                <h2 className="home-title">Menu</h2> 

                <div className="content-container">

                    <div className="category-bar">
                        
                    </div>

                    <div className="item-container">
                        {Product.map((p)=>(
                            <Link className="link" to={`food/${p.id}`}>
                                <FoodCard tag={p.type} img={p.imgUrl} name={p.name} price={p.price}></FoodCard>
                            </Link>
                        ))}                        
                    </div>

                </div>

                
                
            </div>
        </>
    );

};

export default Home;