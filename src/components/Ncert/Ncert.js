import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Ncert.css'
class Ncert extends Component {
    render() {
        return (
            <div className="m"> 
                <div className="ui compact menu">
                    <div className="ui simple dropdown item">
                    <i class="fas fa-book-open fa-5x"></i>
                    <div className="menu">
                        <div className="item"><Link to="/test">Class 6</Link></div>
                        <div className="item"><Link to="/test">Class 7</Link></div>
                        <div className="item"><Link to="/test">Class 8</Link></div>
                        <div className="item"><Link to="/test">Class 9</Link></div>
                        <div className="item"><Link to="/test">Class 10</Link></div>
                        <div className="item"><Link to="/test">Class 11</Link></div>
                        <div className="item"><Link to="/test">Class 12</Link></div>
                        
                    </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Ncert;
