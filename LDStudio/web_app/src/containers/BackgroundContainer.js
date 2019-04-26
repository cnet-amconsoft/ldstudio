import {connect} from "react-redux";

import BackgroundComponent from './../components/background';
import * as actions from '../actions/backgroundActions'

const mapStateToProps = (state) => ({
    backgroundList: state.orderOfBackgrounds,
    isChanging:     state.isChanging,
});

const mapDispatchToProps = (dispatch) => ({
    addBackground:      backgroundObject => dispatch(actions.addBackground(backgroundObject)),
    removeBackground:   id => dispatch(actions.removeBackground(id)),
    toggleBackground:   nextBackgroundId => dispatch(actions.toggleBackground(nextBackgroundId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundComponent)