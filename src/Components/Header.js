import React from 'react';
import { NavLink} from "react-router-dom";
import AddPostModal from '../Components/AddPostModal'

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';


export default class Header extends React.Component {

    AddPostModalRef = ({handleShow}) => {
        this.showModal = handleShow;
    }

    onAddNewPostClick = () => {
        this.showModal();
    }
    
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light">
                <Navbar.Brand href="#home">Good News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">  
                    <Nav className="mr.auto">
                        <NavItem eventkey={1} href="/"><Nav.Link as={NavLink} to="/" >Home</Nav.Link></NavItem>
                        <NavItem eventkey={2} href="/about"><Nav.Link as={NavLink} to="/about">About</Nav.Link></NavItem>
                        <NavItem eventkey={3} href="/contact"><Nav.Link as={NavLink} to="/contact">Contact</Nav.Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="primary" onClick={this.onAddNewPostClick}>Add new article</Button>
                <AddPostModal ref={this.AddPostModalRef}></AddPostModal>
            </Navbar>
        )
    }
}