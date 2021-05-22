
import React from "react"
import Logo from "./Images/mandir.jpg"
 import './Sass.scss';


class CardComponents extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(

        <div className='demo'>
        
            <img src={Logo} style={{height:'200px',width:'150px',marginTop:'5%' ,marginLeft:'10%'}} class="circle"></img>
            <img src={Logo} style={{height:'200px',width:'150px',marginTop:'5%' ,marginLeft:'10%'}} class="circle"></img>
            <img src={Logo} style={{height:'200px',width:'150px',marginTop:'5%' ,marginLeft:'10%'}} class="circle"></img>
            <img src={Logo} style={{height:'200px',width:'150px',marginTop:'5%' ,marginLeft:'10%'}} class="circle"></img>
            </div>
        )
            
    }
}
export default CardComponents;