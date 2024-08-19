import "../style/FoodCard.css";


function FoodCard(props){

    return(
        <>   
            <div className="food-card-container">
                <img src={props.img}></img>
                <p className="food-card-tag">{props.tag}</p>
                <p className="food-card-name">{props.name}</p>
                <p className="food-card-price">RM {props.price.toFixed(2)}</p>
            </div>
        </>
    );

};

export default FoodCard;