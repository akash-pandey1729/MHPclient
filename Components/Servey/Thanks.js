import React, { Component } from 'react'

import AddressContext from '../../Context/Address/addressContext'

export class Thanks extends Component {
    static contextType=AddressContext
  thankclick=async ()=>{
    const user=this.context
    console.log(user.data.unknown,user.data.problem);
      

    let url="http://localhost:5000/unknownuser/createunknownuser";
    let response=await fetch(url,{
        method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
        body:JSON.stringify({mydetail:user.data.unknown,myproblem:user.data.problem})
      
    });

    let json1=await response.json();
    console.log(json1)

    localStorage.setItem('Mydetail',JSON.stringify(user.data.unknown))

    window.location='/review'
  }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Thanks for completing our questionnaire!</h1>
                </div>
                <button className="btn-dark btn " onClick={this.thankclick} > Review</button>
            </div>
        )
    }
}

export default Thanks
