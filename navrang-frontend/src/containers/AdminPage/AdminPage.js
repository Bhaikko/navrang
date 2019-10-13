import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminPage.css';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';
import Container from './../../components/UI/SectionContainer/Container';
import List from './List/List';

import EventCard from './../../components/Events/EventCard/Event';
// import AchievementCard from './../../components/Achievements/Achievement/Achievement';
// import TeamCard from './../../components/Alumni/Card/Card';
// import NoticeCard from './../../components/Notices/Notice/Notice';

import AchievementForm from './Forms/AchievementForm/AchievementForm';
import ContactForm from './Forms/ContactForm/ContactForm';
import EventForm from './Forms/EventForm/EventForm';
import NoticeForm from './Forms/NoticeForm/NoticeForm';
import TeamForm from './Forms/TeamForm/TeamForm';


class AdminPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedData: null,
            currentPreview: null,
            currentForm: null,
            bAdding: false,
        }
    }


    selectedDataHandler = (index) => {
        this.setState({
            selectedData: this.props.data[index]
        });

        switch (this.props.currentSetting) {
            case "events": 
                this.setState({
                    currentPreview: (<EventCard 
                        imageUrl={this.state.selectedData.imageUrl}
                        link={this.state.selectedData.link}
                        info={this.state.selectedData.info}
                        date={this.state.selectedData.date}
                    />),
                    currentForm: <EventForm />    
                });
                break;
            case "achievements": 
                // currentPreview = <AchievementCard />;
                this.setState({
                    // currentPreview: (<Ac 
                    //     imageUrl={this.state.selectedData.imageUrl}
                    //     link={this.state.selectedData.link}
                    //     info={this.state.selectedData.info}
                    //     date={this.state.selectedData.date}
                    // />),
                    currentForm: <AchievementForm />    
                });

                break;
            case "team": 
                this.setState({
                    // currentPreview: (<Ac 
                    //     imageUrl={this.state.selectedData.imageUrl}
                    //     link={this.state.selectedData.link}
                    //     info={this.state.selectedData.info}
                    //     date={this.state.selectedData.date}
                    // />),
                    currentForm: <TeamForm />    
                });
                // currentPreview = <TeamCard />;
                break;
            case "contacts": 
            //     currentPreview = <EventCard />;
                this.setState({
                    // currentPreview: (<Ac 
                    //     imageUrl={this.state.selectedData.imageUrl}
                    //     link={this.state.selectedData.link}
                    //     info={this.state.selectedData.info}
                    //     date={this.state.selectedData.date}
                    // />),
                    currentForm: <ContactForm />    
                });
                break;
            case "notices": 
                // currentPreview = <NoticeCard />;
                this.setState({
                    // currentPreview: (<Ac 
                    //     imageUrl={this.state.selectedData.imageUrl}
                    //     link={this.state.selectedData.link}
                    //     info={this.state.selectedData.info}
                    //     date={this.state.selectedData.date}
                    // />),
                    currentForm: <NoticeForm />    
                });
                break;

            case "issues":
                this.setState({
                    // currentPreview: (<Ac 
                    //     imageUrl={this.state.selectedData.imageUrl}
                    //     link={this.state.selectedData.link}
                    //     info={this.state.selectedData.info}
                    //     date={this.state.selectedData.date}
                    // />),
                    currentForm: null    
                });
                break;

            default:
                break;

        }
    }

    deleteHandler = (id) => {
        const currentData = this.state.data;
        const updatedData = currentData.filter(current => current.id !== id);
        if (this.state.selectedData.id === id) {
            this.setState({
                data: updatedData,
                currentPreview: null
            });
        } else {
            this.setState({
                data: updatedData,
            });
        }
    }

    newFormHandler = () => {
        this.setState(prevState => {
            return {
                bAdding: !prevState.bAdding
            }
        });
    }

    render () {
        return (
            <Container>
                <div className={classes.Container}>
                    <div className={classes.LeftSection}>
                        
                        <div className={classes.LeftSectionHeader}>
                            <Title style={{display: "inline-block"}}>{this.props.currentSetting}</Title>
                            <Button inline="true" style={{fontSize: "15px", padding: "10px"}} onClick={this.newFormHandler}>+</Button>
                        </div>
                        <hr />
                        {
                            this.state.bAdding ?
                                (
                                    <div>
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
                            <div className={classes.Preview}>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentSetting: state.dashboard.setting,
        data: state.dashboard.data 
    }
}

export default connect(mapStateToProps, null)(AdminPage);
