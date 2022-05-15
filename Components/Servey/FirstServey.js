import React, { Component } from 'react'
import firstsurvey from '../assests/Css/FirstSurvey.module.css'
export class FirstServey extends Component {
  constructor(props){
    super(props)
    this.state={
      firstsurvey:""
    }
    
  }
 secondok=()=>{

    this.props.setflag(0,0,1,0,0);
    this.props.setproblem(this.state)

  }
  changing=(e)=>{
    this.setState({
      firstsurvey:e.target.value
    },()=>console.log(this.state))
  }
    render() { 
        return (
            <div>
             <div className="row">
             <select class="form-select" aria-label="Default select example"  onChange={this.changing}>
  <option selected>How are you feeling today?</option>
  <option value="Overwhelm">Overwhelm</option>
  <option value="Stressed">Stressed</option>
  <option value="Anxious">Anxious</option>
  <option value="Sad">Sad</option>
  <option value="Angry">Angry</option>
  <option value="Drained">Drained</option>

</select>
<div className="row">
  <div className="col-2">

  <button className="btn-success btn" onClick={this.secondok}>Ok</button>
  </div>
</div>
             </div>
                
            </div>
        )
    }
}

export default FirstServey
