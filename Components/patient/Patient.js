import React, { Component } from 'react'
import dp from '../../image/unknow.png'
import patientcss from '../assests/Css/Patient/patient.module.css'
import Notification from '../notification/Notification'
import Navbar from '../Navbar'
import ReactRoundedImage from "react-rounded-image";

export class Patient extends Component {

    constructor(props){
        super(props);
        let obj=localStorage.getItem('Mytoken');
        let mydata=JSON.parse(localStorage.getItem('mydata'));

        if(obj!=null)
        {
            
            
            this.state={
              name:"",
              email:"",
              SelectedFile:null,
              user_id:mydata._id,
              url:"",
              data:{}
              
          }
        }
       
        
       
    }
    async componentDidMount()
    {
        this.alwaysfetching();

      let obj1=localStorage.getItem('Mytoken');
      if(obj1!=null)
        {
               let url="http://localhost:5000/api/auth/getuser";
               const response=await fetch(url,{

                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'auth_token':obj1

                },
            

               });
               let json1= await response.json();
               console.log(json1);
               
               this.setState({
                   data:json1
                  
               },()=>console.log(this.state,"hiii"))
               
        }
        else
        {
            console.error("It is not a patient page");
            

        }

    }
    fileselectedhandler=(e)=>{
        this.setState({
            SelectedFile:e.target.files[0]
            
        })
    }
    alwaysfetching=async()=>{
        
        let url="http://localhost:5000/image/getimage";

        let response=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({user_id:this.state.user_id})

        })

        let json1=await response.json();
        if(json1.success)
        {
            this.setState({
                url:json1.data[0].image
            },()=>console.log(this.state))
        }

        localStorage.setItem('image_url',json1.data[0].image);

    }
    upload=async ()=>{

        console.log(this.state)

        let url="http://localhost:5000/image/upload";
        

        const formdata=new FormData();
        formdata.append("user_id",this.state.user_id);
        formdata.append("testImage",this.state.SelectedFile);

        const options = {
            method: 'POST',
            body: formdata,
          };
          fetch(url, options).then(()=>{

              this.alwaysfetching();
          });

          
    }
  render() {
    return (
        

      <div className={  ` ${patientcss.h}`}>
          <Navbar/>
          <div className="container my-5 ">
              <div className="row ">
                  <div className="col-4 ">
                  <div className="card  " >
  <div className="card-body  d-flex flex-column justify-content-center align-items-center ">
      {
          (()=>{
              if(this.state.url)
              {
  return <ReactRoundedImage image={`http://localhost:5000/static/${this.state.url}`} />
                
              }
              else
              return <ReactRoundedImage image={dp} />

          })()
      }
  

  
  <div className="row">

  <input type="file"  onChange={this.fileselectedhandler}/>

      
  </div>
  
      <div className="row">
    <a href="#" className="btn btn-primary" onClick={this.upload}>Upload</a>

      </div>
  </div>
</div>
                  </div>
                  
                  <div className="col-8">
                  <div className="card" >
  <div className="card-body">
      <div className="container">

      
        <div className="row d-flex flex-column">
            <div className="col-6">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={this.state.data.name} disabled/>
  </div>
            </div>
            <div className="col-6">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={this.state.data.email} disabled/>
  </div>
            </div>
            <div className="col-6">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value="Sarai Dangari Tikari Varanasi" disabled/>
  </div>
            </div>
        </div>
      </div>

      <div className="row">
          <div className="col-3">
          <input type="file"  onChange={this.documenthandler}/>

          </div>
      </div>
    <a href="#" className="btn btn-primary">Update Profie</a>
  </div>
</div>
                  </div>
              </div>
          </div>
          <Notification/>

  </div>

    )
  }
}

export default Patient
