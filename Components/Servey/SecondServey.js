import React, { Component } from 'react'

export class SecondServey extends Component {
  constructor(props){
    super(props);
    this.state={
      secondsurvey:""
    }
  }

  submitsecond=()=>{
    this.props.setflag(0,0,0,1,0);
    this.props.setproblem(this.state)
  }
  change=(e)=>{
    this.setState({
      secondsurvey:e.target.value
     
    },()=>console.log(this.state))
    
    
  }
    render() {
        return (
            <div>
                <div className="container">
                <form>
  <fieldset >
    <legend>How much exercise do you do per week?</legend>
    
    <div className="mb-3">
     
      <select id="disabledSelect" className="form-select" onChange={this.change}>
        <option>None</option>
        <option>Less than 5 hours</option>
        <option>5-10 hours</option>
        <option>10-20 hours</option>
        <option>More than 20 hours</option>
      </select>
    </div>
    
    <button  className="btn btn-success" onClick={this.submitsecond}>Ok</button>
  </fieldset>
</form>
                </div>
            </div>
        )
    }
}

export default SecondServey
