import { combineReducers } from 'redux';

import * as backgroundReducers from "./backgroundReducer";

const rootReducer = combineReducers({
    ...backgroundReducers,
});

export default rootReducer;