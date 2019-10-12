import React from 'react';

import classes from './AdminNavigationItem.css';

const adminNavigationItem = props => {
    const navigationItemClasses = [classes.AdminNavigationItem, props.selected ? classes.Selected : ""];
    return (
        <li className={navigationItemClasses.join(" ")} onClick={props.onClick} >
            <div >
                {props.children}
            </div>
        </li>
    );
}

export default adminNavigationItem;