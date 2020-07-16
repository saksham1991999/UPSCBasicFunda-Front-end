import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import './HomePage.css'

class Homepage extends React.Component {
    render() {
        return (
            <div>
               
               <Header/>
               <div className="na"> 
               <SideNav/>   
               </div>
               
            </div>
        );
    }
}

export default Homepage;
