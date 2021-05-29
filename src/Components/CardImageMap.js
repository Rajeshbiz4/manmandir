import React from 'react'
class CardImageMap extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {

        }
    }
    componentDidMount()
    {
        console.log(this.props);
    }
    
    render()
    {
        return(
        <div>
        
             <img src={this.props.image} alt="mandir image"/>
            
             </div>)
    }
}
export default CardImageMap; 