import React from 'react';
import SideNav from './SideNav';
import Head from './Head';

class ContactForm extends React.Component{
    state={name:[],email:[],phone:[],message:[]};
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        /*Post Request axios*/
    }
    render(){
        
        return(
            <div>     
                <Head/>
                <div className="na"> 
               <SideNav/>   
               </div>
                  
                    <form onSubmit={this.onFormSubmit}>
                <label>Name:</label>
                <input type="text"
                onChange={(event)=>{this.setState({name:event.target.value})}}></input>
                <label>Email:</label>
                <input type="email"
                 onChange={(event)=>{this.setState({email:event.target.value})}}
                ></input>
                <label>Phone No:</label>
                <input type="number"
                 onChange={(event)=>{this.setState({phone:event.target.value})}}
                ></input>
                <label>message:</label>
                <input type="textarea"
                 onChange={(event)=>{this.setState({message:event.target.value})}}></input>
                <button>Submit</button>
            </form>
            </div>

        )
    }
}
export default ContactForm;