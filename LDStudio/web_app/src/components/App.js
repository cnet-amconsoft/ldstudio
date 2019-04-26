import React, {Component} from 'react';


import Background from '../containers/BackgroundContainer';
import Button from '@material-ui/core/Button';
import Header from './header';
import {fetchBackgrounds} from 'actions/backgroundActions'
import {styled} from "@material-ui/styles";
import {connect} from "react-redux";

export class App extends Component {

    render() {
        return (
            <div>
                <Background />
                <Header/>
                <MyButton onClick={this.props.getBackgrounds}>change background</MyButton>
            </div>
        )
    }
}

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#ffffff !important',
    height: 48,
});

const mapDispatchToProps = dispatch => ({getBackgrounds: () => dispatch(fetchBackgrounds())});

export default connect(null, mapDispatchToProps)(App)
