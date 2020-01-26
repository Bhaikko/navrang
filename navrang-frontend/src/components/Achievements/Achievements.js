import React, { Component } from 'react';

import classes from './Achievements.css';
import Achievement from './Achievement/Achievement';

class Achievements extends Component {

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
            if(pageYOffset > 50) {
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
            <div className={classes.Achievements} style={this.state.animation}>
                {this.props.achievements.map(achievement => <Achievement 
                    key={achievement.id} 
                    imageUrl={achievement.imageUrl} 
                    title={achievement.title} 
                    description={achievement.content} 
                    subtitle={achievement.subtitle} 
                    date={new Date(achievement.date).toDateString()}
                />)}
            </div>
        );    
    }
}

export default Achievements;