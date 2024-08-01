import "../style/SelectionAdd.css"

function SelectionAdd(props){

    return(
        <> 
            <div className="selection">
                <p className="selection-name">{props.name}</p>
                <p className="selection-price">+ RM {props.price}</p>
                <input type="checkbox"></input>
            </div>
         
        </>
    );

};

export default SelectionAdd;