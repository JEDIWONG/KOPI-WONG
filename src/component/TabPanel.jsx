import "../style/TabPanel.css";

function TabPanel(){

    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    
    const contents = [
        'Content for Tab 1',
        'Content for Tab 2',
        'Content for Tab 3',
    ];

    return(
        <>

        
            <div className="tab-container">

                <div className="tab-list">

                    <div className="tab">

                    </div>

                </div>

                <div className="tab-content">
                    {contents[activeTab]}
                </div>
                

                
                
            </div>
        </>
    );

};

export default Home;