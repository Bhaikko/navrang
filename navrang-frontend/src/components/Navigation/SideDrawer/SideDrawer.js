import React from 'react';

import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if( props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")} onClick={props.closed} >
                <Logo height="11%" margin="32px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    );
}

export default sideDrawer;