import React from 'react';

import Logo from './../../assets/images/logo.png';

import classes from './Logo.css';

const logo = (props) => {
    return (
        <div 
            className={classes.Logo}
            style={{
                height: props.height,
                marginBottom: props.margin || "0px" 
            }} >
            <img src={Logo} alt="navrang" />
        </div>
    );
}

export default logo;