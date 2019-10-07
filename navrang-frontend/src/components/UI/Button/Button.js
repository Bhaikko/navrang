import React from 'react';

import classes from './Button.css';

const button = props => {
    return (
        <button 
            disabled={props.disabled}
            {...props} 
            className={classes.Button} 
            style={{...props.style}}
        >{props.children}</button>
    );
}

export default button;