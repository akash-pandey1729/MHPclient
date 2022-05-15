import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
import Review from './Review';

export class Print extends Component {
    generatepdf=()=>{
        window.print();
    }
  render() {
    return (
        <div className="row my-5 d-flex justify-content-center">
        <div className="col-4">

        <button className="btn-success btn" onClick={this.generatepdf}>
              Generate pdf
        </button>
        </div>
        <div className="col-4">

        <button className="btn-danger btn">
              <a href="/view_doctor">Consult with a doctor</a>
        </button>
        </div>
    </div>
    )
  }
}

export default Print
