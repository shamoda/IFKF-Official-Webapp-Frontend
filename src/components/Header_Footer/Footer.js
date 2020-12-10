import React, {Component} from "react";
import {Navbar, Container, Col} from "react-bootstrap";

class Footer extends Component {
    state = {};

    render() {
        // let fullYear = new Date().getFullYear();

        return (
            <div>
                <br></br>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Col lg={12} className="text-center text-muted">
                            <div style={{fontWeight:"500"}}>&copy; Digitally Crafted by <a href="https://www.ceylon-dev.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"white"}} >Ceylon-dev</a></div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
