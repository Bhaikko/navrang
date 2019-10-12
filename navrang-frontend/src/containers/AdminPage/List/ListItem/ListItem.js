import React from 'react';

import classes from './ListItem.css';
import Button from './../../../../components/UI/Button/Button';

const listItem = props => {
    return (
        <div className={classes.ListItem} >
            <div className={classes.Title}>{props.title}</div>
            <Button 
                style={{fontSize: "15px", padding: "10px"}} 
                inline="true"
                onClick={props.changeSelected}
            >View</Button>
            <Button
                inline="true" 
                style={{fontSize: "15px", padding: "10px"}} 
                onClick={props.deleteSelected}    
            >Delete</Button>
        </div>
    );
}

export default listItem