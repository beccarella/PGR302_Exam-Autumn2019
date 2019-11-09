import React from 'react';
import axios from 'axios';
import {Form, Col, Button} from 'react-bootstrap';

const webAPIUrl = "https://localhost:5001/newsarticles";

export default class AddPostForm extends React.Component {

    createPost() {
        axios.post(
            webAPIUrl
        )
    }

    render() {
        return(
            <Form onSubmit={this.createPost}>
                <Form.Row>
                    <Form.Group as ={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group as ={Col} controlId="formGridIngress">
                        <Form.Label>Ingress</Form.Label>
                        <Form.Control type="ingress" placeholder="Enter ingress" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as ={Col} controlId="formGridAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="Author" placeholder="Enter author name" />
                    </Form.Group>
                    <Form.Group as ={Col} controlId="formGridDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridRunningText">
                    <Form.Label>Main text</Form.Label>
                    <Form.Control placeholder="Enter article text" />
                </Form.Group>
                <Form.Group controlId="formGridCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control placeholder="Enter category" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Publish                
                </Button>
            </Form>
        )
    }
}