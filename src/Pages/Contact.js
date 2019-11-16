import React from 'react';
import { Container } from 'react-bootstrap';
import SendEmail from '../Components/SendEmail';

const Contact = () => {
    return (
        <Container>
            <section>
                <h3>Contact</h3>
                <SendEmail/>
            </section>
        </Container>
    )
}

export default Contact;