import React, { Component } from 'react'
import admincss from '../assests/Css/admin/admin.module.css'
import adminimage from '../../image/admin_image2.png'
import AddressContext from '../../Context/Address/addressContext';
import Verification from '../notification/Verification';


export class Admin extends Component {
    static contextType=AddressContext;
    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            email:"",
            data:{}
            
        }
    }
    async componentDidMount()
    {
      let obj1=localStorage.getItem('Myadmintoken');
      console.log(obj1)
      if(obj1!=null)
        {
               let url="http://localhost:5000/api/admin/getadmin";
               const response=await fetch(url,{

                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    auth_token:obj1

                },
            

               });
               let json1= await response.json();
               
               this.setState({
                   data:json1
                  
               })
               
        }
        else
        {
            alert("Some error please open Admin component")
            

        }

    }
  render() {
    return (
      
       <div className={`${admincss.h}`}>
      <div className="container ">
         <div className="row d-flex justify-content-center ">
             <div className={`col-8  my-5 ${admincss.admincol}`}>
                 <div className="row">

                 <div className={`col-5 d-flex justify-content-center align-items-center   ${admincss.admincol1}`}>

                     <img src={adminimage} alt="" />
                 </div>
                 <div className={`col-7 d-flex justify-content-center align-items-center ${admincss.admincol2}`}>
                      <div className="container">
                          <div className='row  profile'>
                              <h3>Profile</h3>
                          </div>
                          <div className="row name">
                              <h4>{this.state.data.name}</h4>
                              <h3>MBBS</h3>
                              <h3>AIMS DELHI</h3>


                          </div>
                          <div className="row speciality">
                             <div className="row">
                                 <h2>Speciality</h2>
                             </div>
                               <div className="row">
                                   <div className="col-4">
                                       <button  className="btn btn-success">{this.state.data.email}</button>
                                   </div>
                               </div>
                          </div>
                          <div className="row mobile">
                              <h3>Mobile</h3>
                                      <h5>{this.state.mobile}</h5>
                          </div>
                          <div className="row">
                              <h3>About</h3>
                              <p>{this.state.about} </p>
                          </div>
                      </div>
                 </div>
                 </div>

             </div>
         </div>
      </div>
      <Verification/>
  </div>
    )
  }
}

export default Admin
