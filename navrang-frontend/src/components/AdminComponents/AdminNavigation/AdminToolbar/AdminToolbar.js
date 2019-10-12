import React from 'react';

import AdminNavigationItems from './../AdminNavigationItems/AdminNavigationItems';

import classes from './AdminToolbar.css';

const adminToolbar = props => {

    return (
        <header className={classes.Toolbar} >
            <nav className={classes.DesktopOnly} >
                <AdminNavigationItems />
            </nav>
        </header>
    );
}

export default adminToolbar;