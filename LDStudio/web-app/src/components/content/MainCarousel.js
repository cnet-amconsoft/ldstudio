import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Slick from "react-slick";
import { withStyles, useTheme }   from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../SlickDots.css";

const styles = theme => ({
    title: {
        color: theme.palette.text.secondary,
    },
    body: {
        color: theme.palette.text.secondary,
    },
    slickDots: {
        position: 'relative',
        bottom: 'unset',
    }
});

const slickSettings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const MainCarousel = props => {
    const {classes} = props;
    const slickSettings = {
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <Grid container >
            <Grid item xs={12} md={8} lg={4}>
                <Slick {...slickSettings} >
                    <div>
                        <Typography className={classes.title} variant={"h4"}>ТАНЕЦ...</Typography>
                        <Typography className={classes.body} variant={"body1"}>
                            Таким образом, курс на социально-ориентированный национальный проект обеспечивает широкому кругу
                            специалистов участие в формировании направлений прогрессивного развития...
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.title} variant={"h4"}>ТАНЕЦ...</Typography>
                        <Typography className={classes.body} variant={"body1"}>
                            Таким образом, курс на социально-ориентированный национальный проект обеспечивает широкому кругу
                            специалистов участие в формировании направлений прогрессивного развития. Значимость этих проблем
                            настолько очевидна, что сложившаяся структура организации позволяет выполнить важнейшие задания
                            по разработке позиций, занимаемых участниками в отношении поставленных задач...
                        </Typography>
                    </div>
                </Slick>
            </Grid>
        </Grid>
    )
};

MainCarousel.propTypes = {

};

export default withStyles(styles)(MainCarousel)
