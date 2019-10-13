import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminNavigationItems.css';

import AdminNavigationItem from './AdminNavigationItem/AdminNavigationItem';
import * as actions from './../../../../store/action/index';

class AdminNavigationItems extends Component {
    
    clickHandler = event => {
        this.props.onChangeSetting(event.target.innerText.toLowerCase());
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
                <AdminNavigationItem onClick={this.clickHandler} >Logout</AdminNavigationItem>
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
        onChangeSetting: setting => dispatch(actions.changeSettings(setting)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavigationItems);