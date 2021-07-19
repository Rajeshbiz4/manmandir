import React from "react";
import { Link ,NavLink} from "react-router-dom";
import validator from 'validator'
// import "../styles/login.scss";
import Logo from "./../assets/Images/man.png";

class Login extends React.Component {
  constructor() {
    super()
    this.state=
    {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    else
    {
      errors["mobileno"] = " ";
    }
   if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Password must include minimum 8 characters, at least one uppercase letter, one lowercase letter and one special character .";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
   
  render() {
    return (
      <div>
        <section className="form my-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
              <Link to="/"><img src={Logo} class="container-fluid" /></Link>
                <div className="loginin">Log In</div>
                <hr className="solid" />
                <div className="loginp">
                  Get access to your
                  <br />
                  Orders, Wishlist and <br />
                  Recommendations.
                </div>
              </div>
              <div className="col-lg-7">
                <h1>Login</h1>
                <h4 className="signin">Login In Your Account</h4>
                <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="text"
                        name="mobileno"
                        maxLength="10"
                        class="form-control my-4 p-2"
                        placeholder="MOBILE NUMBER"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange} 
                      />
                      <div className="passerror">{this.state.errors.mobileno}</div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="password"
                        name="password"
                        class="form-control my-4 p-2"
                        placeholder="PASSWORD"
                        value={this.state.fields.password}
                        onChange={this.handleChange} 
                      />
                      <div className="passworderror">{this.state.errors.password}</div>
                    </div>
                  </div>
                  <NavLink  className="forgot" to="/Forgot">
                    Forgot Password
                  </NavLink>
                  <div className="form-row">
                    <div className="col-lg-7 my-2 p-2" />
                    <button className="btnlogin" value="Register">Login In</button>
                    
                  </div>
                  <div className="line">
                    _______________________OR______________________
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7 my-2 p-2" />
                    <button className="btnotp">Login In With OTP</button>
                  </div>
                  <br />
                  <NavLink to="/signup" className="loginaccount">
                    {" "}
                    Dont have an account? Sign Up
                  </NavLink>
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
