import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {fetchBackgrounds} from 'actions/backgroundActions';
import { Provider } from 'react-redux';

import * as serviceWorker from 'extensions/serviceWorker';
import App from './components/App';
import store from "extensions/createStore";
import './index.css';

// Get background list.
store.dispatch(fetchBackgrounds());

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
