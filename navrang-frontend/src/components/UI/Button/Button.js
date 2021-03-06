import React from 'react';

import classes from './Button.css';

const button = props => {
    return (
        <div className={props.inline ?  classes.ButtonContainerInline : classes.ButtonContainer } >
            <button 
                disabled={props.disabled}
                {...props} 
                className={classes.Button} 
                style={{...props.style}}
            >{props.children}</button>

        </div>
    );
}

export default button;