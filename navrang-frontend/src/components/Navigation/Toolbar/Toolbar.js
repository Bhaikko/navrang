import React, { Component } from 'react';

import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

class Toolbar extends Component {
// const Toolbar = (props) => {
    constructor (props) {
        super(props);
        this.state = {
            styles: {
                backgroundColor: "transparent",
                height: "56px",
                navItemsMarginTop: "5%"
            },
            bChanged: false 
        } 
    }

    toolbarScrollHandler = () => {
        let newStyle = {
            backgroundColor: "transparent",
            textColor: "black"
        }
        window.addEventListener("scroll", () => {
            const yOffset = window.pageYOffset;

            if(yOffset > 200) {
                if(!this.state.bChanged) {
                    newStyle = {
                        backgroundColor: "white",
                        height: "70px",
                        navItemsMarginTop: "7%"
                    }
                    this.setState({ styles: newStyle, bChanged: true });
                }
            } else {
                if(this.state.bChanged) {
                    newStyle = {
                        backgroundColor: "transparent",
                        height: "56px",
                        navItemsMarginTop: "5%"
                    
                    }
                    this.setState({ styles: newStyle, bChanged: false});
                }
            }
        });
    }

    componentDidMount () {
        this.toolbarScrollHandler();
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", () => {});
    }

    render () {
        return (
            <header className={classes.Toolbar} style={this.state.styles}>    
                <Logo height="80%" />
                <nav className={classes.DesktopOnly} >
                    <NavigationItems marginTop={this.state.styles.navItemsMarginTop}/>
                </nav>
    
            </header>
        );
    }
}

export default Toolbar;