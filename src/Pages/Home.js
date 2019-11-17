import React from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';

import Card from '../Components/ArticleCard';


const webAPIUrl = "https://localhost:5001/newsarticles";

/**
 * Container for ArticleCard
 */

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
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
            <Container>
                <Row>
                    <Col lg={true}>
                        <Card news = {this.state.news} />
                    </Col>
                </Row> 
            </Container>
        )
    }
}

export default Home;