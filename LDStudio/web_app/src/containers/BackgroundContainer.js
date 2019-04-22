import {connect} from "react-redux";

import BackgroundComponent from './../components/background';
import * as actions from './../actions'

const preloadImage = (arrayOfUrl) => {
    for (let url of arrayOfUrl) {
        const img = new Image();
        img.src = url;
    }
};

const mapStateToProps = (state) => ({
    activeBackground:   state.activeBackground,
    orderOfBackgrounds: state.order,
});
// const mapDispatchToProps = (dispatch) => ({
//     changeBackground: (nextBackground) => dispatch(actions.changeBackground(nextBackground))
// });

export default connect(mapStateToProps)(BackgroundComponent)