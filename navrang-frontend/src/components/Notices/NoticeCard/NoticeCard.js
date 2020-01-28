import React from 'react';

import classes from './NoticeCard.css';
import Title from './../../UI/Title/Title';

const noticeCard = props => {
    return (
        <div className={classes.NoticeCard}>
            <Title>Notice</Title>
            <div className={classes.Date}>{props.date}</div>
            <Title>{props.title}</Title>
            <div className={classes.Content}>{props.content}</div>
            <div className={classes.Name}>{props.name},</div>
            <div className={classes.Designation}>{props.designation}</div>
            <hr />
            <div className={classes.Files}>
                <a  target="_blank" href={props.files} rel="noopener noreferrer" >
                    Attached Files
                </a>
            </div>
        </div>
    );
}

export default noticeCard;