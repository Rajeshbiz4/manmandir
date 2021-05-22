import React from 'react';
import { Link } from 'react-router-dom';
import './Sass.scss';
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
                            <img src={Logo} class="container-fluid" style={{ margintop: '20%',height:'50%',width:'60%' }} />
                            <div className="login">Log In</div>
                            <hr className="solid" />
                            <p>Get access to your<br />Orders, Wishlist and <br />Recommendations.</p>
                        </div>
                        <div className="col-lg-7">
                            <h1 className="my-6" style={{ marginleft: '15%' }}>Login</h1>
                            <h4 >Sign In Your Account</h4>
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
                                    <div className="col-lg-7 my-3 p-2" />
                                    <button className="btnlogin">Login In</button>
                                </div>
                                <div>__________________OR________________</div>
                                <div className="col-lg-7 my-3 p-2">
                                    <button className="btn">Login With OTP</button>
                                </div>
                                {/* <Link to='/'>Home</Link> */}
                                <Link to="/About" class="a"> Dont have an account? Sign Up</Link>

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
