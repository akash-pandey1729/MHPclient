import React, { Component } from "react";

import sign from "../assests/Css/Singup.module.css";


import { Navigate } from "react-router-dom";

export class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
      name: "",
      email: "",
      password: "",
      flag: false,

    };

    //in this state flag is for navigate to home page when  user completed his signup
  }
  handlclickdoctor = async (e) => {

  
    e.preventDefault();

    // for creating new doctor fetch post 
    let url = "http://localhost:5000/api/doctor/createdoctor";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        category:"Doctor"

      }),
    });
    let json1 = await response.json();
    console.log(json1);

    // ending creating new doctor

    if (json1.success) {


      console.log("You have been succefully registered");
      this.setState({ flag: true });



// getting detail user 

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
    

// ending detail of user


// starting for sending notification  ot doctor
      let url = "http://localhost:5000/api/doctorconnection/newappointment";
      let response1 = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: json_get_user._id,
          appointment: {
            flag: 3,
            data: {
              name: "",
              patient_id: "",
            },
          },
          notification: {
            flag: 1,
            msg: ` ${json_get_user.name} You have been succefully registered `,
          },
        }),
      });

//ending of notication

//starting verifaction 

      let url2 = "http://localhost:5000/api/adminconnection/newverification";
      let response2 = await fetch(url2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "627ed4d4000ec54831f0f698", // this shoudl be changes accordingly we update admin
          verification: {
            name: json_get_user.name,
            email: json_get_user.email,
            doctor_id: json_get_user._id,
          },
        }),
      });
    } else {
      alert(json1.message);
    }

    //ending verification
  };
//ending doctor creation





  // creating new patient 
  handlclickuser = async (e) => {
    e.preventDefault();
    console.log("You are in signup page of patient");

// sending data to database of new patient
    let url = "http://localhost:5000/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        category:"Patient"
      }),
    });
    let json1 = await response.json();
    console.log(json1);


//ending sending patient data






    if (json1.success) {


     console.log("You have been succefully registered");
      this.setState({ flag: true });


      // get patient detail
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

    
    // ending patient detail

 


//notification portion of patient

      let second_url = "http://localhost:5000/api/connection/notification";
      let response = await fetch(second_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: json_get_user._id,
          notification: {
            flag: 1,
            msg: `Welcome ${json_get_user.name} You have been succefully registered `,
          },
        }),
      });
      let second_json = await response.json();
      console.log(second_json);
    } else {
      alert(json1.message);
    }
  };


  //notification ending

  
  EmailChange = async (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  NameChange = async (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  PasswordChange = async (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  DobChange = async (e) => {
    this.setState({
      dob: e.target.value,
    });
  };
  MobileChange = async (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };
  AddressChange = async (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  render() {
    if (this.state.flag) {
      console.log("hii we are in render");

      return <Navigate to="/" />;
    }
    return (
      <div>
        <div className={`${sign.mybody}`}>
          <div className="container">
            <div
              className={`row d-flex justify-content-center align-items-center ${sign.signtop}`}
            >
              <div className={`col-6 ${sign.signcol}`}>
                <div className="container my-5">
                  <div className={`row ${sign.myh1}`}>
                    <h2>Registration Form</h2>
                  </div>

                  <div
                    className={`row ${sign.mycontact} d-flex flex-column justify-content-center align-items-center`}
                  >
                    <div className="col-4">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                         Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.NameChange}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.EmailChange}
                          className="form-control"
                          id="exampleInputEmail2"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.PasswordChange}
                          className="form-control"
                          id="exampleInputEmail3"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                  </div>
               
                
                  <div className="row  d-flex justify-content-center">
                    <div className="col-3">
                      <button
                        className="btn btn-dark"
                        type="submit"
                        onClick={this.handlclickdoctor}
                      >
                        Doctor
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark"
                        type="submit"
                        onClick={this.handlclickuser}
                      >
                        Patient
                      </button>
                    </div>
                    <div className="col-3">
                    
                      <button className="btn btn-success" type="submit">
                        <a style={{color:'white'}} href="/signin">Singin</a>{" "}
                      </button>
                    <h6 className="text-center"> Have already been signed?</h6>
                  

                    </div>
                    
                   
                  </div>
                  
                </div>

                {/* end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Singup;
