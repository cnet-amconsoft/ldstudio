import React                from "react";
import {Container}          from "@material-ui/core";

import Background           from "../containers/BackgroundContainer";
import FullScreenComponent  from "./FullScreenComponent";
import Header               from "./header";
import MainCarousel         from "./MainCarousel";
import TopBanner            from "./TopBanner";
import ViewportComponent    from "./ViewportComponent";
import {ThemeProvider}      from "@material-ui/styles";

import theme                from "../extensions/appTheme";
import {backgroundRefresh}  from "containers/BackgroundContainer"
import FullContentComponent from "./FullContentComponent";
import Separator from "./Separator";
import CategorySection from "./CategorySection";
import CategoryCard from "./CategoryCard";

export const App = props => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <Header/>
            <Container maxWidth={'lg'} style={{position: 'relative'}}>
                <ViewportComponent
                    onEnterViewport={()=>backgroundRefresh("bcg--0")}
                    options={{threshold: 0.85}}
                >
                    <FullScreenComponent>
                        <TopBanner/>
                    </FullScreenComponent>
                </ViewportComponent>
                <ViewportComponent
                    onEnterViewport={()=>backgroundRefresh("bcg--1")}
                    options={{threshold: 0.2}}
                >
                    <FullScreenComponent>
                        <Separator spacing={30}/>
                        <MainCarousel/>
                    </FullScreenComponent>
                </ViewportComponent>
                <FullContentComponent>
                    <CategorySection name={"светская жизнь"}>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                    </CategorySection>
                </FullContentComponent>
            </Container>
        </ThemeProvider>
    )
};

export default App;
