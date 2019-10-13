import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminNavigationItems.css';

import AdminNavigationItem from './AdminNavigationItem/AdminNavigationItem';
import * as dashboardActions from './../../../../store/action/index';

class AdminNavigationItems extends Component {

    constructor (props) {
        super(props);
        this.props.onGetEvents();
    }
    
    clickHandler = event => {
        const currentSetting = event.target.innerText;
        // this.props.onChangeSetting(event.target.innerText.toLowerCase());

        switch (currentSetting) {
            case "Achievements":
                this.props.onGetAchievements();
                break;
            case "Events":
                this.props.onGetEvents();
                break;
            case "Contacts":
                this.props.onGetContacts();
                break;
            case "Team":
                this.props.onGetTeam();
                break;
            case "Notices":
                this.props.onGetNotices();
                break;
            case "Issues":
                this.props.onGetIssues();
                break;
            default: 
                break;
        }
    }

    render () {
        return (
            <ul className={classes.NavigationItems}>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "events" ? true : false } >Events</AdminNavigationItem>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "achievements" ? true : false } >Achievements</AdminNavigationItem>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "team" ? true : false } >Team</AdminNavigationItem>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "contacts" ? true : false } >Contacts</AdminNavigationItem>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "notices" ? true : false } >Notices</AdminNavigationItem>
                <AdminNavigationItem onClick={this.clickHandler} selected={this.props.currentSetting === "issues" ? true : false } >Issues</AdminNavigationItem>
                <AdminNavigationItem  >Logout</AdminNavigationItem>
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
        onGetAchievements: () => dispatch(dashboardActions.getAchievements()),
        onGetContacts: () => dispatch(dashboardActions.getContacts()),
        onGetEvents: () => dispatch(dashboardActions.getEvents()),
        onGetIssues: () => dispatch(dashboardActions.getIssues()),
        onGetNotices: () => dispatch(dashboardActions.getNotices()),
        onGetTeam: () => dispatch(dashboardActions.getTeam()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavigationItems);