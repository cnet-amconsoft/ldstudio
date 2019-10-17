import React, {Fragment} from "react";
import {Container}          from "@material-ui/core";

import Background, {backgroundRefresh} from "../containers/BackgroundContainer";
import FullScreenComponent  from "./FullScreenComponent";
import Header               from "./header";
import MainCarousel         from "./MainCarousel";
import TopBanner            from "./TopBanner";
import ViewportComponent    from "./ViewportComponent";
import {ThemeProvider}      from "@material-ui/styles";

import theme                from "../extensions/appTheme";
import FullContentComponent from "./FullContentComponent";
import Separator from "./Separator";
import CategorySection from "./category/CategorySection";
import CategoryCard from "./category/CategoryCard";
import Footer from "./footer/Footer";

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
                    options={{threshold: 0.1}}
                >
                    <FullScreenComponent>
                            <Fragment>
                                <Separator spacing={30}/>
                                <MainCarousel/>
                            </Fragment>
                    </FullScreenComponent>
                    <FullContentComponent>
                        <CategorySection name={"светская жизнь"}>
                            <CategoryCard image="/media/1B9A1004-17.png"/>
                            <CategoryCard image="/media/1B9A1197-2!.png"/>
                            <CategoryCard image="/media/1B9A1290-177.png"/>
                        </CategorySection>
                        <Separator spacing={30}/>
                    </FullContentComponent>
                    <FullContentComponent>
                        <CategorySection name={"светская жизнь"}>
                            <CategoryCard image="/media/1B9A1004-17.png"/>
                            <CategoryCard image="/media/1B9A1197-2!.png"/>
                            <CategoryCard image="/media/1B9A1290-177.png"/>
                        </CategorySection>
                        <Separator spacing={30}/>
                    </FullContentComponent>
                    <FullContentComponent>
                        <CategorySection name={"светская жизнь"}>
                            <CategoryCard image="/media/1B9A1004-17.png"/>
                            <CategoryCard image="/media/1B9A1197-2!.png"/>
                            <CategoryCard image="/media/1B9A1290-177.png"/>
                        </CategorySection>
                        <Separator spacing={30}/>
                    </FullContentComponent>
                </ViewportComponent>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
};

export default App;
