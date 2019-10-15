import React from 'react';

import classes from './Notices.css';
import Notice from './Notice/Notice'

const Notices = props => {
    return (
        <div className={classes.Notices}>
            {props.notices.map(notice => <Notice 
                key={notice.id}
                title={notice.title}
                date={new Date(notice.date).toLocaleDateString()}
                showModal={props.showModal}
                id={notice.id}
            />)}
        </div>
    );

}

export default Notices;