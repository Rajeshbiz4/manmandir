import React from "react"
import Logo from "./../assets/Images/man.png";
import '../styles/logo.scss';
export default class LogoComponent extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        
        return(<div><img src={Logo} className="img"></img></div>)
    }
}
 