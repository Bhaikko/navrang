import React from 'react';

import classes from './Notice.css';

import Title from './../../../components/UI/Title/Title';
import Button from './../../../components/UI/Button/Button';

const Notice = props => {
    return (
        <div className={classes.Notice}>
            <div className={classes.DetailContainer} >
                <Title>{props.title}</Title>
                <div className={classes.Date} >{props.date}</div>
            </div>
            <Button onClick={() => props.showModal(props.id)}>View</Button>
        </div>
    );

}

export default Notice;