import React from 'react';

import classes from './ContactDetail.css';

import Title from '../UI/Title/Title';
import IconLink from './../IconLink/IconLink';

const contactDetail = props => {
    return (
        <div className={classes.ContactDetailContainer}>
            <table>
                <tbody>
                    <tr>
                        <td style={{width: "25%"}}> 
                            <IconLink 
                                contact={props.contact}
                                icon={props.icon}
                            />
                        </td>
                        <td style={{width: "50%"}}>
                            <Title 
                                style={{display: "inline-block", fontSize: 15, verticalAlign: "center"}}
                                >{props.title}:</Title>
                            <div className={props.detail} >{props.children}</div>
                        </td>
                    </tr>

                </tbody>
            </table>
            
        </div>
    );
}

export default contactDetail;