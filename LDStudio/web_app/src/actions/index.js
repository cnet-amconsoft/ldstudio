import * as types from './../actions/actionTypes'


export const addBackground = (backgroundObject) => ({
    type: types.ADD_BACKGROUND,
    backgroundObject,
});

export const removeBackgeound = (id) => ({
    type: types.REMOVE_BACKGROUND,
    id,
});

export const toggleBacground = (nextBackgroundId) => ({
    type: types.TOGGLE_BACKGROUND,
    nextBackgroundId
});
