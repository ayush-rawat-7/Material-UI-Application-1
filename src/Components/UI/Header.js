import React from 'react'
import { AppBar, IconButton } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { useScrollTrigger } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function ElevationScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    })
}
// const tabColor = {
//     fontFamily: 'Railway',
//     textTransform: 'none',
//     fontWeight: '700',
//     fontSize: '1rem',
//     color: 'white'
// }

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '7em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em'
        }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px'
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: '#fff',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: '#fff',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        },
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
    }
}))

const Header = props => {
    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const [value, setValue] = React.useState(0)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [openMenu, setOpenMenu] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [openDrawer, setOpenDrawer] = React.useState(false)

    const handleChange = (event, newValue) => {
        // event.preventDefault();
        setValue(newValue)
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, index) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(index)
    }

    const handleClose = event => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOptions = [
        {
            name: 'Services',
            path: '/services',
            activeIndex: 1,
            selectedIndex: 0
        },
        {
            name: 'Custom Software Development',
            path: '/customsoftware',
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: 'Mobile App Development',
            path: '/mobileapps',
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: 'Website Development',
            path: '/websites',
            activeIndex: 1,
            selectedIndex: 3
        }
    ]

    const routes = [
        {
            name: 'Home',
            link: '/',
            activeIndex: 0
        },
        {
            name: 'Services',
            link: '/services',
            activeIndex: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaPopup: anchorEl ? true : undefined,
            mousOver: e => handleClick(e)
        },
        {
            name: 'The Revolution',
            activeIndex: 2,
            link: '/revolution'
        },
        {
            name: 'About Us',
            link: '/about',
            activeIndex: 3
        },
        {
            name: 'Contact Us',
            link: '/contact',
            activeIndex: 4
        }
    ]

    React.useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break
                default:
                    break
            }
        })
    }, [value, menuOptions, selectedIndex, routes])

    const tabs = (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor='primary'
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mousOver}
                    />
                ))}

                {/* <Tab className={classes.tab} label='Home' component={Link} to='/' />
                <Tab
                    className={classes.tab}
                    label='Services'
                    area-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup={anchorEl ? true : undefined}
                    component={Link}
                    onMouseOver={e => handleClick(e)}
                    to='/services'
                />
                <Tab
                    className={classes.tab}
                    label='The Revolution'
                    component={Link}
                    to='/revolution'
                />
                <Tab
                    className={classes.tab}
                    label='About Us'
                    component={Link}
                    to='about'
                />
                <Tab
                    className={classes.tab}
                    label='Contact Us'
                    component={Link}
                    to='contact'
                /> */}
            </Tabs>
            <Button variant='contained' color='secondary' className={classes.button}>
                Free Estimate
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                    onMouseLeave: handleClose
                }}
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted
            >
                {menuOptions.map((option, index) => {
                    return (
                        <MenuItem
                            key={`${option}${index}`}
                            onClick={e => {
                                handleMenuItemClick(e, index)
                                setValue(1)
                            }}
                            selected={index === selectedIndex && value === 1}
                            component={Link}
                            to={option.path}
                            classes={{ root: classes.menuItem }}
                        >
                            {option.name}
                        </MenuItem>
                    )
                })}
            </Menu>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin}></div>
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpenDrawer(false)
                                setValue(route.activeIndex)
                            }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    {/* <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(0)
                        }}
                        divider
                        button
                        component={Link}
                        to='/'
                        selected={value === 0}
                    >
                        <ListItemText
                            className={
                                value === 0
                                    ? [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(1)
                        }}
                        divider
                        button
                        component={Link}
                        to='/services'
                        selected={value === 1}
                    >
                        <ListItemText
                            className={
                                value === 1
                                    ? [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            Services
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(2)
                        }}
                        divider
                        button
                        component={Link}
                        to='/revolution'
                        selected={value === 2}
                    >
                        <ListItemText
                            className={
                                value === 2
                                    ? [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            Revolution
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(3)
                        }}
                        divider
                        button
                        component={Link}
                        to='/about'
                        selected={value === 3}
                    >
                        <ListItemText
                            className={
                                value === 3
                                    ? [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            About Us
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(4)
                        }}
                        divider
                        button
                        component={Link}
                        to='/contact'
                        selected={value === 4}
                    >
                        <ListItemText
                            className={
                                value === 4
                                    ? [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            Contact Us
                        </ListItemText>
                    </ListItem> */}
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(5)
                        }}
                        divider
                        button
                        component={Link}
                        to='/estimate'
                        classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
                        selected={value === 5}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    return (
        <>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to='/'
                            disableRipple
                            onClick={() => setValue(0)}
                            className={classes.logoContainer}
                        >
                            <img src={logo} alt='company-logo' className={classes.logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    )
}

export default Header
