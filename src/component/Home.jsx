import "../style/Home.css";
import VerticalTabs from "../component/VerticalTab";

function Home(){

    return(
        <>
            <div className="home-container">
                <h2 className="home-title">Menu</h2> 

                <div className="content-container">
                    <VerticalTabs></VerticalTabs>
                </div>
            </div>
        </>
    );

};

export default Home;