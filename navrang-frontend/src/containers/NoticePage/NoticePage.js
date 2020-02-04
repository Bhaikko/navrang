import React, { Component } from 'react';

import classes from './NoticePage.css';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Notices from './../../components/Notices/Notices';
import Modal from './../../components/UI/Modal/Modal';

import NoticeCard from './../../components/Notices/NoticeCard/NoticeCard';
import Spinner from './../../components/UI/Spinner/Spinner';

import axios from './../../axios';


class NoticePage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: true,
            notices: []
        }
        
    }

    componentDidMount () {
        axios.get("/public/notices")
            .then(data => {
                this.setState({
                    loading: false,
                    notices: data.data 
                });
            })
    }

    showModal = (id) => {
        const currentNotice = this.state.notices.find(notice => notice.id === id);
        const newModalContent = (
            <NoticeCard
                date={new Date(currentNotice.date).toLocaleString()}
                title={currentNotice.title}
                content={currentNotice.content}
                name={currentNotice.name}
                designation={currentNotice.designation}
                fileUrl={currentNotice.fileUrl}
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
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <Container className={classes.Container}>
                <Title>Notices And News</Title>
                <Notices notices={this.state.notices} showModal={this.showModal} />

                <Modal show={this.state.modalContent} modalClosed={this.closeModal} >
                    {this.state.modalContent}
                </Modal>
            </Container>
        ); 
    }
}

export default NoticePage;