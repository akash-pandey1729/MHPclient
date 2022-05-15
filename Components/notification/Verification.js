import React, { Component } from 'react'
import $ from 'jquery';
export class Verification extends Component {
    constructor(props){
        super(props); 
        let obj=localStorage.getItem('myadmindata');
        if(obj!=null)
        {
            let obj1=JSON.parse(obj);

            this.state={
                 email:obj1.email,
                user_id:obj1._id,
                data:[]
            }
        }
        
    } componentDidMount=async()=>{
        let url='http://localhost:5000/api/adminconnection/verification';

        let response=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
           body:JSON.stringify({user_id:this.state.user_id})

        });
        let json1=await response.json();
        console.log(json1,this.state.user_id);
        if(json1.success)
        {
            this.setState({
                data:json1.data
            })
        }
        

    }
   

    render() {
        return (
            <div>
                <div className="Container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              
            >
            New Verification
            </a>
             {this.state.data.map(function(name,key){

               if(name.varified==0){
               
              
                
            return <div className={`collapse ${name._id}` } key={key} id={`collapseExample`}>
              <div className="card card-body my-2">
                <div className="row">
                  <div className="col-8">
                   {name.verification.name} want to verification from your side
                  </div>
                  <div className="col-2">
                    <button className="btn-success btn" onClick={async()=>{
                      let obj=localStorage.getItem('Mydoctortoken');
                  
                          let obj1=JSON.parse(obj);
                      
                      console.log(name.verification.doctor_id);
                      let second_url="http://localhost:5000/api/doctorconnection/newappointment";
        let response=await fetch(second_url,{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify({user_id:name.verification.doctor_id,
            appointment:{

              flag:3,
              data:{
                name:"",
                patient_id:""
              }

            },
         notification:{
           flag:1,
           msg:`congratulation Now you are a vefied doctor `
         }})
     });
     let second_json=await response.json();
                      
     let url2="http://localhost:5000/api/doctor/editdoctor";

     let response1=await fetch(url2,{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({id:name.verification.doctor_id,flag:1})
     })
     let url3="http://localhost:5000/api/adminconnection/editadminconnection";

     let response2=await fetch(url3,{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({id:name._id,flag:1})
     })

     $(`.${name._id}`).hide();

     
                    }} >Verify</button>
                  </div>
                  <div className="col-2">
                    <button className="btn-danger btn" onClick={async()=>{
                      console.log(name.verification.doctor_id);
                      
                      let obj=localStorage.getItem('Mydoctortoken');
                  
                      let obj1=JSON.parse(obj);
                      let second_url="http://localhost:5000/api/doctorconnection/newappointment";
        let response=await fetch(second_url,{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify({user_id:name.verification.doctor_id,
            appointment:{

            },
         notification:{
           flag:1,
           msg:`Oh no you are rejected by admin`
         }})
     });
     let second_json=await response.json();
     let url2="http://localhost:5000/api/doctor/editdoctor";

     let response1=await fetch(url2,{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({id:name.verification.doctor_id,flag:-1})
     })
     let url3="http://localhost:5000/api/adminconnection/editadminconnection";

     let response2=await fetch(url3,{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({id:name._id,flag:-1})
     })
     $(`.${name._id}`).hide();
                    }} >Reject</button>
                  </div>
                 
                </div>
              </div>
              
              
            </div>
               }
              
             })}


          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Verification
