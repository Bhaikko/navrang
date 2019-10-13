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

import AchievementForm from './Forms/AchievementForm/AchievementForm';
import ContactForm from './Forms/ContactForm/ContactForm';
import EventForm from './Forms/EventForm/EventForm';
import NoticeForm from './Forms/NoticeForm/NoticeForm';
import TeamForm from './Forms/TeamForm/TeamForm';


class AdminPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            bAdding: false,
            currentPreview: null,
            currentForm: null,
        }
    }

    resetHandler = () => {
        this.setState({
            bAdding: false,
            currentPreview: null,
            currentForm: false 
        });
    }

    selectedDataHandler = (index) => {
        console.log(this.props.data[index]);
        switch (this.props.currentSetting) {
            case "events": 
                this.setState({
                    currentPreview: (<EventCard 
                        imageUrl={this.props.data[index].imageLink}
                        link={this.props.data[index].registrationLink}
                        info={this.props.data[index].info}
                        date={this.props.data[index].lastDate.toString()}
                    />), 
                });
                break;
            case "achievements": 
                this.setState({
                    currentPreview: (<AchievementCard 
                        imageUrl={this.props.data[index].imageUrl}
                        title={this.props.data[index].link}
                        subtitle={this.props.data[index].subtitle}
                        date={this.props.data[index].date}
                        description={this.props.data[index].content}
                    />),
                });

                break;
            case "team": 
                this.setState({
                    currentPreview: (<TeamCard 
                        imageUrl={this.props.data[index].imageLink}
                        about={this.props.data[index].about}
                        name={this.props.data[index].name}
                        designation={this.props.data[index].designation}
                        contact={this.props.data[index].contactLink}
                    />),   
                });
                break;
            case "contacts": 
                this.setState({
                    currentPreview: (<ContactCard 
                        name={this.props.data[index].name}
                        email={this.props.data[index].email}
                        phone={this.props.data[index].phone}
                    />),   
                });
                break;
            case "notices": 
                this.setState({
                    currentPreview: (<NoticeCard 
                        title={this.props.data[index].title}
                        date={this.props.data[index].date}
                        content={this.props.data[index].content}
                        name={this.props.data[index].name}
                        designation={this.props.data[index].designation}
                        files={this.props.data[index].fileLink}
                    />),   
                });
                break;

            case "issues":
                this.setState({
                    currentPreview: (<IssueCard
                        content={this.props.data[index].content}
                        name={this.props.data[index].senderName}
                        email={this.props.data[index].senderEmail}
                        date={this.props.data[index].date}
                    />),   
                });
                break;

            default:
                this.setState({
                    currentPreview: null 
                });
                break;

        }
    }

    deleteHandler = (id) => {
        // const currentData = this.state.data;
        // const updatedData = currentData.filter(current => current.id !== id);
        // if (this.state.selectedData.id === id) {
        //     this.setState({
        //         data: updatedData,
        //         currentPreview: null
        //     });
        // } else {
        //     this.setState({
        //         data: updatedData,
        //     });
        // }
    }

    newFormHandler = () => {
        switch (this.props.currentSetting) {
            case "events": 
                this.setState({
                    currentForm: <EventForm />    
                });
                break;
            case "achievements": 
                this.setState({
                    currentForm: <AchievementForm />    
                });

                break;
            case "team": 
                this.setState({
                    currentForm: <TeamForm />    
                });
                break;
            case "contacts": 
                this.setState({
                    currentForm: <ContactForm />    
                });
                break;
            case "notices": 
                this.setState({
                    currentForm: <NoticeForm />    
                });
                break;

            case "issues":
                this.setState({
                    currentForm: null    
                });
                break;

            default:
                this.setState({
                    currentForm: null 
                });
                break;

        }
        this.setState(prevState => {
            return {
                bAdding: !prevState.bAdding
            }
        });
    }

    render () {
        let content = <Spinner />
        if (!this.props.loading) {
            content = (
                <div className={classes.Container}>
                    <div className={classes.LeftSection}>
                        
                        <div className={classes.LeftSectionHeader}>
                            <Title style={{display: "inline-block"}}>{this.props.currentSetting}</Title>
                            <Button inline="true" style={{fontSize: "15px", padding: "10px"}} onClick={this.newFormHandler} disabled={this.props.currentSetting === "issues" ? true : false}>+</Button>
                        </div>
                        <hr />
                        {
                            this.state.bAdding ?
                                (
                                    <div className={classes.Form}>
                                        {this.state.currentForm}
                                    </div>
                                ) : (
                                    <div className={classes.List}>
                                        <List data={this.props.data}
                                            changeSelected={this.selectedDataHandler}
                                            deleteSelected={this.deleteHandler}
                                        />
                                    </div>
                                ) 
                            
                        }

                    </div>
                    <div className={classes.RightSection}>
                        <div className={classes.RightSectionHeader}>
                            <Title style={{display: "inline-block"}}>Preview</Title>
                            <hr />
                            <div className={classes.Preview}>
                                {this.state.currentPreview ? 
                                    (
                                        <div>
                                            {this.state.currentPreview}
                                        </div>
                                    ) :
                                    (
                                        <div>Please Select An Item To Preview</div>
                                    )
                                }
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
        currentSetting: state.dashboard.setting,
        data: state.dashboard.data,
        loading: state.dashboard.loading,
        error: state.dashboard.error 
    }
}

export default connect(mapStateToProps, null)(AdminPage);
