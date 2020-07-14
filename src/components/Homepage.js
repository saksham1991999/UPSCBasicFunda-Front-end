import React from 'react';
import Header from './Header';
import MiniDrawer from './Sidebar';

class Homepage extends React.Component {
    render() {
        return (
            <div>
               <Header/>    
               <MiniDrawer/>
            </div>
        );
    }
}

export default Homepage;
