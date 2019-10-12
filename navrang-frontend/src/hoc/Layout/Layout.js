import React, { Component } from 'react';

import Aux from './../Aux/Aux';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import AdminToolbar from './../../components/AdminComponents/AdminNavigation/AdminToolbar/AdminToolbar';

import classes from './Layout.css';

class Layout extends Component {
    
    // constructor (props) {
    //     super(props);

    // } 

    render () {
        let ToolbarComponent = Toolbar;
        if(this.props.admin) {
            ToolbarComponent = AdminToolbar;
        }
        return (
            <Aux>
                <ToolbarComponent className={this.props.admin ? classes.Content : null} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;