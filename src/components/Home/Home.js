import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import banner from '../../Assets/karate3.jpg'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Image src={banner} fluid />
            </div>
         );
    }
}
 
export default Home;