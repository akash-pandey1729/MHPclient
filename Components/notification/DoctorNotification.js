import React, { Component } from 'react'
import $ from 'jquery';
export class DoctorNotification extends Component {
    constructor(props){
        super(props);
        let obj1=localStorage.getItem('mydoctordata');
        if(obj1!=null)
        {
            let obj=JSON.parse(obj1)
            console.log(obj);
            this.state={
                user_id:obj._id,
                data:[]
            }
        }
    }
    componentDidMount=async()=>{
        let url='http://localhost:5000/api/doctorconnection/appointment';

        let response=await fetch(url,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({user_id:this.state.user_id})
        });
        let json1=await response.json();
        console.log(json1)
        if(json1.success)
        {
            this.setState({
                data:json1.data
            })
        }
    }
    render() {
        return (
            <div className="Container">
            <div className="row d-flex justify-content-center">
              <div className="col-10">
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  
                >
                Notification
                </a>
                 {this.state.data.map(function(name,key){
                   if(name.notification.flag==1){
                    
                return <div className={`collapse ${name._id}` } key={key} id="collapseExample1">
                  <div className="card card-body my-2">
                    <div className="row">
                      <div className="col-8">
                        {name.notification.msg}
                      </div>
                      <div className="col-2">
                        <button className="btn-success btn" onClick={async ()=>{
                          console.log(name, "ye name that be");
                          let third_url =
                            "http://localhost:5000/api/doctorconnection/editnotification";
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

                          $(`.${name._id}`).hide();

                        }}>Mark as read</button>
                      </div>
                     
                    </div>
                  </div>
                  
                  
                </div>
                   }
                 })}
                
    
    
              </div>
            </div>
          </div>
        )
    }
}

export default DoctorNotification
