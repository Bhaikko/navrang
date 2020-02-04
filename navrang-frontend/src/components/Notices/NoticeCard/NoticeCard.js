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
            {props.fileUrl ? (
                <div className={classes.Files}>
                    <a target="_blank" href={props.fileUrl} rel="noopener noreferrer" >
                        Attached Files
                    </a>
                </div>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </div>
    );
}

export default noticeCard;