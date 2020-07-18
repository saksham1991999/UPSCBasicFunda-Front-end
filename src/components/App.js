import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import {selectmaterial} from './actions';

import Homepage from './Homepage';
import ContactForm from './ContactForm';
import Jteam from './Jteam';
import NCERT from './Ncert/Ncert'
import NcertData from './Ncert/NcertData';
import Login from './Login';
import Signup from './Signup';
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/contact" exact component={ContactForm} />
                    <Route path="/join" exact component={Jteam} />
                    <Route path="/test" exact component={NcertData} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    
    
                    </div>
                    </BrowserRouter>
              
            </div>
        );
    }
}
export default App;