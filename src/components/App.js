import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {selectmaterial} from './actions';

import Homepage from './Homepage';
import ContactForm from './ContactForm';
import Jteam from './Jteam';
import NCERT from './Ncert/Ncert'
import NcertData from './Ncert/NcertData';
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
                    </div>
                    </BrowserRouter>
              
            </div>
        );
    }
}
export default App;