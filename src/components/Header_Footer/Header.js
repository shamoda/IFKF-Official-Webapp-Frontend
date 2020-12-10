import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../Assets/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faUserCircle, faUsers, faChartLine, faSignInAlt, faSignOutAlt, faCalendarAlt, faHandshake,faBars, faImages, faPencilRuler, faCalendarCheck, faCheck, faShoppingBag, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Link className="navbar-brand long_text" to="/" style={{color: "white", fontWeight: 500, fontSize:24 }}><img src={logo} width="60" height="60" alt="IFKF-SL logo" /> International Fumonkai Karate-do Federation - Sri Lanka</Link>
                    <Link className="navbar-brand short_text" to="/" style={{color: "white", fontWeight: 500, fontSize:24 }}><img src={logo} width="60" height="60" alt="IFKF-SL logo" /> IFKF - Sri Lanka</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                        <Link className="nav-link" to="/history"><FontAwesomeIcon icon={faBook} /> History</Link>
                        <Link className="nav-link" to="eventgallery"><FontAwesomeIcon icon={faImages} /> Event Gallery</Link>
                        {/* <Link className="nav-link" to="/events"><FontAwesomeIcon icon={faCalendarCheck} /> Events</Link> */}
                        <Link className="nav-link" to="/getintouch"><FontAwesomeIcon icon={faHandshake} /> Get in touch</Link>

                        {/* {!isUserLoggedIn && <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>}
                        {isUserLoggedIn && <Link className="nav-link" to="/login" onClick={AuthenticationService.logout} ><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

            </div>
         );
    }
}
 
export default withRouter(Header);