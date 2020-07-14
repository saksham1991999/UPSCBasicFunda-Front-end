import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <div className="Navbar">
           <div className="navbar-1">
               <div className="main-text"><b>Upsc Basic Funda</b></div>
               <ul>
                   <li><i className="fas fa-search fa-2x"></i></li>
                   <li><i className="fas fa-shopping-cart fa-2x"></i></li>
                   <li><button>Login</button></li>
                   <li><button>Sign up</button></li>
               </ul>
           </div>
           <div className="navbar-2">
               <ul>
                   <li ><Link to='/' className="list">Home</Link></li>
                   <li><Link to='/' className="list">About Us</Link></li>
                   <li><Link to='/' className="list">Contact Us</Link></li>
                   <li><Link to='/' className="list">Terms and Conditions</Link></li>
                   <li><Link to='/' className="list">Join our Team</Link></li>
                   <li><Link to='/' className="list">Blogs</Link></li>

               </ul>
           </div>
        </div>

            )
    }
}
export default Header;