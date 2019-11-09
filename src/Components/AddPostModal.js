import React from 'react';
import Modal from 'react-bootstrap/Modal';

import AddPostForm from './AddPostForm';

export default class AddPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }

    handleShow() {
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }

    render() {
        return(
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddPostForm/>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}