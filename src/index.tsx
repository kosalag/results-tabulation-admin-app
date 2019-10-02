import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router";
import { history } from "./utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Router history={ history }>
            <Provider store={ store }>
                <App />
            </Provider>
        </Router>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
