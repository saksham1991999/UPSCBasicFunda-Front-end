import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <div>
           <div className="navbar-1">
               <div className="main-text">Upsc Basic Funda</div>
               <ul>
                   <li><i className="fas fa-search fa-2x"></i></li>
                   <li><i className="fas fa-shopping-cart fa-2x"></i></li>
                   {this.props.isAuthenticated?
                   (<li><button className="button" onClick={this.props.logout}>
                      Logout
                      </button></li>):(<Fragment><li><button className="button">
                      <Link to="/login" className="button">Login</Link>
                      </button></li>
                       <li><button className="button"><Link to="/signup" className="button">Sign up</Link></button></li></Fragment>)}
                      
                  
               </ul>
           </div>
           <div className="navbar-2">
               <ul>
                   <li ><Link to='/' className="list">Home</Link></li>
                   <li><Link to='/' className="list">About Us</Link></li>
                   <li><Link to='/contact' className="list">Contact Us</Link></li>
                   <li><Link to='/' className="list">Terms and Conditions</Link></li>
                   <li><Link to='/join' className="list">Join our Team</Link></li>
                   <li><Link to='/' className="list">Blogs</Link></li>
               </ul>
           </div>
        </div>

            )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}
export default connect(null, mapDispatchToProps)(Header);