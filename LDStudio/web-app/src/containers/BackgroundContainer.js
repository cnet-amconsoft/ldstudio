import { initial, last }    from "lodash";
import store                from "extensions/createStore";
import {connect}            from "react-redux";

import BackgroundComponent  from './../components/background';
import * as actions         from '../actions/backgroundActions'

export const backgroundRefresh = (nextBackgroundId) => {
    const dispatch = action => store.dispatch(action),
          state = store.getState(),
          background = state.listOfBackgrounds.find(background => background.id === nextBackgroundId);

    if (state.isChanging) return;
    return dispatch(actions.startRefresh(background));
};

const getIdOrder = () => {
    const state = store.getState(),
          order = state.orderOfBackgrounds;

    if (order.length > 1) {
        const currentIds = initial(order).map(i => i.id),
              nextId = last(order).id;

        return [currentIds, nextId];
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