import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "./actions/postaction.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./Components/login.js";
import Signup from "./Components/Signup.js";
import HomePage from "./Components/HomePage.js";
import HeaderComponent from "./Components/HeaderComponents.js";
import FooterComponents from "./Components/FooterComponents.js";
import AboutYourSelf from "./Components/AboutyourselfComponents";
import forgotpassward from "./Components/Forgot Password";
import AddToCard from "./Components/AddToCard";

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
      <Grid>
        <Router>
          <Grid item xs={12}>
            {" "}
            <HeaderComponent />
          </Grid>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/Forgot passward" component={forgotpassward} />
          <Grid item xs={12}>
            {" "}
            <FooterComponents />
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
