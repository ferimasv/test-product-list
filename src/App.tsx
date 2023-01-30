import React from 'react';
import {PagesRouter} from "./router/PagesRouter";
import {RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <RouterProvider router={PagesRouter}/>
    );
};

export default App;