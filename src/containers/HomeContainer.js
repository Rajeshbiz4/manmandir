import '../styles/App.css';
import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import LogoComponent from '../components/LogoComponents';
import CardComponents from '../components/CardComponents';


    function HomeContainer() {
      return (
        <div>
       <LogoComponent/>
       <CardComponents/>
        </div>
      );
    }
 
 export default HomeContainer;