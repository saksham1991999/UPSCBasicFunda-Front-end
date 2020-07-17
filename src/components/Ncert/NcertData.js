import React from 'react'
import {connect} from 'react-redux';
import {fetchNCERT6} from '../actions/';
import image from '../../images/pdf_109.png';
import faker from 'faker';
class  NcertData extends React.Component{
    componentDidMount(){
        this.props.fetchNCERT6();
    }
    renderPDF=(title)=>{
       return( <div className="two wide column" style={{margin:'auto'}}>
               <div className="ui fluid card">
            <img src={image} style={{width:'140px',height:'140px'}} ></img>
            </div>
            <div className="content" style={{textAlign:'center',fontWeight:'bold'}}>
                {title}
            </div>
        </div>)
    }
    renderMCQ=(id)=>{
    return(   <div className="two wide column" style={{margin:'auto'}}>
        <div className="ui fluid card" style={{alignItems:'center'}}>
            <i class="fas fa-border-none fa-5x" ></i>
            </div>
            <div className="content">
               {`Mock Test ${id}`}
            </div>
            <div className="content" style={{color:'red'}}>
                Rs. 200
            </div>
        </div>
    );
    }
        renderSummary=()=>{
            return(
        
            <div className="two wide column" style={{margin:'auto',width:'600px'}}>
                     <div className="image ui fluid">
                <img src={faker.image.avatar()}></img>
                </div>
                <div className="ui grid">
                    <div className="seven wide column" style={{alignItems:'center'}}>
                <div className="ui compact menu" style={{fontSize:"0.7rem",padding:'0' ,background: '#00C2FF',borderRadius:'20px' ,height:'30px',width:'60px',transform:'translate(0,10px)'}}>
                    <div className="ui simple dropdown item ">
                        Sample
                    <div class="menu">
      <div class="item">Summary</div>
      <div class="item">MCQ</div>
    </div>
                </div>
                </div>
                </div>
                <div className="nine wide column">
                <div className="ui compact menu" style={{fontSize:"0.7rem",padding:'0' ,background: '#00C2FF',borderRadius:'20px' ,height:'30px',width:'120px',transform:'translate(-20px,10px)'}}>
                    <div className="ui simple dropdown item " >
                        Buy Now /Add to Cart
                    <div class="menu">
      <div class="item">Buy Now</div>
      <div class="item">Add to Cart</div>
    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
    
            )
        }
    render() {
       
        return (
            <div className="ui segment" style={{background:'#ffffff'}}>
                <div className="ui header">
                    Class 6
                </div>
                <div className="ui header">
                    PDF
                </div>
                <div className="ui grid" >
                    {this.props.notes.map(note=>{
                       return this.renderPDF(note.name)
                    })}
                </div>
                <div className="ui header">
                    Summary
                </div>
                <div className="ui grid ">
                {this.props.notes.map(note=>{
                       return this.renderSummary()
                    })}
                    </div>
                    <div className="ui header">
                        MCQ
                    </div>
                    <div className="ui grid ">
                {this.props.notes.map(note=>{
                       return this.renderMCQ(note.id)
                    })}
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        notes:Object.values(state.notes)
    }
}
export default connect(mapStateToProps,{fetchNCERT6})(NcertData);
