import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchPost } from "./actions/postaction";


class App extends React.Component {

  componentDidMount () {
    this.props.fetchPost();
  }

  render(){
    console.log("render", this.props.data);
  return (
    <div className="App">
     Redux  
    { this.props.data.loading ? <div>loading ......</div> : <div>Result</div>}
    </div>
  
  );
  }
}
const mapStatetoProps = state => {
  return {
    data : state.quetions,
  }
}

function  mapDispacthToProps(dispatch) {
   return bindActionCreators({
    fetchPost
   }, dispatch)
}

export default connect(mapStatetoProps,mapDispacthToProps)(App);
