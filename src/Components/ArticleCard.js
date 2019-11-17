import React from 'react';
import axios from 'axios';
import { Card, Button, ButtonToolbar, Container, Row, Form} from 'react-bootstrap';


const webAPIUrl = "https://localhost:5001/newsarticles";

const ArticleCard = ({news}) => {

    let updateArticle = {
        title: "",
        ingress: "",
        author: "",
        date: "",
        runningText: "",
        category: "",
        img: ""
    }

    function uploadImage (event) {
        event.preventDefault();
        let file = document.getElementById("update-file");
        let data = new FormData();
        
        data.append("file", file.files[0]);
        console.log(data);
        
        let imgUrl = data.get('file');
        updateArticle.img = imgUrl.name;
        
        axios({
            method: 'post',
            url: 'https://localhost:5001/newsarticles/savePicture',
            data: data,
            config: {headers: {'content-Type': 'multipart/form-data'}}
        })
        return imgUrl.name;
    }      
      

    function update(event, id) {
        updateArticle.img = uploadImage(event);
        let sendUpdateArray = {
            id: id,
            title: updateArticle.title,
            ingress: updateArticle.ingress,
            author: updateArticle.author,
            date: updateArticle.date,
            runningText: updateArticle.runningText,
            category: updateArticle.category,
            img: updateArticle.img
        }
        axios.put(webAPIUrl, sendUpdateArray);
    }

    function changeTitle(event) {
        updateArticle.title = event.target.value
    }

    function changeIngress(event) {
        updateArticle.ingress = event.target.value
    }

    function changeAuthor(event) {
        updateArticle.author = event.target.value
    }

    function changeDate(event) {
        updateArticle.date = event.target.value
    }

    function changeRunningText(event) {
        updateArticle.runningText = event.target.value
    }

    function changeCategory(event) {
        updateArticle.category = event.target.value
    }

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
                <Card key={index} style={{width: '18rem' }} id={"card"}>
                    <Card.Img variant="top" src={`https://localhost:5001/images/${n.img}`} fluid="true" />
                    <Card.Body>
                        <Card.Title>{n.title}</Card.Title>
                        <Card.Subtitle>{n.ingress} </Card.Subtitle>
                        <Card.Text>author: {n.author}</Card.Text>
                        <Card.Text>{n.date}</Card.Text>
                        <Card.Text>{n.runningText}</Card.Text>                            
                        <Card.Text>category: {n.category}</Card.Text>
                        <ButtonToolbar>
                            <Button onClick={deletePost.bind(this, n.id)} variant="outline-danger">Delete</Button>
                        </ButtonToolbar>
                    </Card.Body>
                    <Container>
                        <Form onSubmit={(event) => update(event, n.id)}>
                            <Form.Control type="text" defaultValue={n.title} onChange={(event) => changeTitle(event)}></Form.Control>
                            <Form.Control type="text" defaultValue={n.ingress} onChange={(event) => changeIngress(event)}></Form.Control>
                            <Form.Control type="text" defaultValue={n.author} onChange={(event) => changeAuthor(event)}></Form.Control>
                            <Form.Control type="text" defaultValue={n.date} onChange={(event) => changeDate(event)}></Form.Control>
                            <Form.Control type="text" defaultValue={n.runningText} onChange={(event) => changeRunningText(event)}></Form.Control>
                            <Form.Control type="text" defaultValue={n.category} onChange={(event) => changeCategory(event)}></Form.Control>
                            <Form.Control type="file" name="img" id ="update-file"/>
                            <Button variant="outline-info" type="submit" >Update</Button>
                        </Form>
                    </Container>
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