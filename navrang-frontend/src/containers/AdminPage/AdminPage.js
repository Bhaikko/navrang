import React, { Component } from 'react';
import { connect } from 'react-redux';

// import classes from './AdminPage.css';

class AdminPage extends Component {

    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         currentSettings: "achievements",
    //     }
    // }

    render () {
        console.log(this.props.currentSetting);
        return (
            <div>.</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentSetting: state.dashboard.setting 
    }
}

export default connect(mapStateToProps, null)(AdminPage);
