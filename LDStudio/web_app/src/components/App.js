import React, {Component} from 'react';

import Background from '../containers/BackgroundContainer';
import Header from './header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Background />
                <Header/>
            </div>
        )
    }
}