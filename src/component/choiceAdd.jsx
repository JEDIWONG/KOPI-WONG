import "../style/choiceAdd.css"

function choiceAdd(props){

    return(
        <> 
            <div className="choice">
                <p className="choice-name">{props.name}</p>
                <p className="choice-price">+ RM {props.price}</p>
                <input type="radio"></input>
            </div>
         
        </>
    );

};

export default choiceAdd;