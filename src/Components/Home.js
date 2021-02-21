import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import firebase from '../Configurations/FbConfig';

const db = firebase.firestore();

class Home extends Component {

    state = {
        contactData: [],
        BookName:'',
        Author:'',
        Price:'',
        ISBN:''
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    submitData = (e) => {
        e.preventdefault();
        db.collection('BookInfo').add({
            BookName:this.state.BookName,
            Author:this.state.Author,
            Price:this.state.Price,
            ISBN:this.state.ISBN
        });
    }

    componentDidMount() {
        db.collection('BookInfo').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    contactData: [...this.state.contactData, doc.data()],

                })
            })
        })
    }

    
    render() {
        return (
            <div>
                 <Form onSubmit={this.submitData}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control name="BookName" type="text" placeholder="Enter Book Name" onChange={this.handlechange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control name="Author" type="text" placeholder="Enter Author" onChange={this.handlechange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control name="Price" type="text" placeholder="Enter price" onChange={this.handlechange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control name="ISBN" type="text" placeholder="Enter IBSN" onChange={this.handlechange} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                       

                <h1>Contact Information...</h1>
                {this.state.contactData.length ? (
                    this.state.contactData.map(item => {
                        return (
                            <div>
                                <p>{item.BookName}</p>
                                <p>{item.Author}</p>
                                <p>{item.Price}</p>
                                <p>{item.ISBN}</p>
                            </div>
                        )
                    })
                ) : (
                        <p>Loading.....</p>
                    )}

            </div>



        )
    }
}

export default Home; 
