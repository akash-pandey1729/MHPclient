import React, { Component } from 'react'

export class ThirdServey extends Component {
    constructor(props){
        super(props);
        this.state={
          thirdsurvey:""
        }
    }
    lastok=()=>{
        this.props.setflag(0,0,0,0,1);
        this.props.setproblem(this.state)
    }
    change=(e)=>{
          this.setState({
              thirdsurvey:e.target.value
          },()=>console.log(this.state))
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <select class="form-select" aria-label="Default select example" onChange={this.change}>
  <option selected>How well do you sleep, on average(hr)?</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
  <option value="9">Nine</option>
  <option value="10">Ten</option>
</select>
                    </div>
                    <div className="row my-2">
                        <div className="col-4">
                            <button className="btn btn-success" onClick={this.lastok}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdServey
