import React, { Component } from 'react';

import classes from './NoticePage.css';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Notices from './../../components/Notices/Notices';
import Modal from './../../components/UI/Modal/Modal';

import { NOTICES } from './../../data/data';
import NoticeCard from './../../components/Notices/NoticeCard/NoticeCard';

class NoticePage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            NOTICES,
            modalContent: null
        }
    }

    showModal = (id) => {
        const currentNotice = NOTICES.find(notice => notice.id === id);
        const newModalContent = (
            <NoticeCard
                date={currentNotice.date}
                title={currentNotice.title}
                content={currentNotice.content}
                name={currentNotice.name}
                designation={currentNotice.designation}
                files={currentNotice.files}
            />
        )
        this.setState({
            modalContent: newModalContent 
        });
    }

    closeModal = () => {
        this.setState({
            modalContent: null
        });
    }

    render () {

        return (
            <Container className={classes.Container}>
                <Title>Notices And News</Title>
                <Notices notices={this.state.NOTICES} showModal={this.showModal} />

                <Modal show={this.state.modalContent} modalClosed={this.closeModal} >
                    {this.state.modalContent}
                </Modal>
            </Container>
        ); 
    }
}

export default NoticePage;