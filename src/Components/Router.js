import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import ServiceDetails from "./ServiceDetails";
import TotalServices from "./TotalServices/TotalServices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/totalServices',
                loader:()=> fetch('http://localhost:5000/totalServices'),
                element:<TotalServices></TotalServices>
            },

            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/totalServices/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            },

        ]

    }

])