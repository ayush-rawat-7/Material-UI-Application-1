import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'

import ButtonArrow from './UI/5.1 ButtonArrow'
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from "../assets/mobileIcon.svg"
import websitesIcon from "../assets/websiteIcon.svg"


const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        },
    },
}))


export const Services = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Grid container direction="column">
            <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? "1em" : '2em' }}>
                <Typography align={matchesSM ? "center" : undefined}
                    gutterBottom variant="h2"
                >
                    Services
                </Typography>
            </Grid>
            {/* -------------iOS/ANDROID BLOCK START--------- */}
            <Grid item>
                <Grid container direction="row"
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{ marginTop: matchesSM ? "1em" : "5em" }}
                >
                    <Grid item
                        style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}
                    >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />}with either mobile platf
                        </Typography>
                        <Button variant="outlined"
                            component={Link}
                            to="/mobileapps"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}
                            className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }} >
                        <img width="250em" className={classes.icon} src={mobileAppsIcon} alt="mobile phone icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/* -------------iOS/ANDROID BLOCK END--------- */}
            {/* -------------Custome SOFTWARE START--------- */}
            <Grid item>
                <Grid container direction="row" justifyContent={matchesSM ? "center" : undefined} className={classes.serviceContainer} >
                    <Grid item
                        style={{ textAlign: matchesSM ? "center" : undefined, marginLeft: matchesSM ? 0 : "5em" }}
                    >
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText} >celebration.</span>
                        </Typography>
                        <Button variant="outlined"
                            component={Link}
                            to="/customsoftware"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(1); }}

                            className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="Custom software icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/* -------------CUSTOM SOFTWARE END--------- */}

            {/* -------------Websites START--------- */}
            <Grid item>
                <Grid container direction="row"
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{ marginBottom: "10em" }}
                >
                    <Grid item
                        style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}
                    >
                        <Typography variant="h4">
                            Website Development 
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach Mote. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant="outlined"
                            component={Link}
                            to="/websites"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}
                            className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img width="250em" className={classes.icon} src={websitesIcon} alt="Website icon" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
