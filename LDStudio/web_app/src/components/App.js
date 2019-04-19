import React, {Component} from 'react';

import Background from './background';
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