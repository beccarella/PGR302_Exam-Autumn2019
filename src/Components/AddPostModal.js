import React from 'react';
import axios from 'axios';
import {Modal, Form, Col, Button} from 'react-bootstrap';

const webAPIUrl = "https://localhost:5001/newsarticles";

export default class AddPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            img: null,
            title: "",
            ingress: "",
            author: "",
            date:"",
            runningText: "",
            category: ""
        }
    }

    uploadImage (event) {
        event.preventDefault();
        let file = document.getElementById("upload-file");
        let data = new FormData();

        data.append("file", file.files[0]);
        console.log(data);

        let imgUrl = data.get('file');
        this.state.img = imgUrl.name;

        axios({
            method: 'post',
            url: 'https://localhost:5001/newsarticles/savePicture',
            data: data,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        return imgUrl.name;
    }


    handleShow()  {
        this.setState({ show: true })
    }

    handleClose(){
        this.setState({ show: false })
    }

    onChange = (event) => {
        let newText = event.target.value;
        this.setState({[event.target.name]: newText});
    }

    createPost = (event) => {
        let selectedImg = this.uploadImage(event);
        event.preventDefault();
        let article = {
            img: selectedImg,
            title: this.state.title,
            ingress: this.state.ingress,
            author: this.state.author,
            date: this.state.date,
            runningText: this.state.runningText,
            category: this.state.category
        }
        axios.post(webAPIUrl, article);
    }

/*     createPost = (event) => {
        event.preventDefault();
        const { title, ingress, author, date, runningText, category } = this.state;
        axios.post(
            webAPIUrl, { title, ingress, author, date, runningText, category }
        )
    } */

    render() {
        const { title, ingress, author, date, runningText, category } = this.state;
        return(
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.createPost}>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" name="img" id ="upload-file"/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as ={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="title" value={title} placeholder="Enter title" onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as ={Col} controlId="formGridIngress">
                                    <Form.Label>Ingress</Form.Label>
                                    <Form.Control type="text" name="ingress" value={ingress} placeholder="Enter ingress" onChange={this.onChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as ={Col} controlId="formGridAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="author" value={author} placeholder="Enter author name" onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as ={Col} controlId="formGridDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" name="date" value={date} placeholder="Enter date" onChange={this.onChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridRunningText">
                                <Form.Label>Main text</Form.Label>
                                <Form.Control type="text" name="runningText" value={runningText} placeholder="Enter article text" onChange={this.onChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" name="category" value={category} placeholder="Enter category" onChange={this.onChange}/>
                            </Form.Group>
                            <Button variant= "primary" type="submit" onClick={this.handleClose}>Save and close</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}