import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{marginTop: props.marginTop}}>
            <NavigationItem link="/" color={props.color}>Events</NavigationItem>
            <NavigationItem link="/" color={props.color} >Acheivements</NavigationItem>
            <NavigationItem link="/" color={props.color} >Notices</NavigationItem>
            <NavigationItem link="/" color={props.color} >Alumni</NavigationItem>
            <NavigationItem link="/" color={props.color} >About Us</NavigationItem>
            <NavigationItem link="/" color={props.color} >Contact Us</NavigationItem>
        </ul>

    );
}

export default navigationItems;