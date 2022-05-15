import React, { Component } from "react";

// importing css file of Navbar
import navbarcss from "../Components/assests/Css/Navbar.module.css";

//importing global css
import "../App.css";

import navbar from "./assests/Css/Navbar.module.css";

//importing Link from react-router-dom which is replacement of anchor tag
import { Link } from "react-router-dom";

// importing react round image for profile
import ReactRoundedImage from "react-rounded-image";

//importing dummy photo

import dp from "../image/dp.jpg";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    let url=localStorage.getItem('image_url');
    if(url==null)
    {
      url="";
    }
    this.state = {
      name:"Unknown",
      logout: true,
      cat: "",
      url:url
    };
  }
  handlclick = () => {
  // check whether this item is available in localhost or not
    localStorage.removeItem("Mytoken");
    localStorage.removeItem("Mydoctortoken");
    localStorage.removeItem("Myadmintoken");
    this.setState({ logout: true });

    window.location = "/"; // This line redirect to hoem page
  };

  componentDidMount() {
    // We have saved particulart sign in of doctor ,patient,admin
    let obj1 = localStorage.getItem("Mytoken");
    let obj2 =localStorage.getItem("Mydoctortoken");
    let obj3 =localStorage.getItem("Myadmintoken");

    if (obj1 !=null) {
      this.setState(
        {
          name:localStorage.getItem('ptname'),
          logout: false,
          cat: "Patient",
        },
        () => console.log(this.state, "obj1")
      );
    } else {
      if (obj2 != null) {
        this.setState(
          {
            name:localStorage.getItem('drname'),
            logout: false,
            cat: "Doctor",
          },
          () => console.log(this.state, "obj2")
        );
      } else {
        if (obj3 != null) {
          this.setState(
            {
              name:localStorage.getItem('adminname'),
              
              logout: false,
              cat: "Admin",
            },
            () => console.log(this.state, "obj3")
          );
        }
      }
    }
  }
  notclick = () => {
    window.location = `/profile/${this.state.cat}`;
  };
  render() {
    return (
      <div>
      <div >
        <header className={` ${navbarcss.header}`}>
          <div className="container">
            <div className="col-8">
              <ul className="d-flex ">
                <a className="mx-5" style={{color:'black'}} href="https://api.whatsapp.com/send?phone=8953256730">
              
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>Whatsapp
                </a>
                <a className="mx-5" style={{color:'black'}}  href="tel:8953256730" >
              
                <i class="fa fa-mobile" aria-hidden="true"></i>+91 8953256730
                </a>
              </ul>
            </div>
            <div className="col-4"></div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-tranparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Health World
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " onClick={this.notclick}>
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <div className="row">
                <div className="col">
                  {(() => {
                    if (this.state.cat != "") {
                      return (
                        <div className="cotainer ">
                          <div className="row d-flex justify-content-center">
                          {
          (()=>{
              if(this.state.url)
              {
return   <ReactRoundedImage
                              imageWidth="50"
                              imageHeight="50"
                              image={`http://localhost:5000/static/${this.state.url}`}
                              roundedSize="1"
                            />
  
                
              }
              else
              {

              
              return <ReactRoundedImage
              imageWidth="50"
              imageHeight="50"
              image={dp}
              roundedSize="1"
            />
              }

          })()
      }
                      
                          </div>
                          <div className="row">
                            <h5 style={{ color: "white" }}>
                              {this.state.cat}:{this.state.name}
                            </h5>
                          </div>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
              <form className="d-flex">
                <div className={`row ${navbar.hii}`}>
                  <div
                    className={`col-4 mx-2 ${
                      !this.state.logout ? "d-none" : "d-one"
                    }`}
                  >
                    <button className="btn btn-success" type="submit">
                      {" "}
                      <a href="/signup"> Signup </a>{" "}
                    </button>
                  </div>
                  <div
                    className={`col-4 ${
                      !this.state.logout ? "d-none" : "d-one"
                    }`}
                  >
                    <button className="btn btn-success mx-4" type="submit">
                    
                      <a href="/signin">Signin </a>
                    </button>
                  </div>
                  <div
                    className={`col-4 mx-2  ${
                      this.state.logout ? "d-none" : "d-one"
                    }`}
                  >
                    <button
                      type="button"
                      className="btn btn-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      
                    >
                      Signout
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className=" modal-dialog-centered modal-dialog">
                        <div className={`modal-content ${navbarcss.mymodal}`}>
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Hii {this.state.name}
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            Are you sure want to logout ?
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              No
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={this.handlclick}
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-4 mx-2 ${
                      this.state.logout ? "d-none" : "d-one"
                    }`}
                  >
                    <button type="button" className="btn btn-dark mx-2">
                      <Link to={`/profile/${this.state.cat}`}>Account</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>

    
      </div>
      </div>
    );
  }
}

export default Navbar;
