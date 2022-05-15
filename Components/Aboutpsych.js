import React, { Component } from 'react'
import psychcss from '../Components/assests/Css/Patient/Aboutpsych.module.css'
import '../App.css'

export class Aboutpsych extends Component {
    render() {
        return (
            <div>
                <div className="container About_psych"  >
                    <div className="row">
                        <div className="row d-flex justify-content-center ">
                            <div className={`col-2  ${psychcss.button1}`} >
                                <button   className={` btn ${psychcss.button1}`}>About Psych</button>
                            </div>
                        </div>
                       <div className="col-12 pysch my-2 ">
                           <img src="https://img.freepik.com/free-vector/woman-using-laptop-female-doctor-smartphone_1262-19818.jpg?t=st=1647318595~exp=1647319195~hmac=e3e5f1d2810e964867bff673acf4bccf1d921522d9b814a00114379cdebeeade&w=1060" alt="" />
                       </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutpsych
