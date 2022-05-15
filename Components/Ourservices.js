import React, { Component } from 'react'
import ourservicescss from '../Components/assests/Css/Ourservices.module.css'
import '../App.css'
export class Ourservices extends Component {
    render() {
        return (
            <div>
                <div className="container our_services">
                    <div className="row">
                           <div className="row">
                           <div className="row d-flex justify-content-center ">
                            <div className={`col-2  ${ourservicescss.button1}`}>
                                <button className={` btn`}>Our Services</button>
                            </div>
                        </div>
                           </div>
                           <div className="col-3">
                               <img src="https://img.freepik.com/free-vector/psychological-counseling-concept-psychological-assistance-service-vector-illustration-flat_186332-1273.jpg?w=1060" alt="" />
                           </div>
                           <div className="col-3">
                                 <img src="https://img.freepik.com/free-vector/psychology-online-counseling-concept-life-mental-health-problems_610956-1310.jpg?w=1060" alt="" />
                           </div>
                           <div className="col-3">
                                  <img src="https://img.freepik.com/free-vector/psychological-counseling-scene-with-psychotherapist-helping-his-patient-solve-mental-problems_125133-438.jpg?w=900" alt="" />
                           </div>
                           <div className="col-3">
                               <img src="https://img.freepik.com/free-vector/medical-support-doctor-s-office-vaccination-certificate-vector-illustratiom_143808-512.jpg?w=740" alt="" />
                           </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ourservices
