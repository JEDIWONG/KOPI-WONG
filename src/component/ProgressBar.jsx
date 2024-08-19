import "../style/ProgressBar.css";

function ProgressBar(){

    return(
        <>
            <div className="progress-bar-container">

                <div className="step-container">
                    <div id="step-1" className="step">
                        1
                    </div> 

                    <p className="step-label" style={{position:"relative",left:"30%"}}>Order</p>
                </div>

                
                <div className="step-after" ></div>
                
                <div className="step-container">
                    <div id="step-2" className="step">
                        2
                    </div> 

                    <p className="step-label" style={{position:"relative",left:"10%"}}>Review Order</p>
                </div>

                <div className="step-after" ></div>

                <div className="step-container">
                    <div id="step-3" className="step">
                        3
                    </div> 

                    <p className="step-label">Complete</p>
                </div>

            
            </div>
        </>
    );

};

export default ProgressBar;