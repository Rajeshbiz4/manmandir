import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.scss';
import Logo from "./../assets/Images/man.png"

class Login extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (<div>
            <section className="form my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={Logo} class="container-fluid" />
                            <div className="login">Log In</div>
                            <hr className="solid" />
                            <p>Get access to your<br />Orders, Wishlist and <br />Recommendations.</p>
                        </div>
                        <div className="col-lg-7">
                            <h1>Login</h1>
                            <h4>Sign In Your Account</h4>
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="MOBILE NUMBER" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="password" class="form-control my-4 p-2" placeholder="PASSWORD" required />
                                    </div>
                                </div>
                                <a href="#" className="forgot">Forgot</a>
                                <div className="form-row">
                                    <div className="col-lg-7 my-2 p-2" />
                                    <button className="btnlogin">Login In</button>
                                </div>
                                <div className="line">_______________________OR______________________</div>
                                <div className="col-lg-7 my-4 p-2">
                                    <button className="btn">Login With OTP</button>
                                </div>
                                <div>
                                    <Link to="/signup" className="a"> Dont have an account? Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        )
    }
}

export default Login;