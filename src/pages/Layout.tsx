import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <div>
            <div className="container">
                Layout
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;