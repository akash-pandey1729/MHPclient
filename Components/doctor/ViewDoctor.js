import React, { Component } from "react";
import Navbar from "../Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import viewdoctor from "../assests/Css/Doctor/view_doctor.module.css";
import dp from "../../image/dp2.jpg";
import ReactRoundedImage from "react-rounded-image";
export class ViewDoctor extends Component {
   constructor(props) {
    super(props);
    
    this.state = {
      text: "",
      data: [],
      all_image:[]
    };
  }
  handlclickdoctor = async (e) => {
    e.preventDefault();

    let url = "http://localhost:5000/api/doctor/viewdoctor";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: this.state.text }),
    });
    let json1 = await response.json();
    console.log(json1);

    if (json1.success) {

      let obj=[];
      for(let element of json1.data)
      {
        let obj1={
          data:element,
          image_data:this.state.all_image[element._id]
        }
        obj.push(obj1);
      }
      this.setState({
        data:obj
      })
    
      
    } else {
      alert(json1.message);
    }
  };
  Onsearch = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  

  componentDidMount=async ()=>{
    let obj={};
    let url1="http://localhost:5000/image/getallimage";

    let response1=await fetch(url1,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify()

    })

    let json2=await response1.json();


    if(json2.success)
    {

      for(let i of json2.data)
      {
            obj[i.user_id]=i;
      }


      let url = "http://localhost:5000/api/doctor/getalldoctor";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
      
      });
      let json1 =  await response.json();
      let arr=[];
  
      for(let element of json1.data)
      {
        let obj1={
          data:element,
          image_data:obj[element._id]
        }
        arr.push(obj1);
        
      }
      console.log(arr);
    
      this.setState({
        data:arr,
        all_image:obj
      })
      
      
    }


    

  }

  render() {
    return (
      <div className={`${viewdoctor.mybody}`}>
        <Navbar />
        <div className="container">
          <div className="row d-flex justify-content-center my-5">
            <div className="col-6 d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Name/Speciality/City"
                aria-label="Search"
                value={this.state.text}
                onChange={this.Onsearch}
              />
              <button
                className="btn btn-dark"
                type="submit"
                onClick={this.handlclickdoctor}
              >
                Search
              </button>
            </div>
             {this.state.data && this.state.data.map(function(name,index){
              
              
           if(name.data.varified==1){
           return  <div key={index} className={`row d-flex my-5 `}>
              <div className="card">
                <div className="row">
                  <div className="col-3">
                    {
                      (()=>{

                        if(name.image_data)
                        {
                             
                           return <ReactRoundedImage image={`http://localhost:5000/static/${name.image_data.image}`}/>
                        }
                        else
                        {

                          return <ReactRoundedImage image={dp}/>
                        }
                        
                      })()
                    
                    }
                  </div>
                  <div className="col-4 my-3">
                    <h4>Name:{name.data.name} </h4>
                    <h4>Email:{name.data.email} </h4>
                    <h4>Speciality:Neurologist</h4>
                    <h4>Address: New york</h4>
                    <h4>Time slot: 22*7</h4>
                  </div>
                  <div className="col-5 d-flex justify-content-center align-items-center">
                    <div>
                      <button className="btn-dark btn"><a href={`/api/doctor/${name.data._id}`}>See More</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           }
             })
             }



          </div>
        </div>
      </div>
    );
  }
}

export default ViewDoctor;
