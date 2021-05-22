// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchPost } from "./postaction";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home';
import About from './About';
import Navbar from "./Navbar";
import LogoComponent from './Components/LogoComponents';
import CardComponents from './Components/CardComponents';


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
<Navbar/>
<Switch>
  
<Route exact path="/home" component={Home}/>
<Route exact path="/about" component={About}/>

</Switch>
       </Router>
       <LogoComponent/>
       <CardComponents/>

        </div>
      );
    }
 
 export default App;