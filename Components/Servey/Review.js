import React, { Component } from "react";
import Myreview from "../assests/Css/Review/review.module.css";

import dp from "../../image/correctsize.jpg";

export class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: {},
      flag: 0,
    };
  }
  componentDidMount = async () => {
    console.log(this.props);
    let obj = localStorage.getItem("Mydetail");
    let obj1 = JSON.parse(obj);
    let url = "http://localhost:5000/unknownuser/findunknownuser";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mydetail: obj1 }),
    });

    let json1 = await response.json();
    console.log(json1);
    if (json1.success) {
      this.setState(
        {
          data1: json1.data,
          flag: 1,
        },
        () => {
          console.log(this.state.data1.mydetail.name);
        }
      );
    }
  };

  render() {
    return (
      <div>
        {!this.state.flag ? null : (
          <div className={`container my-4 ${Myreview.myview}` }>
            <div className="row  d-flex justify-content-center">
            
                <button style={{border:'none'}} className="btn-dark">HealthWorld's Review</button>
              
            </div>
              <hr/>
              <div className="row">
                <div className="col-5">
                  <button className="btn-dark btn">Detail</button>
                </div>
              </div>
            <div className="row my-4">
              <div className="col-8">
                <div className="row">
                  <h5>Name: {this.state.data1.mydetail.name} </h5>
                </div>
                <div className="row">
                  <h5>Email: {this.state.data1.mydetail.email} </h5>
                </div>
                <div className="row">
                  <h5>Address: {this.state.data1.mydetail.address}</h5>
                </div>
                <div className="row">
                  <h5>Phonenumber: {this.state.data1.mydetail.phonenumber}</h5>
                </div>
                <div className="row">
                  <h5>Pincode: {this.state.data1.mydetail.pincode}</h5>
                </div>
              </div>
              <div className="col-4 text-aligns-center">
                <img src={dp} alt="" />
                <hr />
                <div>
                <h6 className="text-center">Passport size photo</h6>

                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-5">
                  <button className="btn-dark btn">Problem</button>
                </div>
              </div>


              <div className="row">
                <div className="row">
                  <h4>Question:1 How are you feeling today?</h4>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <h5>Ans: {this.state.data1.myproblem.firstsurvey}</h5>
                  </div>
                </div>
                <div className="row">
                  <h4>Question:2 How much exercise do you do per week?</h4>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <h5>Ans: {this.state.data1.myproblem.secondsurvey}</h5>
                  </div>
                </div>
                <div className="row">
                  <h4>Question:3 How well do you sleep,on average in hours</h4>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <h5>Ans: {this.state.data1.myproblem.thirdsurvey} hours</h5>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-8">

                </div>
                <div className="col-4">
                  <h6>Created by Healthword Team</h6>
                  <hr/>
                </div>
              </div>

              <div className="row d-flex justiy-content-center">
                <div className="col-4">
                  <button className="btn-danger btn" onClick={()=>{
                    window.print();
                  }}>Print</button>
                </div>
              
                <div className="col-6">
                  <button className="btn-success btn" onClick={()=>{
                    let obj=localStorage.getItem('Mytoken');
                    if(obj==null)
                    {

                      alert("Please sign in or sign up mate");
                      window.location='/signup'
                    }
                    else
                    window.location='/view_doctor'
                  }}> Consult with doctor</button>
                </div>
              </div>
            
          </div>
          
        )}
      </div>
    );
  }
}

export default Review;
