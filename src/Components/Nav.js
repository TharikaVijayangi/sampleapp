import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
            <div>
                <container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Read To Love</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>   
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </container>
            </div>
        )
    }
}

export default Nav;
