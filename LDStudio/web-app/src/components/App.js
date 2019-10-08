import React                from "react";
import {Container}          from "@material-ui/core";

import Background           from "../containers/BackgroundContainer";
import FullScreenContainer  from "./FullScreenComponent";
import Header               from "./header";
import MainCarousel         from "./content/MainCarousel";
import TopBanner            from "./content/TopBanner";
import ViewportComponent    from "./ViewportComponent";
import {ThemeProvider}      from "@material-ui/styles";

import theme                from "../extensions/appTheme";
import {backgroundRefresh}  from "containers/BackgroundContainer"
import FullContentComponent from "./FullContentComponent";

export const App = props => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <Header/>
            <Container maxWidth={'lg'} style={{position: 'relative'}}>
                <FullScreenContainer>
                    <TopBanner/>
                </FullScreenContainer>
                <ViewportComponent onEnterViewport={()=>backgroundRefresh("bcg--1")} onLeaveViewport={()=>backgroundRefresh("bcg--0")} options={{threshold: 0.2}}>
                    <FullContentComponent>
                        <MainCarousel/>
                    </FullContentComponent>
                </ViewportComponent>
            </Container>
        </ThemeProvider>
    )
};

export default App;
