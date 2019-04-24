import { combineReducers } from 'redux';

import listOfBackgrounds from "./backgroundReducer";

const rootReducer = combineReducers({
    listOfBackgrounds,
});

export default rootReducer;