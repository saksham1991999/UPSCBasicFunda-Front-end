import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Homepage from './Homepage';
import MiniDrawer from './Sidebar';
import ContactForm from './ContactForm';
import SideNav from './SideNav'
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/contact" exact component={SideNav} />
                    </div>
                    </BrowserRouter>
              
            </div>
        );
    }
}
export default App;