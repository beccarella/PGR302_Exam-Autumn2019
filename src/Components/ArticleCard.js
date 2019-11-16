import React from 'react';
import axios from 'axios';
import { Card, Button, ButtonToolbar, Container, Row, Form} from 'react-bootstrap';


const webAPIUrl = "https://localhost:5001/newsarticles";

const ArticleCard = ({news}) => {

    function deletePost(id) {
        axios.delete(`${webAPIUrl}/${id}`)
        .then(res => {
            console.log(res)
            window.location.reload();
        })
    }

    if(news){
        const nNews = news.map((n, index) => {
            return(
                <Card key={index} style={{width: '18rem' }} id="card">
                    <Card.Img variant="top" src={`https://localhost:5001/images/${n.img}`} fluid="true" />
                    <Card.Body>
                        <Card.Title>{n.title}</Card.Title>
                        <Card.Subtitle>{n.ingress} </Card.Subtitle>
                        <Card.Text>author: {n.author}</Card.Text>
                        <Card.Text>{n.date}</Card.Text>
                        <Card.Text>{n.runningText}</Card.Text>                            
                        <Card.Text>category: {n.category}</Card.Text>
                        <ButtonToolbar>
                            <Button variant="outline-info">Edit</Button>
                            <Button onClick={deletePost.bind(this, n.id)} variant="outline-danger">Delete</Button>
                        </ButtonToolbar>
                    </Card.Body>
                </Card>
            )
        })
        return(
            <Container>
                <Row>   
                    {nNews}
                </Row>
            </Container>
        )
    }
}

export default ArticleCard;