
import React from "react"
import Logo from "./Images/man.png"

class LogoComponent extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(<div><img src={Logo} style={{height:'150px',width:'200px',backgroundColor:'red',border:'1px solid black' ,marginTop:'0.7%'}} class="circle"></img></div>)
    }
}
export default LogoComponent;