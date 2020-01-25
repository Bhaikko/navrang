import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminPage.css';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';
import Container from './../../components/UI/SectionContainer/Container';
import List from './List/List';
import Spinner from './../../components/UI/Spinner/Spinner';

import EventCard from './../../components/Events/EventCard/Event';
import AchievementCard from './../../components/Achievements/Achievement/Achievement';
import TeamCard from './../../components/Alumni/Card/Card';
import NoticeCard from './../../components/Notices/NoticeCard/NoticeCard';
import ContactCard from './../../components/ContactCard/ContactCard';
import IssueCard from './../../components/Issue/Issue';

import Modal from './../../components/UI/Modal/Modal';

import * as actions from './../../store/action/index';

class AdminPage extends Component {

    selectedDataHandler = (index) => {
        let currentPreview;
        switch (this.props.currentSetting) {
            case "events": 
                
                currentPreview =  (<EventCard 
                    imageUrl={this.props.data[index].imageUrl}
                    link={this.props.data[index].registrationLink}
                    info={this.props.data[index].info}
                    date={new Date(this.props.data[index].lastDate).toDateString()}
                />);
                this.props.onChangePreview(currentPreview);
                break;
            case "achievements": 

                currentPreview = (<AchievementCard 
                    imageUrl={this.props.data[index].imageUrl}
                    title={this.props.data[index].title}
                    subtitle={this.props.data[index].subtitle}
                    date={new Date(this.props.data[index].date).toDateString()}
                    description={this.props.data[index].content}
                />);
                this.props.onChangePreview(currentPreview);
                break;
            case "team": 
                currentPreview = (<TeamCard 
                    imageUrl={this.props.data[index].imageUrl}
                    about={this.props.data[index].about}
                    name={this.props.data[index].name}
                    designation={this.props.data[index].designation}
                    contact={this.props.data[index].contactLink}
                />);
                this.props.onChangePreview(currentPreview);   
                break;
            case "contacts": 
                currentPreview = (<ContactCard 
                    name={this.props.data[index].name}
                    email={this.props.data[index].email}
                    phone={this.props.data[index].phone}
                />);
                this.props.onChangePreview(currentPreview); 
                
                break;
            case "notices":         
                currentPreview = (<NoticeCard 
                    title={this.props.data[index].title}
                    date={new Date(this.props.data[index].date).toDateString()}
                    content={this.props.data[index].content}
                    name={this.props.data[index].name}
                    designation={this.props.data[index].designation}
                    files={this.props.data[index].fileUrl}
                />);
                this.props.onChangePreview(currentPreview);   
            
                break;

            case "issues":
                
                currentPreview = (<IssueCard
                    content={this.props.data[index].content}
                    name={this.props.data[index].senderName}
                    email={this.props.data[index].senderEmail}
                    date={new Date(this.props.data[index].lastDate).toDateString()}
                />);
                this.props.onChangePreview(currentPreview);
                
                break;

            default:
                break;

        }
    }

    newFormHandler = () => {
        this.props.onToggleForm(this.props.bAdding);
    }

    backDropClickHandler = () => {
        this.props.onGetItem(this.props.currentSetting);
        this.props.onClearForm();
    }

    render () {
        let content = <Spinner />

        if (!this.props.loading) {
            content = (
                <div className={classes.Container}>
                    {this.props.formMessage ? <Modal modalClosed={this.backDropClickHandler} show>{this.props.formMessage}</Modal> : null}
                    {this.props.formError ? <Modal modalClosed={this.backDropClickHandler} show>{this.props.formError}</Modal> : null}
                    <div className={classes.LeftSection}>
                        
                        <div className={classes.LeftSectionHeader}>
                            <Title style={{display: "inline-block"}}>{this.props.currentSetting}</Title>
                            <Button inline="true" style={{fontSize: "15px", padding: "10px"}} onClick={this.newFormHandler} disabled={this.props.currentSetting === "issues" ? true : false}>+</Button>
                        </div>
                        <hr />
                        {this.props.bAdding ? (
                            <div className={classes.Form}>
                                {this.props.formLoading ? <Spinner /> : this.props.currentForm}
                            </div>
                        ) : (
                            <div className={classes.List}>
                                <List 
                                    data={this.props.data}
                                    changeSelected={this.selectedDataHandler}
                                    deleteSelected={this.props.onDeletePreview}
                                    setting={this.props.currentSetting}
                                />
                            </div>
                        )}

                    </div>
                    <div className={classes.RightSection}>
                        <div className={classes.RightSectionHeader}>
                            <Title style={{display: "inline-block"}}>Preview</Title>
                            <hr />
                            <div className={classes.Preview}>
                                {this.props.currentPreview ? (
                                    <div>
                                        {this.props.currentPreview}
                                    </div>
                                ) : (
                                   <div>Please Select An Item To Preview</div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            );

        }
        return (
            <Container>
                {content}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        // dashboard state
        currentSetting: state.dashboard.setting,
        data: state.dashboard.data,
        loading: state.dashboard.loading,
        bAdding: state.dashboard.bAdding,
        currentPreview: state.dashboard.currentPreview,
        currentForm: state.dashboard.currentForm,
        // form state
        formLoading: state.form.loading,
        formError: state.form.error,
        formMessage: state.form.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleForm: (currentFormState) => dispatch(actions.toggleForm(currentFormState)),
        onChangePreview: (currentPreview) => dispatch(actions.changePreview(currentPreview)),
        onDeletePreview: (id, setting, imagePublicId) => dispatch(actions.deleteItem(id, setting, imagePublicId)),
        onGetItem: (setting) => dispatch(actions.getItem(setting)),
        onClearForm: () => dispatch(actions.clearForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
