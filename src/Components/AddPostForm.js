import React from 'react';
import axios from 'axios';
import {Form, Col, Button} from 'react-bootstrap';

const webAPIUrl = "https://localhost:5001/newsarticles";

export default class AddPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            ingress: "",
            author: "",
            date:"",
            runningText: "",
            category: ""
        }
    }

    onChange = (event) => {
        let newText = event.target.value;
        this.setState({[event.target.name]: newText});
    }

    createPost = (event) => {
        event.preventDefault();
        const { title, ingress, author, date, runningText, category } = this.state;
        axios.post(
            webAPIUrl, { title, ingress, author, date, runningText, category }
        )
    }

    render() {
        const { title, ingress, author, date, runningText, category } = this.state;
        return(
            <Form onSubmit={this.createPost}>
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
                <Button variant="primary" type="submit">
                    Publish                
                </Button>
            </Form>
        )
    }
}