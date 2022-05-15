import React, { Component } from "react";
// import logo from '../logo.svg';
import PropTypes from "prop-types";

import logo from "../health.png";


import Topsurvey from "./Servey/Topsurvey";
import FirstServey from "./Servey/FirstServey";
import SecondServey from "./Servey/SecondServey";
import ThirdServey from "./ThirdServey";
import Thanks from "./Servey/Thanks";
import AddressContext from "../Context/Address/addressContext";

export class Servey extends Component {

  static contextType=AddressContext
  constructor(props){
    super(props); 
    // console.log("constructor");
    this.state = {
     flag0:1,
     flag1:0,
     flag2:0,
     flag3:0,
     flag4:0,
    
       firstsurvey:"",
       secondsurvey:"",
       thirdsurvey:""
       
     
    
      
  };

}
componentDidMount=()=>{
  console.log(this.state,"hii we are here")
}
setflag=(a,b,c,d ,e)=>{
 this.setState({
   flag0:a,
   flag1:b,
   flag2:c,
   flag3:d,
   flag4:e
 });
}
setproblem=(item)=>{
  if(item.firstsurvey)
  {
    this.setState({
     firstsurvey:item.firstsurvey
    },()=>console.log(this.state,"first"))
  }
  if(item.secondsurvey)
  {
    this.setState({
    
        secondsurvey:item.secondsurvey
      
    },()=>(this.state,"second"))
  }
  if(item.thirdsurvey)
  {
    this.setState({
  
        thirdsurvey:item.thirdsurvey
      
    },()=>{
      console.log(this.state,"third");
      const user=this.context
      user.setproblem(this.state)
      console.log(user);

    })
  }

  
   
}
  render() {
    return (
      <div>
        <div className="main2 ">
          <div className="img_style2">
            <img src={logo} alt="" />
          </div>
          <div className="container d-flex justify-content-center second_page">
            {this.state.flag0 ? <Topsurvey setflag={this.setflag}    />:null}
            {this.state.flag1?<FirstServey setflag={this.setflag}  setproblem={this.setproblem}/>:null}
            {this.state.flag2?<SecondServey setflag={this.setflag}  setproblem={this.setproblem}/>:null}
            {this.state.flag3?<ThirdServey setflag={this.setflag}  setproblem={this.setproblem}/>:null}
            {this.state.flag4?<Thanks />:null}

          </div>
        </div>
      </div>
    );
  }
}

export default Servey;
