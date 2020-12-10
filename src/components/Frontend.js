import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Header_Footer/Header';
import Footer from './Header_Footer/Footer';
import NotFound from './404NotFound/404NotFound'
import Contact from './Contact/Contact';

class Frontend extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Router>

                    <Navbar />

                    <Switch>

                        <Route path="/" exact component={Home}/>

                        <Route path="/getintouch" component={Contact}/>

                        <Route component={NotFound}/>

                    </Switch>

                    <Footer />

                </Router>
            </div>
         );
    }
}
 
export default Frontend;