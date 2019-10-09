import React, { Component } from 'react';

import classes from './NoticePage.css';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Notices from './../../components/Notices/Notices';
import Modal from './../../components/UI/Modal/Modal';

import { NOTICES } from './../../data/data';

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
            <div>
                <Title>Notice</Title>
                <div className={classes.Date}>{currentNotice.date}</div>
                <Title>{currentNotice.title}</Title>
                <div className={classes.Content}>{currentNotice.content}</div>
                <div className={classes.Name}>{currentNotice.name},</div>
                <div className={classes.Designation}>{currentNotice.designation}</div>
                <hr />
                <div className={classes.Files}>
                    <a  target="_blank" href={currentNotice.files} rel="noopener noreferrer" >
                        Attached Files
                    </a>
                </div>
            </div>
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