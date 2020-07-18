import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Ncert/Ncert.css'
class Ncert extends Component {
    render() {
        return (
            <div className="m"> 
                <div className="ui compact menu">
                    <div className="ui simple dropdown item">
                    <i class="fas fa-book-open fa-5x"></i>
                    <div className="menu">
                        <div className="item"><Link to="/test">CBSE</Link></div>
                        <div className="item"><Link to="/test">ICSE</Link></div>
  
                        
                    </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Ncert;
