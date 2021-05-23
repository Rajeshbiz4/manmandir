import React from 'react';
// import Home from './login';
import { Link } from 'react-router-dom';
import '../styles/signup.scss';
import Logo from "./../assets/Images/man.png"

class Signup extends React.Component {
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
                            <img src={Logo} class="container-fluid" style={{ margintop: '20%',height:'50%',width:'60%' }} />
                            <div className="login">Sign Up</div>
                            <hr className="solid" />
                            <p>We do not share your <br/> personal details with <br/> anyone</p>
                        </div>
                        <div className="col-lg-7">
                        
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="MOBILE NUMBER" required />
                                    </div>
                                </div>
                                
                                
                                <div className="form-row">
                                    <div className="col-lg-7 my-3 p-2" />
                                    <button className="btnsign">Continue</button>
                                </div>
                               
                                <Link to="/login" class="asign"> Existing User? Log In</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        )
    }
}
export default Signup;

