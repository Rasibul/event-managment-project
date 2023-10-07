import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children : [
            {
                path:'/home',
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
            },
            {
                path: '/register',
                element:<Register></Register>
      ,      }
        ]
    }
])

export default routes;