import React, { Component } from 'react'
import Navbar from '../Navbar'
import dp from '../../image/patient_image.jpg'
import ReactRoundedImage from "react-rounded-image";

export class PatientProfile extends Component {
    constructor(props) {
        super(props);
        let obj=localStorage.getItem('mydoctordata');
        if(obj!=null)
        {
          let obj1=JSON.parse(obj);
          this.state = {
            patient_data:{},
            email:obj1.email,
            doctor_id:obj1._id,
            flag:0,
            image:""
          };
        }
      }

      componentDidMount=async()=>{
        let url = await window.location.href;
        let str = url.substring(31);
        console.log(str);
    let temp = `http://localhost:5000/api/auth/` + str;
    let response = await fetch(temp, {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
        },
      });
    
    let json1 = await response.json();
    if(json1.success)
    {
          this.setState({
              patient_data:json1.data
          },async () => {
            let url="http://localhost:5000/image/getimage";
    
            let response=await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({user_id:str})
    
            })
    
            let json1=await response.json();
            console.log(json1,"what is our name bhia");
            if(json1.success)
            {
                this.setState({
                    image:json1.data[0].image
                },()=>console.log(this.state))
            }
          })
    }
    else
    {
        alert(json1.msg)
    }


      }



  render() {
    return (
      <div>
         <Navbar/>


         <div className="container my-5">
             <div className="row ">
                 <h4 className='text-center'>{this.state.patient_data.name}'s Profile </h4>
             </div>
             <div className="row my-4">
                 <div className="col-4">
                 <div className="card d-flex justify-content-center align-items-center">
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
  <div className="card-body">
    <h5 className="card-title">{this.state.patient_data.name} </h5>
    <a href="#" className="btn btn-primary">Create a meeting</a>
  </div>
</div>

                 </div>
                 <div className="col-8">
                 <div className="card">
  <div className="card-body">
    <h5 className="card-title">Detail </h5>
     <div className="container">
       <div className="row">
         <h5>Name:{this.state.patient_data.name}</h5>
         <h5>Email:{this.state.patient_data.email}</h5>
       </div>
     </div>
    <a href="#" className="btn btn-primary">See Problem Overview</a>
  </div>
</div>

                 </div>
             </div>
         </div>

      </div>
    )
  }
}

export default PatientProfile
