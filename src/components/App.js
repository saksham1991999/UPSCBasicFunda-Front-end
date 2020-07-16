import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {selectmaterial} from './actions';

import Homepage from './Homepage';
import ContactForm from './ContactForm';
import Jteam from './Jteam';
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/contact" exact component={ContactForm} />
                    <Route path="/join" exact component={Jteam} />
                    </div>
                    </BrowserRouter>
              
            </div>
        );
    }
}
export default App;