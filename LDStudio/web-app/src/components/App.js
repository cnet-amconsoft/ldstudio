import React                from "react";
import {Container} from "@material-ui/core";

import Background           from "../containers/BackgroundContainer";
import Button               from "@material-ui/core/Button";
import FullScreenContainer  from "./FullScreenComponent";
import Header               from "./header";
import TopBanner from "./content/TopBanner";
import ViewportComponent    from "./ViewportComponent";
import {ThemeProvider}      from "@material-ui/styles";

import theme                from "../extensions/appTheme";
import bcg                  from "backgrounds.json";
import {backgroundRefresh}  from "containers/BackgroundContainer"
import {styled}             from "@material-ui/styles";
import FullContentComponent from "./FullContentComponent";

export const App = props => {
    console.log(theme);

    return (
        <ThemeProvider theme={theme}>
            <div style={{position: 'fixed',zIndex: 2000}}>
            {bcg.map(i => (
                <MyButton onClick={() => backgroundRefresh(i.id)} style={{ background: i.value}}>{i.id}</MyButton>
            ))}
            </div>
            <Background />
            <Header/>
            <Container>
                <FullScreenContainer>
                    <TopBanner/>
                </FullScreenContainer>
                <ViewportComponent onEnterViewport={()=>console.log('enter')} onLeaveViewport={()=>console.log('leave')} options={{threshold: 1}}>
                    <FullContentComponent>
                        <div style={{background: 'linear-gradient(to bottom, red 0%, green 100%)', height: '800px'}} />
                    </FullContentComponent>
                </ViewportComponent>
            </Container>
        </ThemeProvider>
    )
};

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: '1px solid #5c5c5c',
    color: '#ffffff !important',
    height: 48,
});


export default App;
