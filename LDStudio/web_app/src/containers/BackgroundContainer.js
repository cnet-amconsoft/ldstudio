import {connect} from "react-redux";

import BackgroundComponent from './../components/background';
import * as actions from './../actions'
import backgroundReducer from "../reducers/backgroundReducer";

const preloadImage = (arrayOfUrl) => {
    for (let url of arrayOfUrl) {
        const img = new Image();
        img.src = url;
    }
};

const mapStateToProps = (state) => ({
    backgroundList: state.listOfBackgrounds,
});
// const mapDispatchToProps = (dispatch) => ({
//     changeBackground: (nextBackground) => dispatch(actions.changeBackground(nextBackground))
// });

export default connect(mapStateToProps)(BackgroundComponent)