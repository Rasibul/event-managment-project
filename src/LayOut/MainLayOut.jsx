import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBAr";
import Footer from "../Pages/Footer/Footer";



const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=" py-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;