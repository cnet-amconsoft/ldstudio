import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {applyMiddleware, createStore} from "redux";

import rootReducer from "../reducers";

/*------ Default store values ------*/
const initData = {
    orderOfBackgrounds: [
        {
            id:'bcg--0',
            value: '#000000',
            isVisible: true
        },
    ],
};

/*------ Init redux store ------*/

// Create logger.
const loggerMiddleware = createLogger();

// Create store.
const store = createStore(
    rootReducer,
    initData,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

export default store;