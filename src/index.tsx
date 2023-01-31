import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import Popup from "./components/PopUp/Popup";
import Context from "./context/Context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Context>
            <App />
            <Popup/>
        </Context>
    </Provider>
);
