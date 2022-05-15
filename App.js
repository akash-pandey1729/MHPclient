
import './App.css';

import Servey from './Components/Servey';

// importint routes for component 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'

//importing Signup component
import Singup from './Components/Authentication/Singup';

//importing Signin componecnt
import Signin from './Components/Authentication/Signin';

//importing Context api 
import AddressContext from './Context/Address/addressContext';

//importing Doctor component where is Doctor detail 
import Doctor from './Components/doctor/Doctor';

//importing Patient componet where is Patient detail
import Patient from './Components/patient/Patient';

// importing Adming componetn it is a adming panner who will 
import Admin from './Components/admin/Admin';

//importing Review component where user can see review 
import Review from './Components/Servey/Review';

//importing ViewDoctor :::> list of doctor list
import ViewDoctor from './Components/doctor/ViewDoctor';

// importing Mainsection this section is basically is storing primary data of a user
import Mainsection from './Components/Mainsection';

//importing connection with patient and doctor page where patient can attatched with his doctor
import PatientDoctor from './Components/doctor/PatientDoctor';

//import About of our website and process
import About from './Components/About/About';

// import PatientProfile  which is basically show profile of patient 
import PatientProfile from './Components/patient/PatientProfile';

export class App extends Component {
  constructor(props){
    super(props);
   
    this.state={
      name:"",
      email:"",
      login_email:"",
      login_password:"",
      Login:false,
      doctor_login_email:"",
      doctor_login_password:"",
      admin_login_email:"",
      admin_login_password:"",
      cat:"unknown",
      flag:0,
      unknown:{},
      problem:{}


    }
    
    
  }
   componentDidMount(){
    
  }
   setdata=  (item)=>{
    console.log("call kiya hai",item)

    this.setState({
      name:item.name,
      email:item.email,
      flag:item.flag,

      unknown:item
    },()=>console.log(this.state,"updated hai"))
    
   
   
  }
  setproblem=(item)=>{
    this.setState({
      problem:item
    },()=>console.log(this.state,"setproblem"))
  }
  render() {
    return (
      <AddressContext.Provider value={{data:this.state,setdata:this.setdata,setproblem:this.setproblem}}>
      <BrowserRouter>
    
      

      
    
    <Routes>
    
    <Route path="/" element={<Mainsection/>}/>
    <Route path="/survey" element={<Servey/>}/>
    <Route path="/signup" element={<Singup/>}/>
    <Route path="/signin" element={<Signin history={this.props.history}/>}/>
    <Route path="/profile/doctor" element={<Doctor/>}/>
    <Route path="/profile/patient" element={<Patient/>}/>
    <Route path="/profile/admin" element={<Admin/>}/>
    <Route path="/review" review={this.state} element={<Review/>}/>
    <Route path="/view_doctor" element={<ViewDoctor/>}/>
    <Route path="/api/doctor/:slug" element={<PatientDoctor  />}/>
    <Route path="/api/auth/:slug" element={<PatientProfile/>}/>
    <Route path="/about" element={<About/>}/>
  
  
    
    </Routes>
  </BrowserRouter>
  </AddressContext.Provider>
    )
  }
}

export default App

