
import CardImageMap from './CardImageMap';
import React from 'react';

class ButtonComponents extends React.Component
{
    constructor()
    {
      super()
     
    }
    
   
    render()
    {
      return(<div>
              <button style={{background:'greenyellow',fontSize:'15px',padding:'2px 2px',borderRadius:'20px',width:'8%',height:'1%',color:'black',marginLeft:'5%',fontFamily:'sans-serif'}}>Add</button>
              </div>)
    }
}



export default ButtonComponents;