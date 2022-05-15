import React, { Component } from "react";
import Navbar from "../Navbar";
import mycss from "../assests/Css/Doctor/p_d.module.css";
import ReactRoundedImage from "react-rounded-image";
import dp from "../../image/dp2.jpg";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export class PatientDoctor extends Component {
  constructor(props) {
    super(props);
    let obj=localStorage.getItem('mydata');
    if(obj!=null)
    {
      let obj1=JSON.parse(obj);
      this.state = {
        data: {},
        appointment:{
          name:obj1.email,
          patient_id:obj1._id,
          
        },
        flag:0,
        image:""
      };
    }
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
  componentDidMount = async () => {
    let url = await window.location.href;
    let str = url.substring(33);
    console.log(str);
    let temp = `http://localhost:5000/api/doctor/` + str;

    let response = await fetch(temp, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    let json1 = await response.json();
    console.log(json1);
    this.setState(
      {
        data: json1,
      },
      async () => {
        let url="http://localhost:5000/image/getimage";

        let response=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({user_id:str})

        })

        let json1=await response.json();
        
        if(json1.success)
        {
            this.setState({
                image:json1.data[0].image
            },()=>console.log(this.state))
        }
      }
    );
  };

  book=async()=>{
    let url='http://localhost:5000/api/doctorconnection/newappointment';
    let response=await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({user_id:this.state.data._id,
    appointment:{
      data:this.state.appointment,
      flag:1
    },
    notification:{
      flag:0
    }
    },
     )
    });
    
    let second_url="http://localhost:5000/api/connection/notification";
                 let response1=await fetch(second_url,{
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({user_id:this.state.appointment.patient_id,
            
                  notification:{
                    flag:1,
                    msg:`Your request has been sent to ${this.state.data.name} `
                  }})
              });
              let second_json=await response1.json();
              console.log(second_json);


    
  }
  render() {
    return (
      <div className={`  ${mycss.mybody}`}>
        <Navbar />
        <div className={`container `}>
          <div className="row my-5  d-flex justify-content-center">
            <div className="col-3">
              <h4>{this.state.data.name}'s profile </h4>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="row d-flex justify-content-center">
                    <div className="col-6">
                      {
                        (()=>{
                          if(this.state.image=="")
                          {

                            return <ReactRoundedImage image={dp} />
                          }
                          else
                          {
                            return <ReactRoundedImage image={`http://localhost:5000/static/${this.state.image}`} />
                          

                          }

                        })()
                      }
                    </div>
                  </div>
                  <div className="row my-3 d-flex justify-content-center">
                    <div className="col-5">
                      {/* <button className="btn btn-success">
                        Book Appointment
                      </button> */}
              
<button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Book Appointment
</button>


<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        would you like to consult with this doctor
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.book}>Book</button>
      </div>
    </div>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Dr Detail</h5>
                    <div className="card-text">
                     <div className="row">
                         <h4>Name:{this.state.data.name} </h4>
                     </div>
                     <div className="row">
                     <h4>Email:{this.state.data.email} </h4>
                     </div>
                     <div className="row">
                         <h4>Speciality:Neurolosist</h4>
                     </div>
                     <div className="row">
                        <h4>Open: 24*7</h4>
                     </div>
                    </div>
                    <a href="#" className="btn btn-dark">
                      See certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Review</h5>
                  <p className="card-text">
                    Average rating given by the Patient
                  </p>
                  <ReactStars
                    count={5}
                    onChange={this.ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4}
                  />
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Review By Patient</h5>
                 
                  <ReactStars
                    count={5}
                    onChange={this.ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4.5}
                  />
                   <p className="card-text">
                    Good Doctor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientDoctor;
