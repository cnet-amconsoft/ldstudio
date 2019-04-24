import React, {Component} from 'react';

import Background from '../containers/BackgroundContainer';
import Button from '@material-ui/core/Button';
import Header from './header';
import styled from "@material-ui/styles/es/styled";
import {connect} from "react-redux";

export class App extends Component {

    static onClickHandler() {
        console.log()
    }

    render() {
        return (
            <div>
                <Background />
                <Header/>
                <MyButton onClick={App.onClickHandler}>change background</MyButton>
            </div>
        )
    }
}

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#ffffff !important',
    height: 48,
    padding: '0 30px',
});

const dispatchToProps = dispatch => () => dispatch();

export default connect(null, dispatchToProps)(App)
