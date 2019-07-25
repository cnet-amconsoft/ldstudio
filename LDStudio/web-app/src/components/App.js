import React from 'react';

import Background from '../containers/BackgroundContainer';
import Button from '@material-ui/core/Button';
import FullScreenContainer from './FullScreenComponent';
import Header from './header';
import ScrollContainer from './ScrollComponent';

import {backgroundRefresh} from 'containers/BackgroundContainer'
import {styled} from "@material-ui/styles";
import bcg from 'backgrounds.json';
import ViewportComponent from "./ViewportComponent";

export const App = props => {
    return (
        <div>
            <ScrollContainer>
                <Background />
                <Header/>
                {bcg.map(i => (
                    <MyButton onClick={() => backgroundRefresh(i.id)} style={{background: i.value}}>{i.id}</MyButton>
                ))}
                <FullScreenContainer/>
                <ViewportComponent onEnterViewport={()=>console.log('enter')} onLeaveViewport={()=>console.log('leave')}>
                    <FullScreenContainer>
                        <div style={{background: 'linear-gradient(to bottom, red 0%, green 100%)', height: '2000px'}} />
                    </FullScreenContainer>
                </ViewportComponent>
            </ScrollContainer>
        </div>
    )
};

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: '1px solid #5c5c5c',
    color: '#ffffff !important',
    height: 48,
});


export default App;
