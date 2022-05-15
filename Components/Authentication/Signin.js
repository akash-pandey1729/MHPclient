import React, { Component } from "react";

import signin from "../assests/Css/Signin.module.css";

import { Navigate } from 'react-router-dom';
export class Signin extends Component {
  
  constructor(props){
  
    super(props);
    this.state={
      email:"",
      password:"",
      success:false,
      user_id:""
      
    }
  }

  // starting authentication of patient
  handlclick=async (e)=>{
    
    e.preventDefault();

    console.log("You are in login page");
    let url="http://localhost:5000/api/auth/login";
    
    const response= await fetch(url,{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:this.state.email,password:this.state.password})

    });
    
    const json1=await response.json();
    if(json1.success)
    {

        this.setState({
          success:true
        })
        localStorage.setItem('Mytoken',json1.auth_token);

        let url_get_user="http://localhost:5000/api/auth/getuser";

    

        let response_get_user=await fetch(url_get_user,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth_token':json1.auth_token
            }
    
        })
    
        let json_get_user=await response_get_user.json();
    
        localStorage.setItem('ptname',json_get_user.name);
        localStorage.setItem('mydata',JSON.stringify(json_get_user));
    
      
        
        
    }
    else
    {
      alert(json1.msg);
    }
  }

  // ending authentication of patient

  // authentication of doctor 
  doctorhandlclick= async (e)=>{
    e.preventDefault();
    console.log("You are in login page of doctors");
    let url="http://localhost:5000/api/doctor/login";
    const response= await fetch(url,{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:this.state.email,password:this.state.password})


    });
    const json1=await response.json();
    console.log(json1,"hii");


    if(json1.success)
    {

        this.setState({
          success:true
        })
        

        localStorage.setItem('Mydoctortoken',json1.auth_token);

        let url_get_user="http://localhost:5000/api/doctor/getdoctor";

    

    let response_get_user=await fetch(url_get_user,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth_token':json1.auth_token
        }

    })

    let json_get_user=await response_get_user.json();
    localStorage.setItem('drname',json_get_user.name);
    localStorage.setItem('mydoctordata',JSON.stringify(json_get_user))
    
      
        
        
    }
    else
    {
      alert(json1.msg);
    }

  }

  //ending authentication of doctor

  handlclickadmin=async (e)=>{
    e.preventDefault();

    console.log("hii admin signin")
    let url="http://localhost:5000/api/admin/login";
    const response= await fetch(url,{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:this.state.email,password:this.state.password})


    });
    
    const json1=await response.json();

    if(json1.success)
    {
      localStorage.setItem('Myadmintoken',json1.auth_token);
      
        this.setState({
          success:true
        })


        let url_get_user="http://localhost:5000/api/admin/getadmin";

    

    let response_get_user=await fetch(url_get_user,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth_token':json1.auth_token
        }

    })
 let json_get_user=await response_get_user.json();
        

    localStorage.setItem('adminname',json_get_user.name);
    localStorage.setItem('myadmindata',JSON.stringify(json_get_user))
      
        
        
    }
    else
    {
      alert(json1.msg);
    }

  }
  OnEmailChange=async (e)=>{
     
    this.setState({
      email:e.target.value
    })
   

  }
  OnPasswordChange=async (e)=>{
     
    this.setState({
      password:e.target.value
    })
    

    

  }
  render() {
    if(this.state.success==true)
    {
      console.log("hii we are in render");
      
      return <Navigate to="/" />
    }
    
    return (
      <div>
        <div className={`${signin.mybody}`}>
          <form  >
          <div className="container">
            <div
              className={`row d-flex justify-content-center align-items-center ${signin.signtop}`}
            >
              <div className={`col-6 ${signin.signcol}`}>
                <div className="container my-5">
                  <div className={`row ${signin.myh1}`}>
                    <h2>Sign In</h2>
                  </div>

                  {/* started */}

                  <div
                    className={`row ${signin.mycontact} d-flex justify-content-center`}
                  >
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={this.state.email}
                          onChange={this.OnEmailChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          value={this.state.password}
                          onChange={this.OnPasswordChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row  d-flex justify-content-center">
                    <div className={`col-3 ${signin.myh1}`}>
                      <button className="btn btn-success" type="submit">
                        <a style={{color:'white'}} href="/signup">Singup</a>
                      </button>
                      Do not have a account?
                    </div>
                    <div className="col-3">
                      <button className="btn btn-dark" type="submit"  onClick={this.doctorhandlclick} >
                       Doctor
                      </button>
                      
                    </div>
                    <div className="col-3">

                      <button className="btn btn-dark" type="submit" onClick={this.handlclick} >
                       Patient
                      </button>
                    </div>
                    <div className="col-3">

                      <button className="btn btn-dark" type="submit" onClick={this.handlclickadmin} >
                       Admin
                      </button>
                    </div>
                   
                  </div>
                </div>

                {/* end */}
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
