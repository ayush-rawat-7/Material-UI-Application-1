import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ButtonArrow from './5.1 ButtonArrow'
import { useMediaQuery } from '@material-ui/core'

import background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        },
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0
        },
    }
}))

export const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container
            className={classes.background}
            alignItems="center"
            justifyContent={matchesSM ? "center" : "space-between"}
            direction={matchesSM ? 'column' : 'row'}
        >
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software, <br />
                            Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                            Take advantage of the 21st century
                        </Typography>
                        <Grid item container justifyContent={matchesSM ? "center" : undefined} >
                            <Button variant="outlined"
                                component={Link}
                                to="/revolution"
                                onClick={() => props.setValue(2)}
                                className={classes.learnButton}>
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant="contained"
                    component={Link}
                    to="/estimate"
                    onClick={() => props.setValue(5)}
                    className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>

        </Grid>
    )
}
