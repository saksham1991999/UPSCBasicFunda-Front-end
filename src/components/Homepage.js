import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import Header from './Header';
import SideNav from './SideNav';
import './HomePage.css'
import Ncert from './Ncert/Ncert';
import Otherbooks from './Otherbooks/Otherbooks';

class Homepage extends React.Component {
    componentDidMount(){
        this.props.onTryAutoSignup();
    }
    render() {
        
        return (
            <div>
               
               <Header {...this.props}/>
               <div className=" ui grid">
                   <div className="two column n" style={{paddingRight:'150px'}}>
               <Ncert/>
               <div className="content" style={{textAlign:'center'}}>
                   NCERT
               </div>
               </div>
               <div className="two column  n">
               <Otherbooks/> 
               <div className="content">
                   Other Standard Books
               </div>
               </div>
               
            </div>
               <div className="na"> 
               <SideNav/>   
               </div>
               
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      isAuthenticated: (state.auth.token !== null)
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
