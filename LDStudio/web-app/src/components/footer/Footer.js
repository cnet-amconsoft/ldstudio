import React from "react";
import PropTypes from "prop-types";

import Separator from "../Separator";
import {
    Container,
    Grid,
    Link,
    Typography,
    withStyles
    } from "@material-ui/core";

const styles = theme => ({
    container: {
        marginTop: 0,
        marginBottom: 0,
    },
    root: {
        background: theme.palette.common.black,
        width: '100vw',
    },
    separator: {
        background: theme.gradients.gold2
    }
});

const Footer = props => {
    const {classes} = props;
    return (
        <footer className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item container spacing={10} className={classes.container} justify="space-around">
                        <Grid item xs={12} md lg={4} justify="center" container alignItems="center">
                            <Typography
                                color="textSecondary"
                                variant="body2"
                                component="p"
                                align="center"
                            >
                                ул. Гавриленко, 8а<br/>Днепр, Украина
                            </Typography>
                        </Grid>
                        <Grid item lg={4} justify="center" container alignItems="center">
                            <Link color="textSecondary"
                                  variant="body2"
                                  component="a"
                                  href="http://astradanceclub.com.ua/"
                                  target="_blank"
                            >
                                Проект создан при поддержке ТСК “Астра”
                            </Link>
                        </Grid>
                        <Grid item xs={12} md lg={4} justify="center" container alignItems="center" direction="column">
                            <Link
                                color="textSecondary"
                                variant="body2"
                                component="a"
                                href="tel://+380938180669"
                            >
                                +380 (93) 818-06-69
                            </Link>
                            <Link color="textSecondary"
                                  variant="body2"
                                  component="a"
                                  href="tel://+380938180669"
                            >
                                +380 (93) 818-06-69
                            </Link>
                        </Grid>
                    </Grid>

                    <Separator spacing={0.3} className={classes.separator} />

                    <Grid item justify="center" container spacing={5} className={classes.container}>
                        <Grid item>
                            <Typography color="textSecondary" variant="body2" component="p">
                                © LoveDanceStudio 2019. All rights reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Footer);