
import React from 'react';
import {Link} from 'react-router-dom';
import './Head.css';
class Head extends React.Component{
    render(){
        return(
            <div className="Navba">
           <div className="navba-1">
               <div className="main-text"><b>Upsc Basic Funda</b></div>
               <ul>
                   <li><i className="fas fa-search fa-2x"></i></li>
                   <li><i className="fas fa-shopping-cart fa-2x"></i></li>
                   <li><button className="button">Login</button></li>
                   <li><button className="button">Sign up</button></li>
               </ul>
           </div>
           <div className="navba-2">
               <ul>
                   <li ><Link to='/' className="list">Home</Link></li>
                   <li><Link to='/' className="list">About Us</Link></li>
                   <li><Link to='/contact' className="list">Contact Us</Link></li>
                   <li><Link to='/' className="list">Terms and Conditions</Link></li>
                   <li><Link to='/' className="list">Join our Team</Link></li>
                   <li><Link to='/' className="list">Blogs</Link></li>

               </ul>
           </div>
        </div>

            )
    }
}
export default Head;