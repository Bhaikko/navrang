import React from 'react';

import classes from './IconLink.css';

import InstagramIcon from './../../assets/icons/instagram.png';
import FacebookIcon from './../../assets/icons/facebook.png';
import GithubIcon from './../../assets/icons/github.svg';
import EmailIcon from './../../assets/icons/email.png';
import LocationIcon from './../../assets/icons/location.svg';
import PhoneIcon from './../../assets/icons/phone.png';
import LinkedInIcon from './../../assets/icons/linkedIn.png';

const iconLink = (props) => {

    let icon = null;
    switch (props.icon) {
        case "github":
            icon = GithubIcon;
            break;
        case "facebook":
            icon = FacebookIcon;
            break;
        case "instagram":
            icon = InstagramIcon;
            break;
        case "email":
            icon = EmailIcon;
            break;
        case "location":
            icon = LocationIcon;
            break;
        case "phone":
            icon = PhoneIcon;
            break;
        case "linkedIn":
            icon = LinkedInIcon;
            break;
        default:
            icon = InstagramIcon;
            break
    }

    return (
        <a  target="_blank" href={props.contact} rel="noopener noreferrer">
            <div className={classes.ContactContainer} style={{...props.style}}>
                <img className={classes.Contact} alt="contact" src={icon} /> 
            </div>
        </a>
    );
}

export default iconLink;