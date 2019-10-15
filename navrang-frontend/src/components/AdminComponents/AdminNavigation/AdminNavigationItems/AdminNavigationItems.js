import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminNavigationItems.css';

import AdminNavigationItem from './AdminNavigationItem/AdminNavigationItem';
import * as actions from './../../../../store/action/index';

class AdminNavigationItems extends Component {

    constructor (props) {
        super(props);
        this.props.onGetItem("events");
    }
    


    render () {
        return (
            <ul className={classes.NavigationItems}>
                <AdminNavigationItem onClick={() => this.props.onGetItem("events")} selected={this.props.currentSetting === "events" ? true : false } >Events</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onGetItem("achievements")} selected={this.props.currentSetting === "achievements" ? true : false } >Achievements</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onGetItem("team")} selected={this.props.currentSetting === "team" ? true : false } >Team</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onGetItem("contacts")} selected={this.props.currentSetting === "contacts" ? true : false } >Contacts</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onGetItem("notices")} selected={this.props.currentSetting === "notices" ? true : false } >Notices</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onGetItem("issues")} selected={this.props.currentSetting === "issues" ? true : false } >Issues</AdminNavigationItem>
                <AdminNavigationItem onClick={() => this.props.onLogout()} >Logout</AdminNavigationItem>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentSetting: state.dashboard.setting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetItem: setting => dispatch(actions.getItem(setting)),
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavigationItems);