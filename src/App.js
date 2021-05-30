import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import { fetchPost } from "./postaction";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Login from './Components/login.js';
import Signup from './Components/Signup.js';
import HomePage from './Components/HomePage.js';
import HeaderComponent from './Components/HeaderComponents.js';
import FooterComponents from './Components/FooterComponents.js';
import AboutYourSelf from './Components/AboutyourselfComponents';
import './styles/logsign.scss'


// class App extends React.Component {

//   componentDidMount () {
//     console.log("------------");
//     this.props.fetchPost();
//   }

//   render(){
//     console.log("render", this.props.data);
//   return (
//     <div className="App">
//      Redux  
//     { this.props.data.loading ? <div>loading ......</div> : <div>Result</div>}

//     </div>

//   );
//   }
// }
// const mapStatetoProps = state => {
//   return {
//     data : state.quetions,
//   }
// }

// function  mapDispacthToProps(dispatch) {
//    return bindActionCreators({
//     fetchPost
//    }, dispatch)
// }

// export default connect(mapStatetoProps,mapDispacthToProps)(App);

function App() {
  return (
    <div>
     <Router>
        <HeaderComponent/> 
       <Route exact path="/" component={HomePage} /> 
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} />  
       <FooterComponents/>
      </Router >
    </div>
  );
}

export default App;