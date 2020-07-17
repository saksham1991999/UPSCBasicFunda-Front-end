import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import './HomePage.css'
import Ncert from './Ncert/Ncert';

class Homepage extends React.Component {
    render() {
        return (
            <div>
               
               <Header/>
               <div className="na"> 
               <SideNav/>   
               </div>
               <div className="n">
               <Ncert/>
               </div>
            </div>
        );
    }
}

export default Homepage;
