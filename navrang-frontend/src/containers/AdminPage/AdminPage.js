import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AdminPage.css';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';
import Container from './../../components/UI/SectionContainer/Container';
import List from './List/List';

import EventCard from './../../components/Events/EventCard/Event';
import AchievementCard from './../../components/Achievements/Achievement/Achievement';
import TeamCard from './../../components/Alumni/Card/Card';
import NoticeCard from './../../components/Notices/Notice/Notice';

import * as data from './../../data/data';

class AdminPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: data[this.props.currentSetting.toUpperCase()],
            selectedData: data[this.props.currentSetting.toUpperCase()][0],
            currentPreview: null,
        }
    }


    selectedDataHandler = (index) => {
        this.setState(prevState => ({
            selectedData: prevState.data[index]
        }));

        switch (this.props.currentSetting) {
            case "events": 
                this.setState({
                    currentPreview: (<EventCard 
                        imageUrl={this.state.selectedData.imageUrl}
                        link={this.state.selectedData.link}
                        info={this.state.selectedData.info}
                        date={this.state.selectedData.date}
                    />)
                })
                break;
            case "achievements": 
                // currentPreview = <AchievementCard />;
                break;
            case "team": 
                // currentPreview = <TeamCard />;
                break;
            // case "contacts": 
            //     currentPreview = <EventCard />;
            case "notices": 
                // currentPreview = <NoticeCard />;
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

    render () {

        

        return (
            <Container>
                <div className={classes.Container}>
                    <div className={classes.LeftSection}>
                        <div className={classes.LeftSectionHeader}>
                            <Title style={{display: "inline-block"}}>{this.props.currentSetting}</Title>
                            <Button inline="true" style={{fontSize: "15px", padding: "10px"}}>+</Button>
                        </div>
                        <hr />
                        <div className={classes.List}>
                            <List data={this.state.data}
                                changeSelected={this.selectedDataHandler}
                                deleteSelected={this.deleteHandler}
                            />
                        </div>

                    </div>
                    <div className={classes.RightSection}>
                        <div className={classes.RightSectionHeader}>
                            <Title style={{display: "inline-block"}}>Preview</Title>
                            <div className={classes.Preview}>
                                {this.state.currentPreview ? this.state.currentPreview : <div>No Item To Display</div>}
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
        currentSetting: state.dashboard.setting 
    }
}

export default connect(mapStateToProps, null)(AdminPage);
