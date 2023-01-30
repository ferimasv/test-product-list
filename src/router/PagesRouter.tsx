import {createBrowserRouter, Navigate} from "react-router-dom";
import Active from "../pages/Active";
import All from "../pages/All";
import Layout from "../pages/Layout";

export const PagesRouter = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Active/>,
            },
            {
                path: '/all',
                element: <All/>,
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" replace={true}/>
    },
]);