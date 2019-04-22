import * as types from './../actions/actionTypes'

export function order(state=[], action) {
    switch (action.type) {
        case types.SET_BACKGROUND_ORDER:
            return action.orderArray;
        default:
            return state;
    }
}

export function activeBackground(state='', action) {
    switch (action.type) {
        case types.CHANGE_BACKGROUND:
            return action.activeElement;
        default:
            return state;
    }
}