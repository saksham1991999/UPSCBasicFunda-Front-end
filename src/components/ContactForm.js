import React from 'react';

class ContactForm extends React.Component{
    state={name:[],email:[],phone:[],message:[]};
    render(){
        
        return(
            <form>
                <label>Name:</label>
                <input type="text"></input>
                <label>Email:</label>
                <input type="email"></input>
                <label>Phone No:</label>
                <input type="number"></input>
                <label>message:</label>
                <input type="field"></input>
                <button>Submit</button>
            </form>
        )
    }
}
export default ContactForm;