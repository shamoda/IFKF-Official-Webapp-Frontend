import React, {Component} from "react";
import { Container, Card, CardDeck, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshake, faPhone, faEnvelope, faMapMarkerAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Container fluid className="main-container" >

                <Container fluid>

                    <p style={{fontSize:"40px", color:"white", textAlign:"center", marginTop:"50px"}}>Get in Touch
                    </p>

                </Container>

                <Container fluid style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Row xs="1" md="1">
                        <Col lg={true} lg={4}>

                            <Card style={{background:"transparent", paddingTop:"20px", marginTop:"20px", border:"none", paddingLeft:"10px"}}>
                                <Card.Header style={{paddingBottom:"0px", fontSize:"25px", backgroundColor:"transparent", border:"none"}}>
                                    How to Find Us
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living near by, come visit IFKF-Sri Lanka Head Office during office hours.
                                    </Card.Text>
                                </Card.Body>
                                <br/>
                                <Card.Header style={{paddingBottom:"0px", fontSize:"20px", backgroundColor:"transparent", border:"none"}}>IFKF-Sri Lanka</Card.Header>
                                <Card.Body style={{paddingTop:""}}>
                                    {/* <Card.Title>Phone</Card.Title> */}
                                    <Card.Text>
                                        Address: 37/2, I.D.H. Gothatuwa New Town, Sri Lanka<br/>
                                        Tel: 0112 56 33 776<br/>
                                        Mobile: 0777 94 55 08<br/>
                                        Email: ifkf.sl2019@gmail.com<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={true} lg={8}>

                            <Card style={{background:"transparent", paddingTop:"20px", paddingLeft:"10px", paddingRight:"10px", marginTop:"20px", border:"none"}}>
                                <Card.Header style={{paddingBottom:"0px", fontSize:"25px", backgroundColor:"transparent", border:"none"}}>Get in Touch</Card.Header>
                                <Card.Body style={{paddingTop:""}}>
                                    <form name="contact" method="POST" data-netlify="true">

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" style={{backgroundColor:"transparent", color:"white"}} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:"transparent", color:"white"}} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Your Message</Form.Label>
                                            <Form.Control as="textarea" rows={4} placeholder="Enter message" style={{backgroundColor:"transparent", color:"white"}} />
                                        </Form.Group>

                                        
                                        
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>

            </Container>
        );
    }
}

export default Contact;