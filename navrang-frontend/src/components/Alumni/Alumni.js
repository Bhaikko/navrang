import React, { Component } from 'react';

import Card from './Card/Card';
import classes from './Alumni.css';

class Alumni extends Component {
    
    state = {
        animation : this.props.animate ? {} : { 
            opacity: 1,
            transform: "translateY(0)"
        }
    }

    componentDidMount () {
        if(this.props.animate) {
            this.scrollHandler();
        }
    }

    scrollHandler = () => {
        window.addEventListener("scroll", () => {
            const pageYOffset = window.pageYOffset;
            if(pageYOffset > 1200) {
                this.setState({
                    animation: {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                });
            }
        })
    }
    render () {

        return (
            <div className={classes.Alumni} style={this.state.animation}>
                {this.props.team.map(member => <Card 
                    key={member.id}
                    imageUrl={member.imageLink} 
                    name={member.name}
                    designation={member.designation}
                    contact={member.contactLink}
                    about={member.about} />) }
            </div>
        );  
    }

}

export default Alumni;