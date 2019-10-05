import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem} >
            <a href="/" style={{color: props.color}}>
                {props.children}
            </a>
        </li>
    );
}

export default navigationItem;