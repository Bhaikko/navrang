import React, { Component } from 'react';

import Aux from './../Aux/Aux';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import AdminToolbar from './../../components/AdminComponents/AdminNavigation/AdminToolbar/AdminToolbar';
import SideDrawer from './../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            showSideDrawer: false 
        }
    } 

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false 
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    }

    render () {
        let ToolbarComponent = Toolbar;
        if(this.props.admin) {
            ToolbarComponent = AdminToolbar;
        }
        return (
            <Aux>
                <ToolbarComponent 
                    className={this.props.admin ? classes.Content : null}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />

                {this.props.admin ? 
                    null :
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}
                    />
                }
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;