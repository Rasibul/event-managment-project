import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children : [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default routes;