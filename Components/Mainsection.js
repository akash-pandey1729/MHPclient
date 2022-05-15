import React, { Component } from "react";
//imrc for creating shortcut above line

// import PropTypes from 'prop-types';
import Aboutpsych from "./Aboutpsych";
import Ourservices from "./Ourservices";
import Footer from "./Footer";
import Navbar from "./Navbar";
import main2 from '../image/main2.jpg'
import main3 from '../image/main3.jpg'
import main4 from '../image/main4.jpg'
import main5 from '../image/main5.webp'

import "../App.css";

// import { useContext } from "react";
import AddressContext from "../Context/Address/addressContext";

import { Link } from "react-router-dom";

export class Mainsection extends Component {
  static contextType = AddressContext;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      address: "",
      phonenumber: "",
      pincode: "",
    };
  }

  handlclick = async (e) => {
    e.preventDefault();
    const user = this.context;
    user.setdata(this.state);
  };
  onemailchange = async (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onaddresschange = async (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  onphonechange = async (e) => {
    this.setState({
      phonenumber: e.target.value,
    });
  };
  onpinchange = async (e) => {
    this.setState({
      pincode: e.target.value,
    });
  };
  onenamechange = async (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        
        <Navbar />
        <div className="main1">
          <div className="img_style">
          
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/doctors-office-concept-flat-cartoon-design-therapist-consults-patient-sitting-table-diagnoses_9209-7755.jpg?w=1060" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={main4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={main5} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
          <div className="container main_section_top">
            <div className="row ">
              <div className="col-6 first_grid">
                <div className="row">
                  <div className="col-auto">
                    <h4 style={{ color: "white" }}>
                      Your privacy is guaranteed
                    </h4>
                  </div>
                  <div className="col-auto">
                    <button>100% safe</button>
                  </div>
                </div>
                <div className="row first_grid-2 my-2">
                  <h1>Mental Health Counseling with Psychologist</h1>
                </div>
                <div className="row first_grid-3">
                  <h4>
                    Discuss your problems with us &, get enlightenment and
                    solutions to your problems.
                  </h4>
                </div>
                <div className="row third_grid my-5">
                  <div className="row-auto">
                    <h2 style={{ color: "black" }}>Why consult with us?</h2>
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src="https://templatekits.themewarrior.com/psych/wp-content/uploads/sites/33/2021/09/BadgeCheck.png"
                          alt=""
                        />
                      </div>
                      <div className="col-auto">
                        <h4 style={{ color: "black" }}>
                          Instant access to our practitioners availability
                        </h4>
                        <p>
                          Elit sit risus lorem proin eget eu molestie nibh odioa
                          non neque.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src="https://templatekits.themewarrior.com/psych/wp-content/uploads/sites/33/2021/09/BadgeCheck.png"
                          alt=""
                        />
                      </div>
                      <div className="col-auto">
                        <h4 style={{ color: "black" }}>
                          Instant access to our practitioners availability
                        </h4>
                        <p>
                          Elit sit risus lorem proin eget eu molestie nibh odioa
                          non neque.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src="https://templatekits.themewarrior.com/psych/wp-content/uploads/sites/33/2021/09/BadgeCheck.png"
                          alt=""
                        />
                      </div>
                      <div className="col-auto">
                        <h4 style={{ color: "black" }}>
                          Instant access to our practitioners availability
                        </h4>
                        <p>
                          Elit sit risus lorem proin eget eu molestie nibh odioa
                          non neque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="row" style={{ height: 100 }}></div>
                <div className="row second_grid">
                  <div className="container d-flex justify-content-center ">
                    <div className="col-10 book">
                      <div className="container">
                        <form action="/survey">
                          <div className="row  ">
                            <h2>Book an apointment</h2>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ab architecto velit aut quam blanditiis non
                              inventore tota
                            </p>
                          </div>

                          <div className="row">
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
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={this.state.email}
                                onChange={this.onemailchange}
                              />
                              <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="name"
                                className="form-control"
                                value={this.state.name}
                                aria-describedby="emailHelp"
                                onChange={this.onenamechange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={this.state.address}
                                onChange={this.onaddresschange}
                              />
                              <div id="emailHelp" className="form-text">
                                We'll never share your address with anyone else.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={this.state.phonenumber}
                                onChange={this.onphonechange}
                              />
                              <div id="emailHelp" className="form-text">
                                We'll never share your phone number with anyone
                                else.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Pincode
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={this.state.pincode}
                                onChange={this.onpinchange}
                              />
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center">
                            <button
                              onClick={this.handlclick}
                              className="btn btn-dark"
                            >
                              <Link to="/survey" style={{ color: "white" }}>
                                Submit
                              </Link>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Aboutpsych />
        <Ourservices />
        <Footer />
      </div>
    );
  }
}

export default Mainsection;
