import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
export class Appointment extends Component {
  constructor(props) {
    super(props);
    let obj = localStorage.getItem("mydoctordata");
    if (obj != null) {
      let obj1 = JSON.parse(obj);

      this.state = {
        email: obj1.email,
        user_id: obj1._id,
        data: [],
      };
    }
  }
  componentDidMount = async () => {
    let url = "http://localhost:5000/api/doctorconnection/appointment";

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: this.state.user_id }),
    });
    let json1 = await response.json();
    console.log(json1);
    if (json1.success) {
      this.setState(
        {
          data: json1.data,
        },
        () => console.log(this.state, "What is your name")
      );
    }
  };

  render() {
    return (
      <div>
        <div className="Container">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <a
                className="btn btn-success"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                New Appointment
              </a>
              {this.state.data.map(function (name, key) {
                if (name.appointment.flag == 1) {
                  return (
                    <div className={`collapse ${name._id}` } key={key} id={`collapseExample`}>
                      <div className="card card-body my-2">
                        <div className="row">
                          <div className="col-8">
                            {name.appointment.data.name} want to consult with
                            you.
                          </div>
                          <div className="col-2">
                            <button
                              className="btn-success btn"
                              onClick={async () => {
                                let obj = localStorage.getItem("mydoctordata");

                                let obj1 = JSON.parse(obj);

                                console.log(name.appointment.data.patient_id);
                                let second_url =
                                  "http://localhost:5000/api/connection/notification";
                                let response = await fetch(second_url, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    user_id: name.appointment.data.patient_id,
                                    notification: {
                                      flag: 1,
                                      msg: `Congratulation Your consult with ${obj1.email} has been accepted `,
                                    },
                                  }),
                                });

                                console.log(name, "ye name that be");
                                let third_url =
                                  "http://localhost:5000/api/doctorconnection/editappointment";
                                let response3 = await fetch(third_url, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    message_id: name._id,
                                    flag:0
                                  }),
                                });

                                let second_json = await response.json();
                                $(`.${name._id}`).hide();

                              }}
                            >
                              Accept
                            </button>
                          </div>
                          <div className="col-2">
                            <button
                              className="btn-danger btn"
                              onClick={async () => {
                                console.log(name.appointment.data.patient_id);
                                let obj = localStorage.getItem("mydoctordata");

                                let obj1 = JSON.parse(obj);
                                let second_url =
                                  "http://localhost:5000/api/connection/notification";
                                let response = await fetch(second_url, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    user_id: name.appointment.data.patient_id,
                                    notification: {
                                      flag: 1,
                                      msg: `Ohho sorry mate, Your consult with ${obj1.email} has been rejected `,
                                    },
                                  }),
                                });
                                let third_url =
                                  "http://localhost:5000/api/doctorconnection/editappointment";
                                let response3 = await fetch(third_url, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    message_id: name._id,
                                    flag:2
                                  }),
                                });

                                let second_json = await response.json();
                                $(`.${name._id}`).hide();
                              }}

                            >
                              Reject
                            </button>
                          </div>
                          <div className="col-2">
                            <button className="btn-dark btn" >
                            <Link style={{color:'white'}} to={`/api/auth/${name.appointment.data.patient_id}`}>View Profile</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <a
                className="btn btn-danger"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Active Appointment
              </a>
              {this.state.data.map(function (name, key) {
              
                if (name.appointment.flag == 0) {
                  return (
                    <div className="collapse" key={key} id={`collapseExample2`}>
                      <div className="card card-body my-2">
                        <div className="row">
                          <div className="col-8">
                            {name.appointment.data.name} is a active patient
                            you.
                          </div>
                          <div className="col-2">
                            <button
                              className="btn-success btn"
                             
                            >
                              Done
                            </button>
                          </div>
                          
                          <div className="col-2">
                            <button
                              className="btn-success btn"
                             
                            >
                              <Link to={`/api/auth/${name.appointment.data.patient_id}`}>View Profile</Link>
                              
                            </button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
