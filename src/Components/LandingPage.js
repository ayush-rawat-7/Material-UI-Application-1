import React from 'react'
import Lottie from "react-lottie"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ButtonArrow from "./UI/5.1 ButtonArrow"
import { Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

import { CallToAction } from './UI/CallToAction'

import animationData from "../animations/landinganimation/data"
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import movileAppsIcon from "../assets/mobileIcon.svg"
import websitesIcon from "../assets/websiteIcon.svg"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground from "../assets/infoBackground.svg"


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: "45px",
        width: "145px",
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
        },
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        },
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
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: "0em",
            paddingRight: "0em",
            borderRadius: 0,
            width: "100%",
        },
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
}))

export const LandingPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (

        <Grid container direction="column" className={classes.mainContainer}>
            {/* ------------ HERO START------------- */}
            <Grid item>
                <Grid container justifyContent="flex-end" alignItems="center" direction="row">
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2" >
                            Bringing West Coast Technology<br />to the Midwest
                        </Typography>
                        <Grid container justifyContent="center" className={classes.buttonContainer}>
                            <Grid item >
                                <Button className={classes.estimateButton}
                                    component={Link}
                                    to="/estimate"
                                    onClick={() => props.setValue(5)}
                                    variant="contained">
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button variant="outlined"
                                    component={Link}
                                    to="/revolution"
                                    onClick={() => props.setValue(2)}
                                    className={classes.learnButtonHero}>
                                    <span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15}
                                        height={15}
                                        fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation} >
                        <Lottie options={defaultOptions}
                            height={"100%"}
                            width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* ------------ HERO END------------- */}

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

            {/* -------------iOS/ANDROID BLOCK START--------- */}
            <Grid item>
                <Grid container direction="row" justifyContent={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer} >
                    <Grid item
                        style={{ textAlign: matchesSM ? "center" : undefined }}
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
                        <img className={classes.icon} src={movileAppsIcon} alt="mobile phone icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/* -------------iOS/ANDROID BLOCK END--------- */}
            {/* -------------Websites START--------- */}
            <Grid item>
                <Grid container direction="row" justifyContent={matchesSM ? "center" : undefined} className={classes.serviceContainer} >
                    <Grid item
                        style={{ textAlign: matchesSM ? "center" : undefined, marginLeft: matchesSM ? 0 : "5em" }}
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
                    <Grid item>
                        <img className={classes.icon} src={websitesIcon} alt="Website icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/* -------------Websites END--------- */}

            {/* -------------Revolution block Start--------- */}
            <Grid item>
                <Grid container style={{ height: "100em", marginTop: "12em" }} alignItems="center" justifyContent="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: 'center' }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="subtitle1" gutterBottom>
                                        Visionary insights coupled with cutting edge technology is a recipie for revolution.
                                    </Typography>
                                    <Button variant="outlined"
                                        component={Link}
                                        to="/revolution"
                                        onClick={() => props.setValue(2)}
                                        className={classes.learnButtonHero}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15}
                                            height={15}
                                            fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            {/* -------------Revolution block End--------- */}
            {/* -------------Information block starts--------- */}
            <Grid item>
                <Grid container
                    className={classes.infoBackground}
                    direction="row" style={{ height: '80em' }} alignItems="center" >
                    <Grid item container
                        style={{ textAlign: matchesXS ? "center" : "inherit" }}
                        direction={matchesXS ? "column" : "row"}
                    >
                        <Grid item style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : '5em' }} sm>
                            <Grid container
                                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                                direction="column">
                                <Typography variant="h2" style={{ color: '#fff' }}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal.
                                </Typography>
                                <Grid item>
                                    <Button style={{ color: '#fff', borderColor: "#fff" }} variant="outlined"
                                        component={Link}
                                        to="/about"
                                        onClick={() => props.setValue(3)}
                                        className={classes.learnButton}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item
                            style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? "center" : 'right' }}
                            sm>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: '#fff' }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say Hello!
                                </Typography>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="/contact"
                                        onClick={() => props.setValue(4)}
                                        style={{
                                            color: '#fff',
                                            borderColor: "#fff"
                                        }}
                                        variant="outlined" className={classes.learnButton}
                                    >
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* -------------Information block End--------- */}
            {/* -------------call to action block starts--------- */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
            {/* -------------call to action block End--------- */}
        </Grid>
    )
}
