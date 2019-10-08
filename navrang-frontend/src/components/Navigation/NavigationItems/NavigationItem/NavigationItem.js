import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {

    if (props.samePage) {
        return (
            <li className={classes.NavigationItem} >
                <a 
                    href={props.link} >
                    {props.children}
                </a>
            </li>
        );
    }

    return (
        <li className={classes.NavigationItem} >
            <NavLink 
                exact
                to={props.link} >
                {props.children}
            </NavLink>
        </li>
    );
}

export default navigationItem;