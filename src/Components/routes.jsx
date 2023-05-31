import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import SecretRoute from "./SecretRoute";
import PrivateRoute from "./PrivateRoute";
import LoadData from "../Pages/LoadData";

const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/secret',
            element:<PrivateRoute><SecretRoute/></PrivateRoute>
        },
        {
            path:'/data',
            element:<PrivateRoute><LoadData/></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/reg',
            element:<Reg/>
        }
    ]
)

export default routes