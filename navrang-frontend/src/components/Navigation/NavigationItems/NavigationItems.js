import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{marginTop: props.marginTop}}>
            <NavigationItem link="/events" >Events</NavigationItem>
            <NavigationItem link="/achievements"  >Acheivements</NavigationItem>
            <NavigationItem link="/notices"  >Notices</NavigationItem>
            <NavigationItem link="/alumni"  >Alumni</NavigationItem>
            <NavigationItem samePage link="/#aboutUs"  >About Us</NavigationItem>
            <NavigationItem samePage link="/#contactUs"  >Contact Us</NavigationItem>
        </ul>

    );
}

export default navigationItems;