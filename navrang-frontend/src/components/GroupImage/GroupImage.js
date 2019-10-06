import React, { useEffect } from 'react';

import classes from './GroupImage.css';

import groupImagePhoto from './../../assets/images/groupImage.jpeg';

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

    const parallax = () => {
        window.addEventListener("scroll", () => {
            const parallax = document.getElementById("parallax");
            let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = `${1 * offset * 0.3}px`;

        });
    }
    
    useEffect(textWriter);
    useEffect(parallax);

    return (
        <div className={classes.GroupImageContainer} style={{backgroundImage: `url(${groupImagePhoto})`}} id="parallax" >
            <h1 className={classes.Typing} id="text">
                We Are Navrang,\
                The Theatre Society Of\
                PGDAV College.
            </h1>
        </div>
    );
}

export default GroupImage;