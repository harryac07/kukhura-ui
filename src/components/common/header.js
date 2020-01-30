import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import imageLogo from './logo.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'

import {
    Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    mainNav: {
        backgroundColor: '#fff',
        borderTop: '3px solid red',
        borderBottom: '1px solid #c3c3c3',
        [theme.breakpoints.down('sm')]: {
            borderTop: '1px solid rgba(255, 0, 0, 0.8)',
            borderOpacity: 0.1,
            borderBottom: 'none',
        },
    },
    navigation: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        listStyle: 'none',
        padding: '20px',
        '& li': {
            marginLeft: '20px',
        },
        '& li.active > a': {
            color: 'red'
        },
        '& li a': {
            textDecoration: 'none',
            color: '#7c7c7c',
            fontSize: '18px',
            lineHeight: '31px',
            padding: '40px 18px',
            letterSpacing: '1px',
        },
        '& li:not(:first-child) > a:hover': {
            background: '#323232',
            border: '#323232',
            color: '#fff',
        },
        '& li:first-child': {
            marginRight: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: 0,
            backgroundColor: '#49515C',
            margin: 0,
            '& li:not(:first-child) > a:hover': {
                background: 'none',
                border: 'none',
            },
            '& li a': {
                textDecoration: 'none',
                color: '#fff',
                lineHeight: '31px',
                padding: '0px 0px',
                fontSize: '16px',
            }
        },
    },
    showMenuDropdown: {
        display: 'block',
    },
    hideMenuDropdown: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    },
    navigationMenuBar: {
        display: 'none',
        position: 'relative',
        top: 0,
        right: 0,
        cursor: 'pointer',
        padding: '10px 10px 5px 0px',
        textAlign: 'right',
        backgroundColor: '#49515C',
        color: '#eee',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            cursor: 'pointer',
        },
    },
    logoImage: {
        height: '80px',
        position: 'absolute',
        top: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    logoDot: {
        position: 'absolute',
        top: 25,
        left: 90,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#7c7c7c',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}));


const Header = (props) => {
    const [activeMenu, setActiveMenu] = useState('logo');
    const [mobileView, setMobileView] = useState(false);
    const classes = useStyles();

    const { pathname = "" } = props.location;

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <div>
            <div className={classes.navigationMenuBar} onClick={() => setMobileView(!mobileView)}>
                <Menu fontSize="large" ></Menu>
            </div>
            <div className={
                `${mobileView
                    ? classes.showMenuDropdown
                    : classes.hideMenuDropdown} ${classes.mainNav}`}
            >
                <ul className={classes.navigation}>
                    <li className="logo" onClick={() => setActiveMenu('home')} >
                        <Link to="/">
                            <img
                                className={classes.logoImage}
                                src={imageLogo} />
                            <span
                                className={classes.logoDot}
                            >.</span>
                        </Link>
                    </li>
                    <li onClick={() => setActiveMenu('home')}>
                        <Link
                            style={pathname === '/' ? { color: 'red' } : {}}
                            to="/">HOME</Link>
                    </li>
                    <li onClick={() => setActiveMenu('about')}>
                        <Link
                            style={pathname === '/about' ? { color: 'red' } : {}}
                            to="/about">ABOUT</Link>
                    </li>
                    <li onClick={() => setActiveMenu('products')}>
                        <Link
                            style={pathname === '/products' ? { color: 'red' } : {}}
                            to="/products">PRODUCTS</Link>
                    </li>
                    <li onClick={() => setActiveMenu('contact')}>
                        <Link
                            style={pathname === '/contact' ? { color: 'red' } : {}}
                            to="/contact">CONTACT</Link>
                    </li>
                    <li onClick={() => setActiveMenu('blog')}>
                        <Link
                            style={pathname === '/blog' ? { color: 'red' } : {}}
                            to="/blog">BLOG</Link>
                    </li>
                    {
                        username && email
                            ? <li onClick={() => setActiveMenu('admin')}>
                                <Link
                                    style={pathname === '/admin'
                                        ? { color: 'red' } : {}
                                    }
                                    to="/admin">
                                    ADMIN (<span style={{color: 'red'}}>{username}</span>)
                            </Link>
                            </li>
                            : null
                    }

                </ul>
            </div>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                style={{ background: '#f65314', color: '#fff', padding: 5 }}
            />
        </div>
    )
}
export default withRouter(Header)