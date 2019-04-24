import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';
import backgroundReducer from "./reducers/backgroundReducer";

const initStore = {
    listOfBackgrounds: [{id:'bcg--0',value: '#000000', isVisible: true},{id:'bcg--1',value: '#1619bc', isVisible: false},],
};

const store = createStore(rootReducer, initStore);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
