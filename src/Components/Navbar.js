import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {FaPhoneAlt,FaUser,FaEnvelope,FaCartPlus} from "react-icons/fa";

class Navbar extends React.Component {
constructor(){
    super()
} 
  
    render(){
       return (
      <div>
          {
            <nav className="navbar navbar-expand-sm  text-white bg-primary" style={{padding:'1px 1px',height:'30px'}}>
             <div  className="container-fluid">
             <FaPhoneAlt/><div className="navbar-brand"style={{fontSize:'15px'}}>+91-9730028231</div>
              <div className="collapse navbar-collapse" id="navbarNav">
              <FaEnvelope style={{height:'13px'}}></FaEnvelope>&nbsp;&nbsp;<div className="navbar-brand" style={{fontSize:'15px'}}>manmandir@gmail.com</div>
                <ul className="navbar-nav">
                <li className="nav-item nav-right">
                  <FaUser style={{marginTop:'24%',marginLeft:'1340%'}}>
                  </FaUser>
                  <br/>
                <NavLink className="nav-link" exact to ="/login"  style={{marginLeft:'1360%',marginTop:'-55%',color:'white'}}>Login</NavLink>
              </li>
              <span class="dash-separator login-signup-separator" style={{marginTop:'0.8%',marginLeft:'750px'}}> | </span>
               <li className="nav-item">
               <NavLink className="nav-link" exact to ="/signup" style={{color:'white'}} >Sign Up</NavLink>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;
              <FaCartPlus style={{marginTop:'1.5%'}}></FaCartPlus>
               
                </ul>
              </div>
              </div>
              </nav>
        }
    </div>);
   }
}
    export default Navbar;