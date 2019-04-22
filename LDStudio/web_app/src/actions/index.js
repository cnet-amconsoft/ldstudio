import * as types from './../actions/actionTypes'

export const changeBackground = (activeElement) => ({
    type: types.CHANGE_BACKGROUND,
    activeElement,
});

export const setBackgroundOrder = (orderArray) => ({
    type: types.SET_BACKGROUND_ORDER,
    orderArray,
});
