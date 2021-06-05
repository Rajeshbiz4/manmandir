import React from 'react';
// import Home from './login';
import { Link } from 'react-router-dom';
// import '../styles/signup.scss';
import Logo from "./../assets/Images/man.png"

export default class Signup extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
            <section className="form my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                           
                            <img src={Logo} class="container-fluid" />
                            <div className="signupdiv">Sign Up</div>
                            <hr className="solid" />
                            <p className="psignup">We do not share your <br/> personal details with <br/> anyone</p>
                        </div>
                        <div className="col-lg-7">
                        
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        
                                        <input type="text" class="form-control my-2p-2" placeholder="First Name" required />
                                    </div>
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="Last Name" required />
                                    </div>
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="Email" required />
                                    </div>
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="Password" required />
                                    </div>
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="Confirm Password" required />
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="col-lg-7 my-3 p-2" />
                                    <button className="btnsign">Continue</button>
                                </div>
                               
                     <Link to="/login" className="existinglin"> Existing User? Log In</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}


