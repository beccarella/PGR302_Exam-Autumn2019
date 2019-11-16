import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementEmailList} from '../actions';
import { Container, Form, Button } from 'react-bootstrap';


function SendEmail() {
    const numberOfEmails = useSelector(state => state.numberOfEmails);
    const dispatch = useDispatch();

    return (
        <Container>
            <h3>Send email</h3>
            <Form>
                <Form.Label>Your email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email address"/>
                <Button onClick={() => dispatch(incrementEmailList())}></Button>
            </Form>
            <p>Number of emails sent: {numberOfEmails}</p>
        </Container>
    )
}

export default SendEmail;