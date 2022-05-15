import React, { Component } from 'react'

import '../App.css'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                <div className="footer-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Health World</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div className="col-lg-6">
                    <form action="" method="post"> <input type="email" name="email"/><input type="submit" value="Subscribe"/> </form>
                </div>
            </div>
        </div>
    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
