import React from 'react';

import classes from './LandingPageContainer.css';

const container = (props) => {

    const classesArray = [classes.Container, props.className];

    return (
        <div className={classesArray.join(" ")} style={{...props.style}} >
            {props.children}
        </div>
    );
}

export default container;