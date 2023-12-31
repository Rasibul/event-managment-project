import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBAr";
import Footer from "../Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";



const MainLayOut = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayOut;