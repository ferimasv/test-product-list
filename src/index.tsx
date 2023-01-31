import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import PopUp from "./components/PopUp/PopUp";
import Context from "./context/Context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Context>
            <App />
            <PopUp/>
        </Context>
    </Provider>
);
