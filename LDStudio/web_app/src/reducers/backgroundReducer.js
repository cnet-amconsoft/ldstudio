import * as types from './../actions/actionTypes'

export default function listOfBackgrounds(state=[], action) {
    switch (action.type) {

        case types.ADD_BACKGROUND:
            return [...state, action.backgroundObject];

        case types.REMOVE_BACKGROUND:
            return state.filter(item => item.id !== action.id );

        case types.TOGGLE_BACKGROUND:
            return state.map(item => item.isVisible = item.id === action.nextBackgroundId);

        default:
            return state;
    }
}