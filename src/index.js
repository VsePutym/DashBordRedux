import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./Root";
import {store, persistor} from "./Store";


ReactDOM.render(
    <React.StrictMode>
        <Root store={store} persistor={persistor} />
    </React.StrictMode>,
    document.getElementById('root')
);
