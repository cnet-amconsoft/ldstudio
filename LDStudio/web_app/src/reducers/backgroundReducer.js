import * as types from './../actions/actionTypes'

export function isChanging (state=false, action) {
    switch (action.type) {

        case types.END_OF_CHANGE:
            return false;

        case types.START_OF_CHANGE:
            return true;

        default:
            return state;
    }
}

export function orderOfBackgrounds (state=[], action) {
    switch (action.type) {

        case types.ADD_BACKGROUND:
            return Object.assign(...state, action.backgroundObject, {isVisible: false});

        case types.REMOVE_BACKGROUND:
            return state.filter(item => item.id !== action.id );

        case types.TOGGLE_BACKGROUND:
            return state.map(item => {
                if (item.id === action.nextBackgroundId) {
                    item.isVisible = true;
                }
                return item.isVisible;
            });

        default:
            return state;
    }
}

export function listOfBackgrounds (state=[], action) {
    switch (action.type) {

        case types.SET_BACKGROUND_LIST:
            return [...action.backgrounds];

        default:
            return state;
    }
}