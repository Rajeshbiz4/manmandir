import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import { fetchPost } from "./postaction";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Login from './Components/LoginComponents';
import Signup from './Components/Signup';
import LogoComponent from './Components/LogoComponents';
import CardComponents from './Components/CardComponents';
import HomeContainer from "./containers/HomeContainer";
import AboutYourSelf from './Components/AboutyourselfComponents';
import OurPurpose from './Components/OurPurpose';
import ContactUs from './Components/ContactUs';
import Navbar from './Components/Navbar';
import HeaderComponent from './Components/HeaderComponents';
import MobileNumber from './Components/MobileNumber';
import CardImageMap from './Components/CardImageMap';
import FooterComponents from './Components/FooterComponents';


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
        <CardImageMap/>
        <HeaderComponent />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/MobileNumber" component={MobileNumber}/>
        </Switch>
        <LogoComponent />
        <Navbar />
        <AboutYourSelf/>
        <OurPurpose />
        <ContactUs />
        <FooterComponents/>
      </Router >



    </div>
  );
}

export default App;