import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceCard from "../Pages/ServiceCard/ServiceCard";
import PrivateRoute from "../Componenet/PrivateRoute/PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/about',
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>,
                loader: () => fetch('/organijon.json')
            },

            {
                path: '/service/:id',
                element: <PrivateRoute>
                    <ServiceCard></ServiceCard>
                </PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/contact Us',
                element: <PrivateRoute>
                    <Contact></Contact>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
                ,
            },
        ]
    }
])

export default routes;