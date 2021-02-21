import React, { Component } from 'react'
import { Container, Row,Card,ListGroup,Col,ListGroupItem } from 'react-bootstrap'

class BooksSection extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2>Find your Favorite books here...</h2>
                    <Row>
                        <Col md="4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col md="4">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img className="card-image" variant="top" src="https://i.pinimg.com/736x/6f/dc/67/6fdc67b884c3b5ab3c2d9b74c469362c--magazine-art-magazine-covers.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img className="card-image" variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default BooksSection;
