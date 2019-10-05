import React, { useEffect } from 'react';

import classes from './GroupImage.css';

import groupImagePhoto from './../../assets/images/groupImage.jpg';

const GroupImage = (props) => {

    const textWriter = () => {
        const textElement = document.getElementById("text");
        const text = textElement.innerHTML;
        textElement.innerHTML = "";
        let index = 0;
        const textInterval = setInterval(() => {
            textElement.innerHTML += text[index];
            index++;
            if(text[index] === "\\") {
                textElement.innerHTML += "<br />";
                index++;
            }
            if(index === text.length) {
                clearInterval(textInterval);
            }
        } , 250);
    }
    
    useEffect(textWriter);

    return (
        <div className={classes.GroupImageContainer} style={{backgroundImage: `url(${groupImagePhoto})`}}>
            <h1 className={classes.Typing} id="text">
                We Are Navrang,\
                The Theatre Society Of\
                PGDAV College.
            </h1>
        </div>
    );
}

export default GroupImage;