import store from "extensions/createStore";
import {connect} from "react-redux";

import BackgroundComponent from './../components/background';
import * as actions from '../actions/backgroundActions'

export const backgroundRefresh = (nextBackgroundId) => {
    const dispatch = (action) => store.dispatch(action),
          state = store.getState();

    const background = state.listOfBackgrounds.find(background => background.id === nextBackgroundId);

    return dispatch(actions.startRefresh(background));
};

const getIdOrder = () => {
    const state = store.getState();

    if (state.orderOfBackgrounds.length > 1) {
        const currentId = state.orderOfBackgrounds[0].id,
              nextId = state.orderOfBackgrounds[1].id;

        return [currentId, nextId];
    }
    return [null, null]

};

const mapStateToProps = (state) => ({
    backgroundList:     state.orderOfBackgrounds,
    isChanging:         state.isChanging,
});

const mapDispatchToProps = (dispatch) => ({
    endRefresh:   () => dispatch(actions.endRefresh(...getIdOrder()))
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundComponent)