import React, { Component } from "react";
import heart from "../../image/default-firstframe.svg";

// import { useContext } from "react";
import AddressContext from "../../Context/Address/addressContext";


export class Topsurvey extends Component {
  static contextType=AddressContext
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:""
           
    }
  }
  

  componentDidMount() {
    const user = this.context
    console.log(user);
    
      
      this.setState({name:user.data.name,email:user.data.email})
      
    
  }

  firstsurvey = () => {
      console.log("hii");

    this.props.setflag(0,1,0,0,0);

  };
  render() {
    return (
        <>
        
      <div className="col-8 ">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <img src={heart} alt="" />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1>Hii {this.state.name}, Hope, your are fine </h1>
            <h1>National Health Questionnaire {this.state.email}</h1>
            <p>Help us gather insight on the population's health</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.firstsurvey}
            >
              Start
            </button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Topsurvey;
