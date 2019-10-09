import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Slick from "react-slick";
import { withStyles }   from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../SlickDots.css";

const styles = theme => ({
    title: {
        color: theme.palette.text.secondary,
    },
    body: {
        marginTop: theme.spacing(5),
        color: theme.palette.text.secondary,
    }
});

const MainCarousel = props => {
    const {classes} = props;
    const slickSettings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
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
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCarousel)
