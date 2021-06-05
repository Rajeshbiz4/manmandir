import React from "react";
import { Link } from "react-router-dom";
// import "../styles/login.scss";
import Logo from "./../assets/Images/man.png";

class Login extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <section className="form my-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <img src={Logo} class="container-fluid" />
                <div className="loginin">Log In</div>
                <hr className="solid" />
                <p className="loginp">
                  Get access to your
                  <br />
                  Orders, Wishlist and <br />
                  Recommendations.
                </p>
              </div>
              <div className="col-lg-7">
                <h1>Login</h1>
                <h4>Sign In Your Account</h4>
                <form>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="text"
                        class="form-control my-4 p-2"
                        placeholder="MOBILE NUMBER"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="password"
                        class="form-control my-4 p-2"
                        placeholder="PASSWORD"
                        required
                      />
                    </div>
                  </div>
                  <Link  className="forgot" to="/Forgot">
                    Forgot Password
                  </Link>
                  <div className="form-row">
                    <div className="col-lg-7 my-2 p-2" />
                    <button className="btnlogin">Login In</button>
                  </div>
                  <div className="line">
                    _______________________OR______________________
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7 my-2 p-2" />
                    <button className="btnotp">Login In With OTP</button>
                  </div>
                  <br />
                  <Link to="/signup" className="loginaccount">
                    {" "}
                    Dont have an account? Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
