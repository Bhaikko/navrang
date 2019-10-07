import React from 'react';

import classes from './Title.css';

const title = (props) => {
    return <h2 className={classes.Title} style={{...props.style}} >{props.children}</h2>
}

export default title;