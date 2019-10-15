import path from 'path';

import * as types from './../actions/actionTypes';

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

/**
 * @summary Sets a new background list to Redux Store.
 * @param {Array} state The slice of Redux Store which declaration the list of backgrounds.
 * @param {object} action The object of dispatched action.
 * @returns {Array} A new slice of Redux Store which declaration the list of backgrounds.
 */
export function listOfBackgrounds (state=[], action) {

    switch (action.type) {
        case types.SET_BACKGROUND_LIST:
            return [...state, ...action.backgrounds];
        default:
            return state;
    }
}

export function orderOfBackgrounds (state=[], action) {
    switch (action.type) {

        case types.ADD_BACKGROUND:
            if (state.find(item => item.id === action.backgroundObject.id)) {
                return state;
            }
            else {
                return [...state, {...action.backgroundObject, isVisible:false}];
            }

        case types.REMOVE_BACKGROUND:
            return state.filter(item => !action.id.includes(item.id) );

        case types.TOGGLE_BACKGROUND:
            return state.map(item => {
                if (item.id === action.nextBackgroundId) {
                    item.isVisible = true;
                }
                return item;
            });

        default:
            return state;
    }
}