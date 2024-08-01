import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

function Layout(){

    return(
        <>
            <Header></Header>
            <ProgressBar></ProgressBar>
            <Footer></Footer>
            <Outlet></Outlet>
        </>
    );

};

export default Layout;