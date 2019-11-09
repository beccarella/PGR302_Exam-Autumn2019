import React from 'react';
import axios from 'axios';
import {Button, Container} from 'react-bootstrap';

import Header from '../Components/Header';
import Card from '../Components/Card';
import AddPostModal from '../Components/AddPostModal'

const webAPIUrl = "https://localhost:5001/newsarticles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    AddPostModalRef = ({handleShow}) => {
        this.showModal = handleShow;
    }

    onAddNewPostClick = () => {
        this.showModal();
    }

    componentDidMount() {
        axios.get(webAPIUrl)
        .then(res => {
            const data = res.data;
            this.setState({news: data});
            // console.log(this.state.news)
        })
    }

    render() {
        return (
            <div>
                <Header />  
                <AddPostModal ref={this.AddPostModalRef}></AddPostModal>
                <Container className="row justify-content-center">
                    <Card news = { this.state.news } />
                </Container>
                <Button variant="primary" onClick={this.onAddNewPostClick}>Add new article</Button>
            </div>
        )
    }
}

export default Home;