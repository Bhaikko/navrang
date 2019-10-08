import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/images/logo.png';

import classes from './Logo.css';

const logo = (props) => {
    return (
        <Link 
            to="/"
            className={classes.Logo}
            style={{
                height: props.height,
                marginBottom: props.margin || "0px" 
            }} >
            <img src={Logo} alt="navrang" />
        </Link>
    );
}

export default logo;