import "../style/ProgressBar.css";

function ProgressBar(){

    return(
        <>
            <div className="progress-bar-container">

                <div className="step-container">
                    <div className="step">
                        <p>1</p>
                    </div> 

                    <p className="step-label">Order</p>
                </div>

                
                <div className="step-after" ></div>
                <div className="step-after" ></div>
                <div className="step-after" ></div>

                <div className="step-container">
                    <div className="step">
                        <p>2</p>
                    </div> 

                    <p className="step-label">Checkout</p>
                </div>

                <div className="step-after" ></div>
                <div className="step-after" ></div>
                <div className="step-after" ></div>

                <div className="step-container">
                    <div className="step">
                        <p>3</p>
                    </div> 

                    <p className="step-label">Complete</p>
                </div>

            
            </div>
        </>
    );

};

export default ProgressBar;