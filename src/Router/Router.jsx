import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceCard from "../Pages/ServiceCard/ServiceCard";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children : [
            {
                path:'/home',
                element:<Home></Home>,
                loader: () => fetch ('/services.json')
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path : '/service/:id',
                element:<ServiceCard></ServiceCard>,
                loader: () => fetch ('/services.json')
            },
            {
                path: '/about',
                element:<About></About>,
                loader: () => fetch ('/organijon.json')
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