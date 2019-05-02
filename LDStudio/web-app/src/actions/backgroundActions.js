import * as types   from './../actions/actionTypes';
import delay        from 'lodash/delay';
import {backgroundAnimationDuration} from 'config';

/*====== Background order actions ======*/

export const addBackground = (backgroundObject) => ({
    type: types.ADD_BACKGROUND,
    backgroundObject,
});

export const removeBackground = (id) => ({
    type: types.REMOVE_BACKGROUND,
    id,
});

export const toggleBackground = (nextBackgroundId) => ({
    type: types.TOGGLE_BACKGROUND,
    nextBackgroundId,
});

/*====== Background list actions ======*/

export const setBackgroundList = (backgrounds) => ({
    type: types.SET_BACKGROUND_LIST,
    backgrounds,
});

/*====== Background state actions ======*/

export const endChange = () => ({
    type: types.END_OF_CHANGE
});

export const startChange = () => ({
   type: types.START_OF_CHANGE
});

/*====== Action creators ======*/

export const fetchBackgrounds = () => (dispatch) => (
    new Promise((resolve) => {
        resolve(require('backgrounds.json'));
    }).then(
        (backgroundData) => dispatch(setBackgroundList(backgroundData)),
        (error) => console.log(error)
    )
);

export const startRefresh = (backgroundObject) => (dispatch) => {
    dispatch(startChange());
    dispatch(addBackground(backgroundObject));
};

export const endRefresh = (currentId, nextId) => (dispatch) => {
    dispatch(endChange());
    if (currentId && nextId) {
        dispatch(toggleBackground(nextId));
        delay(() => dispatch(removeBackground(currentId)), backgroundAnimationDuration)
    }
};



