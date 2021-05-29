
import React from "react"
import { Navbar } from "react-bootstrap"

export default class FooterComponents extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(
<nav className="navbar navbar-expand-sm  text-light bg-primary" style={{ padding: '1px 1px', height: '30px' ,marginTop:'2%'}}>

 
  <div className="footer-copyright text-center py-3" style={{marginLeft:'30%'}}>© 2020 Copyright: All Rights are Reserved with Hemant Traders.
    
  </div>
 

</nav>

        )
    }
}
 